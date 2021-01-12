const pool = require('../database');

const getOneItem = (req,res) =>{
    const {id,table}=req.params;
    pool.query(`SELECT * FROM ${table} WHERE id=${id}`, (error, results) => {
        if (error) {
          res.status(500).send(error);
        }else{
          if(results.rowCount>0){
            res.status(200).json(results.rows);
          }
        }
      })
}

module.exports=getOneItem;