const express=require("express");
const bodyParser=require("body-parser");
let day=require("./date");
const app=express();

app.set("view engine","ejs"); // requires for ejs to work (check documentation)
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let items=["cook food","buy food","eat food"];
const workItems=[];
// for ejs to work the ejs file must be in the views folder

app.get("/",(req,res)=>{
    res.render("list", {listTitle: day, newListItems: items, route: "/"}); // to render ejs we use res.render("the ejs filename", var to pass);
});
app.get("/work",(req,res)=>{
    res.render("list",{listTitle: "Work List", newListItems: workItems, route: "/work"});
});
app.post("/",(req,res)=>{
    let item=req.body.newItem;
    console.log(req.body);
    items.push(item);
    res.redirect("/");
});
app.post("/work",(req,res)=>{
    let item=req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});
const port=process.env.PORT||80;
app.listen(port,()=>{
    console.log("The server is running on the port: ",port);
})