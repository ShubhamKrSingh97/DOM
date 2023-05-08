const express=require('express');
const router=express.Router();
const deleteUser=require('../controllers/delete');

router.delete('/delete/:id',deleteUser);
module.exports=router;