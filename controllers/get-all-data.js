const Data=require('../models/Data');

const getData=async (req,res)=>{
    try{
        const results=await Data.findAll();
        res.send(results);
    }
   catch(error){
   res.send(error);
   }
    
}
module.exports=getData;