const express = require("express");
const bodyParser = require('body-parser');
const app = express();
var PORT = process.env.PORT || 8001;
const {db} = require('./config/mongodb')

app.use(express.json({extended: true }));
app.use(express.urlencoded({  extended: true }));


// database connection established
db();



app.listen(PORT,()=>{
    console.log("listening on port:",PORT)
})