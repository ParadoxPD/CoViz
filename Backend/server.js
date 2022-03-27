const http = require('http')
const port = 3000


const server = http.createServer(function(req, res){

    res.send("POM POM")
    res.end()
})

server.listen(port, function(error){

    if(error){
        console.log("Nahhh!! Not working..")
    }else{
        console.log('Yes the server is working on the port: ' + port)
    }
})