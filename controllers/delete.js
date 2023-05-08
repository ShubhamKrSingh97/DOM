const Data=require('../models/Data');

const deleteUser=async(req,res)=>{

    try{
     const res = await Data.destroy({
        where:{
            id: req.params.id
        }
     })
     console.log(res);
    }
    catch(err){
        console.log(err)
    }
}
module.exports=deleteUser;