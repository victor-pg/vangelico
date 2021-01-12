const express = require('express')
const router = express.Router()
const addNewItem = require('../controllers/addNewItem');

router.post("/api/add-new-item",addNewItem);
module.exports=router;