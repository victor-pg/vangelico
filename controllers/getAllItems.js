const pool = require('../database');

const getAllItems = (req,res) =>{
    const {type}=req.params;
    pool.query(`SELECT * FROM ${type} ORDER BY id ASC`, (error, results) => {
        if (error) {
          res.status(500).send(error);
        }else{
          if(results.rowCount>0){
            res.status(200).json(results.rows);
          }
        }
      })
}

module.exports=getAllItems;