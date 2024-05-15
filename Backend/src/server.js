import 'dotenv/config'

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express();
app.use(express());
app.use(bodyParser.json())
app.use(cors());


import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';


// Schemas

import Board from './models/models';





app.get('/', async (req, res) => {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();

    const db = client.db("Kanban")
    const boards = await db.listCollections().toArray()

    res.send(boards)
})




// creating board

app.post('/board/:boardName', async (req, res) => {
    try {
        const { boardName } = req.params.name;
        const { columns } = req.body
    
        const board = {
            name: req.body.name,
            column: columns
        }

        new Board(board).save()
    }
    catch(err) {
        console.error(err)
    }
})







mongoose.connect(process.env.MONGODB_URI, {
    dbName: "Kanban"
}).then(() => {
    app.listen(5000, () => {
        console.log("Connected on port 5000")
    })
}).catch(error => {
    console.log(error)
})
