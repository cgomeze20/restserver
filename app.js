require('dotenv').config()
const Server = require('./models/server')

const server = new Server()

server.listen()
// const express = require('express')
// const app = express()

// app.get('/', (req,res)=>{
//     res.send('hello')
// })

// app.listen(process.env.PORT,()=>{
//     console.log('Servidor corriendo',process.env.PORT);
// })

