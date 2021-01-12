const express = require('express')
const router = express.Router()
const getOneItem = require('../controllers/getOneItem');

router.get("/api/get-one-item/:table/:id",getOneItem);
module.exports=router;