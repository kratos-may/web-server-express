const http = require("http");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"application/json"});
    let salida = {
        nombre: "edgar",
        edad: 26,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
}).listen(3000);
console.log("escuchando 3000")