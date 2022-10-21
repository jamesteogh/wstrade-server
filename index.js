// import * as dotenv from 'dotenv' 
// const dotenv = require('dotenv')

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRouter from './router/posts.js'

const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(
    cors({
        origin: "*",
    })
);

app.use('/api/v1/posts', postRouter);

const port = process.env.PORT || 5000;

// const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@${process.env.MONGO_HOST}?retryWrites=true&w=majority`
const CONNECTION_URL = `mongodb+srv://jamesteogh:h5yjq9hd@generalassembly.wwul4.mongodb.net/?retryWrites=true&w=majority`

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//     .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);

mongoose.connect(CONNECTION_URL).then(()=>{console.log('db connected successfully!')})
    .catch((e) =>{
        console.log(e)
        console.log('failure to connect to db')
    })

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

app.listen(port, () => {
    console.log(`WSTrade backend running on port ${port}...`)
  })
  
  app.listen()