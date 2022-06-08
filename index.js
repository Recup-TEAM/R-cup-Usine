/**** Import npm libs ****/
const express = require("express");
const app = express();
const http = require("http").Server(app);

require("./back/routes")(express, app, http);

require("./back/dataScript/auto_data")();

let PORT = process.env.PORT || 4444;
//Start serveur
http.listen(PORT, () => {
    console.log("Serveur lancé sur http://localhost:" + PORT);
});
