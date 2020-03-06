const express = require("express");
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();
// создаем парсер для данных в формате json
const jsonParser = express.json();

app.post("/user", jsonParser, function (request, response) {
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);

    response.json(request.body); // отправляем пришедший ответ обратно
});

app.get("/", function(request, response){

    response.sendFile(__dirname + "/index.html");
});

app.listen(PORT);