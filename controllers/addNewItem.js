const pool = require('../database');

const addNewItem = (req,res) =>{
    const {name,imgurl,price,type,table} = req.body;
    pool.query(`INSERT INTO ${table}(id,nume,imgurl,pret,tip) VALUES (${Date.now()},'${name}','${imgurl}',${price},'${type}')`
    , (error, results) => {
        if (error) {
          res.status(500).send(error);
        }else{
          res.status(201).send("Created");
        }
      })
}

module.exports=addNewItem;