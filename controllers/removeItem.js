const pool = require('../database');

const removeItem = (req,res) =>{
    const {id,table} = req.params;
    pool.query(`DELETE FROM ${table} WHERE id=${id} `, (error, results) => {
        if (error) {
          res.status(500).send(error);
        }else{
          res.status(200).send("Deleted");
        }
      })
}

module.exports=removeItem;