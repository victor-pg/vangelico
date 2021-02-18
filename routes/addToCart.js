const express = require('express')
const router = express.Router()
const addToCart = require('../controllers/addToCart');

// router.post("/api/add-to-cart/:type/:id/:name/:imgurl/:price/",addToCart);
router.post("/api/add-to-cart/",addToCart);
module.exports=router;