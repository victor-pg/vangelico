const express = require('express')
const router = express.Router()
const getAllItemsCart = require('../controllers/getAllItemsCart');

router.get("/api/cart",getAllItemsCart);
module.exports=router;