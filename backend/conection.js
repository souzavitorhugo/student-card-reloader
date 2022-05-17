const express = require('express');
const backend = express();
const backendPort = 5000;

backend.use(express.json());
backend.use(express.urlencoded( { extended: true} ));

backend.get("/users/:id", require("./routes/users"));

backend.listen(backendPort, function(){
    console.log(`Server running at http://localhost:${backendPort}/`)
})

