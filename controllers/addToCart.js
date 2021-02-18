const pool = require('../database');

const addToCart = (req,res) =>{
    const {id,type,name,imgurl,price} = req.body;
    pool.query(`INSERT INTO cos(id,nume,imgurl,pret,tip) VALUES (${id},'${name}','${imgurl}',${price},'${type}') LIMIT 1`
    , (error, results) => {
        if (error) {
          res.status(500).send(error);
        }else{
          res.status(200).send("Added");
        }
      })
}

module.exports=addToCart;