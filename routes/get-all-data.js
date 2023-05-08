const express=require('express');
const router=express.Router();
const getData=require('../controllers/get-all-data');

router.get('/allData',getData);
module.exports=router;