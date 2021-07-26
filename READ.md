Ecommerce App
Using your existing ecommerce application:
Refactor your code, so that you use the router method instead of the app method.
Create a signup and sign in routes so a user can register and login to their account.

You will need a dummy database format or model for your user datas.
In your application, create a User.js file in a models folder. Your User.js file should be an array of your user object.

{	
	id: Unique,
email: String,
fullName: String,
password: String
}

User stories to be accomplished:
In the signup route
Your request.body should be an object with email, fullName, password, confirmPassword keys.
Validate if password and confirmPassword have the same value.
Two users should not have the same email in your database.
Save new user to the database and return a json object of user details.

In the sign in route
Your request.body should be an object with email and password.
Only registered email can sign in. 
Validate if email and password from the request.body matches with one in the database.
Return a json object of user details

Your code should use the router method.

You should have a user database.

How should I do this?
Create a user database in your model folder.
Create a controller folder.
In your controller folder, create a product.js file and rewrite your product endpoints with the router method. Don’t forget to delete the existing ones.
Create a user.js file and Write your endpoints for users to sign up and sign in using the router method too.

