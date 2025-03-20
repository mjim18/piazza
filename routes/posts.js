const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/User')


const Post = require('../models/Post')
const {postValidation} = require('../validations/validation')

const verifyToken = require('../verifyToken')

router.get('/', async(req,res)=>{
    try{
        const posts = await Post.find()
        res.send(posts)
    }catch(err){
        res.status(400).send({message:err})
    }
})

router.post('/', verifyToken, async(req,res)=>{
    
    // Validation 1 to check user input
    const {error} = postValidation(req.body)
    if(error){
       return res.status(400).send({message:error['details'][0]['message']})
    }

    const post = new Post({
        title:req.body.title,
        description:req.body.description,
        likes:req.body.likes,
        createdBy:req.user._id
    })

    try{
        const savedPost = await post.save()
        res.send(savedPost)
    } catch(err){
        res.status(400).send({message:err})
    }
})

router.get('/:id', async(req,res) =>{
    try {
        const { id } = req.params 

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: 'Invalid post ID' })
        }

        const post = await Post.findById(id)  // Use the extracted id

        if (!post) {
            return res.status(404).json({ message: "Post not found" })
        }

        res.status(200).send(post)  // Return the found post
    } catch (err) {
        res.status(500).send({ message: err.message })  // More informative error handling
    }

});

router.put('/:id', verifyToken, async(req,res) => {
    try {
        const post = await Post.findById(req.params.id)
        
        if (!post){
            return res.status(400).send({message: 'Post not found'})
        }

        if (post.createdBy.toString() != req.user._id){
            return res.status(400).send({message: 'You are not authorized to update'})
        }

    
        post.title = req.body.title
        post.description = req.body.description
        post.likes = req.body.likes        

    const updatedPost = await post.save()
    res.send(updatedPost)

    } catch (err) {
        res.status(500).send({message: err.message})
    }
})

router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const { id } = req.params;

        const post = await Post.findById(id);
        if (!post) return res.status(400).send({ message: 'Post not found' });

        if (post.createdBy.toString() != req.user._id){
            return res.status(400).send({message: 'You are not authorized to delete this post'})
        }
        await post.deleteOne()
        res.send({message: 'Post deleted'})
    } catch(err){
        res.status(400).send({message: err.message})
    }

})

module.exports = router
