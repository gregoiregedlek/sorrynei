const express = require("express");
const server = express();

server.all("*", (req, res, next) => {
    console.log(req.method, req.originalUrl);

    next();
});

server.use(express.static(__dirname + "/../client/dist/sorrynei")) //server.use/all = GET oder POST oder wasd wotsch

server.get("*", (request, response) => {
    response.send("hallo");
}); 

server.listen(9666, () => {
    console.log("server isch am laufem")
})




