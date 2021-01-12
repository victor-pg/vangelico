const pool = require('../database');

const updateItem = (req,res) =>{
    const {id,table} = req.params;
    const {name,imgurl,price,type} = req.body;
    pool.query(`UPDATE ${table} SET nume='${name}',imgurl='${imgurl}',pret=${price},tip='${type}'  
    WHERE id=${id}`,
     (error, results) => {
        if (error) {
          res.status(500).send(error);
        }else{
          res.status(200).send("Modified");
        }
      })
    // res.send("id:"+id+",table:"+table+",name:"+name+",imgurl:"+imgurl+",price:"+price+",type:"+type); 
}

module.exports=updateItem;