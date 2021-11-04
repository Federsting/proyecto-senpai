const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

const { TOKEN_SECRET, verifyToken } = require("../middlewares/jwt-validate");

router.get("/", (req, res) => {
    res.json({ success: true });
});

router.post("./registro", async (req, res) => {
    if (req.body.mail && req.body.number && req.body.password) {
        if (/^\S+@\S+\.\S+$/.test(req.body.mail) === false) {
            res
                .status(400)
                .json({ success: false, message: "Formato de mail incorrecto" });
            return;
        }

        const existeUser = usuarios.find((u) => {
            return u.mail === req.body.mail;
        });

        if (existeUser) {
            res.status(400).json({ success: false, message: "Ingrese otro mail" });
            return;
        }

        const salt = await bcrypt.genSalt(10);
        console.log("Salt", salt);
        const password = await bcrypt.hash(req.body.password, salt);

        const newUser = {
            number: req.body.number,
            mail: req.body.mail,
            password: password,
        };

        usuarios.push(newUser);

        return res.json({ success: true, newUser });
    } else {
        return res.status(400).json({
            success: false,
            message: "Faltan datos",
        });
    }
});

router.post("./index", async (req, res, next) => {
    try {
        const user = usuarios.find((u) => u.mail === req.body.mail);

        if (!user) {
            return res.status(400).json({ error: "Usuario no encontrado" });
        }

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!validPassword) {
            return res.status(400).json({ error: "Contraseña inválida" });
        }

        const token = jwt.sign(
            {
                number: user.number,
                mail: user.mail,
            },
            TOKEN_SECRET
        );

        return res.json({ error: null, data: "Login exitoso", token });
    } catch (error) {
        return next(error);
    }
});

router.get("/usuarios.js", verifyToken, (req, res) => {
    return res.json({ error: null, usuarios });
});
module.exports = router;

const usuarios = [
    {
        number: "1",
        mail: "fbc@gmail.com",
        password: "$2a$12$rmOSmmddSV1WNfaVztsHLu3s3tTJ2SyMiGKaSIze1/Y1qRjVmQFxq",
    },
];