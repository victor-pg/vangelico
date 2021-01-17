const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const config = require('./config/config.js');
const getAllItemsRouter = require('./routes/getAllItems');
const getAllItemsCartRouter = require('./routes/getAllItemsCart');
const addNewItem = require('./routes/addNewItem');
const removeItem = require('./routes/removeItem');
const updateItem = require('./routes/updateItem');
const getOneItem = require('./routes/getOneItem');
const app = express();


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(getAllItemsRouter);
app.use(getAllItemsCartRouter);
app.use(addNewItem);
app.use(removeItem);
app.use(updateItem);
app.use(getOneItem);


app.listen(config.port,()=>{
    console.log(`Server started on port ${config.port}`);
})
