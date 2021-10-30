const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const port = 4000;

app.use(express.static('public'));

app.use(cors());

app.get("/index", (req, res,) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/menu-principal", (req, res) => {
    res.sendFile(path.join(__dirname + "/menu-principal.html"));
});

app.get("/catalogo", (req, res) => {
    res.sendFile(path.join(__dirname + "/catalogo.html"));
});

app.get("/dance-fit", (req, res) => {
    res.sendFile(path.join(__dirname + "/dance-fit.html"));
});

app.get("/funcional", (req, res) => {
    res.sendFile(path.join(__dirname + "/funcional.html"));
});

app.get("/spinning", (req, res) => {
    res.sendFile(path.join(__dirname + "/spinning.html"));
});

app.get("/gap", (req, res) => {
    res.sendFile(path.join(__dirname + "/gap.html"));
});

app.get("/olvidaste-la-contrasena", (req, res) => {
    res.sendFile(path.join(__dirname + "/olvidaste-la-contrasena.html"));
});

app.get("/abonar", (req, res) => {
    res.sendFile(path.join(__dirname + "/abonar.html"));
});

app.get("/registro.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/registro.html"));
});

app.listen(port, () => {
    console.log(`Corriendo en el http://localhost:${port}`);
});