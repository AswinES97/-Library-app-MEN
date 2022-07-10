const express = require("express");
const memberRouter = express.Router();


const userNav = [
    {
        link:'#',
        name:'Books'
    },
    {
        link:'/logout',
        name:'Logout!'
    }
];


const booksRouter = require("./bookRoutes")(userNav);
memberRouter.use("/",booksRouter)


module.exports = memberRouter;
