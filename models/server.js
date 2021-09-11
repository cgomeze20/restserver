require('dotenv').config()
const express = require('express')
const cors = require('cors')


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'

        //Middlewares
        this.middlewares()

        this.routes();

    }

    middlewares(){
        //CORS
        this.app.use(cors())

        //Parseo y lectura del body
        this.app.use(express.json())

        this.app.use(express.static('public'))
    }

    routes(){

        this.app.use(this.usuariosPath,require('../routes/usuarios'))

    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo',this.port);
            })
    }

}

module.exports = Server;