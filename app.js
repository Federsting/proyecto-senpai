const express = require("express");

const path = require("path");

const app = express();

const port = 4000;

app.use(express.static('public'));

app.get("/index", (req, res,) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/menu-principal.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/menu-principal.html"));
});

app.get("/catalogo.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/catalogo.html"));
});

app.get("/dance-fit.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/dance-fit.html"));
});

app.get("/funcional.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/funcional.html"));
});

app.get("/spinning.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/spinning.html"));
});

app.get("/gap.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/gap.html"));
});

app.get("/olvidaste-la-contrasena.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/olvidaste-la-contrasena.html"));
});

app.get("/abonar.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/abonar.html"));
});

app.get("/registro.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/registro.html"));
});

app.listen(port, () => {
    console.log(`Corriendo en el http://localhost:${port}`);
});