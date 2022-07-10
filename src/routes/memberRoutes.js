const express = require("express");
const memberRouter = express.Router();
const booksData= require("../model/Bookdata")


const nav1 = [
    {
        link:'#',
        name:'Books'
    },
    {
        link:'/logout',
        name:'Logout!'
    }
];

memberRouter.get("/",(req,res)=>{
    booksData.find()
    .then((books)=>{
        res.render("userBook",{
        nav1,
        title:"books",
        books
    })
    })
    
})


module.exports = memberRouter;
