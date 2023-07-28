const mongoose = require('mongoose');


const salryTypeSchema= new mongoose.Schema({
    salId:{
        type:Number,
        required:true
    },
    salType:{
        type:String,
        required:true
    },
    isActive:{
        type:Number,
        required:true
    },
    isDelete:{
        type:Number,
        required:true
    }
   
})

const Saltype = mongoose.model('SalaryTypeMaster',salryTypeSchema)
module.exports=Saltype;