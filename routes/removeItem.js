const express = require('express')
const router = express.Router()
const removeItem = require('../controllers/removeItem');

router.delete("/api/remove-item/:table/:id",removeItem);
module.exports=router;