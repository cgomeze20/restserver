
const guardar = document.querySelector('.save')
const nombre = document.getElementById('nombre')
const edad = document.getElementById('edad')
const formulario = document.querySelector('form')

formulario.addEventListener('submit',async e=>{
    // e.preventDefault()
    console.log(e.target.nombre.value);
    console.log(e.target.edad.value);

    try {
        let options = {
            method:'POST',
            headers:{
                'Content-type':'application/json, charset=utf-8'
            },
            body:JSON.stringify({
                nombre: e.target.nombre.value,
                edad:e.target.edad.value
            })
        },
        res = await fetch('http://localhost:3000/api/usuarios',options)
        json = await res.json()
    } catch (error) {
        console.log(error);
    }


})