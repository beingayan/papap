const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv').config();
var PORT = process.env.PORT || 8001;
const db = require('./config/mongodb')
var MongoClient = require('mongodb').MongoClient;

app.use(express.json({extended: true }));
app.use(express.urlencoded({  extended: true }));
const Saltype = require("./model/salarySchema");

const main = require("./router/salary")


// database connection established
db();

app.get("/",async(req,res)=>{
    main()

   console.log("a",a)
})

app.listen(PORT,()=>{
    console.log("listening on port:",PORT)
})