const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const users = require('../models/users');
dotenv.config({path:"./config.env"});


// list all users
exports.users = (req,res)=>{
    res.json(users);
}


// signs up a new user
exports.signup = async(request,response)=>{
    
    try {
        if(users.find((Email) => Email.email === request.body.email )) {
             response.status(400).send("That email already exist");
         }
        if (request.body.password !== request.body.confirmPassword) {
             response.send(`password and confirm password doesn't match`);
         }
         else{
        console.log(request.body);
        let hashedPassword = await bcrypt.hash(request.body.password,10);
        const newUser = {
            id: users.length +1,
            fullName: request.body.fullName,
            email: request.body.email,
            password: hashedPassword
        }
        users.push(newUser)
        response.status(200).json(users);
        }
    } catch (error) {
        console.log(request.body);
        console.log(request.body);
        response.json(
            {
                status: 400
            }
        )
    }
};


// sign in a user
exports.checkPassword = async (request,response)=>{
    let person = users.find((p) => p.email === request.body.email);
    console.log(person);
    if (!person) {
        response.send(`User not found.`)
        }
    try {
        
        if (await bcrypt.compare(request.body.password , person.password)){
            console.log(request.body.password + " " + person.password);
            response.send(`Success`)
        }
        else{
            console.log(request.body.password + " " + person.password);
            response.send(`Wrong password`)
        }
    } catch (error) {
        response.status(500).send(error)
    }

}