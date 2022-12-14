import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import express from 'express';
import mongoose from 'mongoose';

import cors from 'cors';
const app = express();
const port = process.env.PORT || 5000;
const dbName = "Wall_Street_Trade"

import userRouter from './router/users.js';
import postRouter from './router/posts.js'

// app.use(bodyParser.json({extended: true}));
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use('/api/v1/posts', postRouter);
app.use('/api/v1/auth', userRouter);

app.get("/", (req, res) => {
    res.send("Hello World! This is Project 4 server");
});

const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@${process.env.MONGO_HOST}?retryWrites=true&w=majority`

mongoose
.connect(CONNECTION_URL, { dbName })
.then(()=>{
    console.log('db connected successfully!')
})
    .catch((e) =>{
        console.log(e)
        console.log('failure to connect to db')
    })

app.listen(port, () => {
    console.log(`WSTrade backend running on port ${port}...`)
})


  // mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//     .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);

// **********************

// app.listen(port, async () => {
//     try {
//         await mongoose.connect(CONNECTION_URL, { dbName: stocktransaction})
//     } catch(err) {
//         console.log(`Failed to connect to DB`)
//         process.exit(1)
//     }

//     console.log(`WSTrade backend listening on port ${port}`)
// })

// app.listen(PORT, async () => {
//     try {
//         await mongoose.connect(CONNECTION_URL, { dbName: process.env.MONGO_DB})
//     } catch(err) {
//         console.log(`Failed to connect to DB`)
//         process.exit(1)
//     }

//     console.log(`WSTrade backend listening on port ${port}`)
// })