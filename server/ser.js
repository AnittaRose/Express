const express = require('express');
const ser = express();
const dotenv =require('dotenv');
dotenv.config();


ser.use(express.static('../client'));

ser.get('/test',
    (req,res,next)=> {
        console.log("first middleware");
        next();
    },
    (req,res,next)=>{
        console.log("second middleware");
        next();
    },
    (req,res,next)=>{
        console.log("thrid middleware");
        next();
    }
)

ser.listen(process.env.PORT, ()=>{
    console.log(`server running at http://localhost:${process.env.PORT}`);
})