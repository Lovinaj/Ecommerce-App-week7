const express = require('express');
const app = express();
const FriendList = require('./models/FriendList');
const bodyParser = require('body-parser');
app.use(express.json());
const port = 3000;


app.get('/', (req, res) =>{
    res.send('hello dev')
})

app.get('/FriendList', (req, res) =>{
    console.log(req.protocol);
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.originalUrl);
    console.log(req.subdomains);

    res.json(FriendList).status(200);

   
})

app.post('/FriendList', (req, res) =>{
    const newFriend = req.body;
   FriendList.push(newFriend);
    res.json(FriendList).status(200);
})
    

app.listen(port, () => {
    console.log(`server running on port http://127.0.0.1:${port}`)
}) 