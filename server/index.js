const express = require('express');
const cors = require('cors');
const server = express();
const { MongoClient } = require('mongodb');

server.use(express.json()); // req.body
server.use(cors());
const mongoClient = new MongoClient('mongodb+srv://eolavaca:10mmglock@smalldb.mjjubq7.mongodb.net/?retryWrites=true&w=majority&appName=smalldb');

mongoClient.connect();

const { emailRegex, passwordRegex, dataTemplate } = require('./utils')

//create user
server.post('/api/auth/register', async (req, res) => {
    const { username, name, email, password } = req.body;

    if (username && name && email && password) {
        const isUserNameTaken = await mongoClient.db("userdata").collection("users").findOne({ username: username });
        const isEmailTaken = await mongoClient.db("userdata").collection("users").findOne({ email: email })

        if (!isUserNameTaken && typeof username === "string" && username.length >= 3) {
            dataTemplate.username = username;
        } else {
            console.log('issue on line 22');
            return res.sendStatus(400);
        }
        if (!isEmailTaken && emailRegex.test(email)) {
            dataTemplate.email = email;
        } else {
            console.log('issue line 28');
            return res.sendStatus(400);
        }
        if(typeof name === 'string') {
            dataTemplate.name = name;
        } else {
            console.log('issue line 34');
            return res.sendStatus(400)
        }
        if(passwordRegex.test(password)) {
            dataTemplate.password = password;
        } else {
            console.log('issue line 40')
            return res.sendStatus(400);
        }
        const newUser = await mongoClient.db("userdata").collection("users").insertOne(dataTemplate)
        if(!res.headersSent) return res.sendStatus(200).json(newUser)
    } else {
        console.log("line 18, one of the required data is empty or null")
        return res.sendStatus(400);
    }
    //res.sendStatus(200)
})

//auth
server.post('/api/auth/login', async (req, res) => {
    const { username, password } = req.body;
    if((username && password)) {
        const query = emailRegex.test(username) ? {email: username, password: password} : {username: username, password: password} 
        const isThereAuser = await mongoClient.db("userdata").collection("users").findOne(query);
        if(!isThereAuser) return res.sendStatus(401);
        return res.status(200).json(isThereAuser);
    } else {
        console.log('issue on line 61');
        return res.sendStatus(400);
    }
})



server.listen(7575, () => { console.log('Server Working at 7575') })

// mongodb, mongoose