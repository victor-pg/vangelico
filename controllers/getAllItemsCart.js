const pool = require('../database');

const getAllItemsCart = (req,res) =>{
    pool.query(`SELECT * FROM cos`, (error, results) => {
        if (error) {
          res.status(500).send(error);
        }else{
          if(results.rowCount>0){
            res.status(200).json(results.rows);
          }else{
            res.status(204).send("Cosul este gol");
          }
        }
      })
}

module.exports=getAllItemsCart;