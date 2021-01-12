const express = require('express')
const router = express.Router()
const getAllItems = require('../controllers/getAllItems');

router.get("/api/produse/:type",getAllItems);
module.exports=router;