const express = require ("express");
const app = express();
const port = 8080 ;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override');

app.use(express.urlencoded({extended:true}));

app.use(methodOverride("_method"));

app.set ("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {   
        id:uuidv4(),
        username:"Kumud",
        date :"20-5-2022",
        content :"Today was a really good day",
    },
    {
        id:uuidv4(),
        username:"Arman",
        date:"23-8-2023",
        content :"I had a really bad day .",
    },
    {
        id:uuidv4(),    
        username:"Somyaa",
        date :"12-10-2022",
        content :"I miss my college days. ",
    },
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    let {username,date,content} = req.body;
    let id=uuidv4(); 
    posts.push({id,username,date,content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>
{
    let {id}= req.params;
    let post = posts.find((p)=> id ===p.id);
    res.render("show.ejs",{post});
})

app.patch("/posts/:id",(req,res)=>{
    let {id}= req.params;
    let newcontent = req.body.content;
    let post = posts.find((p)=>id===p.id);
    post.content = newcontent;
    res.redirect("/posts");
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});
})

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts = posts.filter((p)=>id !== p.id);
    res.redirect("/posts");
})


app.listen(port , ()=>{
    console.log("listening on port : 8080");
});