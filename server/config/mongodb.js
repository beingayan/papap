const mongoose = require('mongoose');
require('dotenv').config()

const mongoString = process.env.mongo_key;

const db = ()=>{

    mongoose.connect(mongoString,{
        useNewUrlParser:true,
        // useCreateIndex:true,
        useUnifiedTopology:true,
        // useFindAndModify:false
    }).then(()=>{
        console.log("connection is successfull");
    }).catch((err)=>{console.log(err)})
}
module.exports={db};







