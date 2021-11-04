const express = require("express");
const router = express.Router();

router.get("./registro", (req, res, next) => {
    res.send({ success: true, users: users });
});

