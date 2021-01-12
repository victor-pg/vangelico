const express = require('express')
const router = express.Router()
const updateItem = require('../controllers/updateItem');

router.patch("/api/update-item/:table/:id",updateItem);
module.exports=router;