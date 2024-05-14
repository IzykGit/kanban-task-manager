import 'dotenv/config'

import express from 'express'
import cors from 'cors'
const app = express();
app.use(express());
app.use(cors());


import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';





app.get('/', async (req, res) => {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();

    const db = client.db("Kanban")
    const boards = await db.listCollections().toArray()

    res.send(boards)
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
