const Data=require('../models/Data');

const addUser=async (req,res)=>{
    const data= await Data.create({
        name:req.body.name,
        email:req.body.email,
        phoneNo:req.body.number
    })
    res.send(data);
}
module.exports=addUser;