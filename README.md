# jwtauth-demo
This is an example of using JWT strategy in your Express application

There are four simple routes
1. POST /users
    ```json
        {
        "email":"test@mail.com",
        "name":"Viky",
	    "password":"123456"
        }
2. POST /auth
    ```json
        {
        "email":"test@mail.com",
	    "password":"123456"
        }
3. GET /checkLogin **Authenticated Route**
    > Your JWT should be included in headers with key as **"token"**
3. GET /users/all

Detailed explanation about the exercise https://blog.wowzer.in/?p=365 