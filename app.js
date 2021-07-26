const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRouter = require('./router/userRouter');
const productRouter = require('./router/productRouter');

dotenv.config({path:"./config.env"});
const port = process.env.PORT ;
const app =  express();

app.use(express.json());
// app.use(bodyParser.urlencoded({extended: true}));



app.use('/product', productRouter);
app.use('/user', userRouter);




app.listen(port, () => {
    console.log(`server running at localhost:${port}`)
})