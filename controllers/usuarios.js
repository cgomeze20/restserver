const {response} = require('express')

const usuariosGet = (req,res=response)=>{

    const {q,nombre,apikey}  =  req.query
    
    res.json({
        msg:'Get API - controlador',
        q,
        nombre,
        apikey
    })
}

const usuariosPut = (req,res = response)=>{
    const {id} = req.params
    res.json({
        msg:'Put API - controlador***',
        id
        
    })
}

const usuariosPost = (req,res)=>{

    const {nombre,edad} = req.body
    res.json({
        msg:'Post API - controlador',
        nombre,
        edad
    })
}

const usuariosDelete = (req,res)=>{
    res.json({
        msg:'Delete API - controlador'
    })
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}