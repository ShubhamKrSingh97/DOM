const express=require('express');
const router =express.Router();
const addUser=require('../controllers/add-user');

router.post('/add-user',addUser);

module.exports=router;