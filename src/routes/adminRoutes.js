const express = require("express");
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');
const multer = require('multer');


const book= [
    {
        link:"#",
        name:'Books'
    },
    {
        link:"/user/admin",
        name:'Add Books'
    },
    {
        link:'/logout',
        name:'Logout'
    }
];
    
const booksRouter = require("./bookRoutes")(book);
adminRouter.use("/books",booksRouter);


const uplodcntrl = multer.diskStorage({

    destination:function(req,file,cb){
        cb(null,"./public/image")
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload = multer({storage:uplodcntrl});


function router(nav){
adminRouter.get('/',(req,res)=>{
    res.render("addbook",{
        nav,
        title: 'Library'
    })
})


adminRouter.post("/add",upload.single('image'),(req,res)=>{
var items=
    {
    title:req.body.title,
    author:req.body.author,
    genre:req.body.genre,
    image:req.file.filename
   }
   var book = Bookdata(items);
   book.save()
   .then(()=>{
   res.redirect('/user/admin/books');
   })
})

return adminRouter;
}

module.exports = router;