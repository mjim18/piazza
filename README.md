# piazza

The POST /register allows the user to create an account by inputting their name, email, and password, which is then encrypted. The POST /login allows the user to login using email and password and the auth-token is returned. POST /posts requires the auth-token to be in the header and allows the user to make a post by inputing a title, description, and number of likes. GET /posts is available without the auth-token and allows the user to see all the posts. GET /posts/:id allows the user to extract a single post using the ID and it is also accessable without an account. PUT /posts/:id allows the post creator to update the post using the post ID. DELETE /posts/:id allows the post creator to only have authenitcation to delete the post. 

![Screenshot 2025-03-20 174631](https://github.com/user-attachments/assets/e9810988-9db1-4417-b071-101233b29de2)
![Screenshot 2025-03-20 174833](https://github.com/user-attachments/assets/3dd8896a-86b5-43d8-a928-8f2c769e5c6a)
![Screenshot 2025-03-20 174922](https://github.com/user-attachments/assets/6e977ff4-0337-46a3-9be8-163bf01c922a)
![Screenshot 2025-03-20 173154](https://github.com/user-attachments/assets/7b37fce5-74e4-4f2e-8186-97d9b648d465)
![Screenshot 2025-03-20 173520](https://github.com/user-attachments/assets/257bcf7b-8d86-4fb0-abc5-f8c4e15b0e9e)
![Screenshot 2025-03-20 173945](https://github.com/user-attachments/assets/e750229a-351c-4b82-aa6e-9adc291e8dba)
![Screenshot 2025-03-20 174322](https://github.com/user-attachments/assets/f5e4b6b8-48bf-4088-9ec5-f30aa03796b5)
