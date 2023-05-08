const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const Data=sequelize.define('appointments',{
    id:{
        autoIncrement:true,
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    phoneNo:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})
module.exports=Data;