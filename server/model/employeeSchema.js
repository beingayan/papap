const mongoose = require('mongoose');


const employeeSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    profileImage:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    workHours:{
        type:Double,
        required:true
    },
    salaryType:{
        type:Integer,
        required:true
    },
    salaryAmnt:{
        type:Integer,
        required:true
    },
    departmentId:{
        type:Integer,
        required:true
    }
})

const Emp = mongoose.model('EMPLOYEE',employeeSchema)
module.exports=Emp;