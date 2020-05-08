const express = require('express')

const server =express();


server.post('/new',function(request,res){
    

    res.send(request.body.username)
})






server.listen(3000, ()=>{
    console.log("server running on http://localhost:3000");
})
