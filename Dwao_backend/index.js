import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import Controller from './Controller.js'
import './DBConnect.js';
import User from './Model.js';


// to create a user 
//User.create({Email : "prakhar@gmail.com", Password : "prakhar", Cuisines : "Chinese"})


const app = express()
app.use(express.json())
app.use(bodyparser.urlencoded({extended : true}))
app.use(cors())


app.post('/signIn', Controller.signIn)
app.post("/cuisine", Controller.cuisine)

app.get("/getAllData", Controller.getAllData)


app.listen(process.env.PORT|| 8080, ()=> {
    console.log("server on")
})