const router = require('express').Router();
const exerciseRoutes = require("./exerciseRoutes")

router.use('/', exerciseRoutes);



module.exports = router;