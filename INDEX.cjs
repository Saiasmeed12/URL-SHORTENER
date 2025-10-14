

const express=require("express");
const{connectToMongoDB} = require("./connect");
const urlroute= require("./routes/url");
const URL = require("./models/url");
const { Timestamp } = require("bson");
const { timeStamp } = require("console");

const app=express();
const PORT=8001;



connectToMongoDB('mongodb://localhost:27017/short-url').then(()=>console.log("MB CONNECTED"));

app.use(express.json());

app.use("/url",urlroute);


app.get("/url/:shortId", async(req,res)=>{
    const shortId= req.params.shortId;
    const entry= await URL.findOneAndUpdate(
        {
        shortId,
    },
    {
        $push:
        {
            VisitHistoty:
            {
             timeStamp: Date.now(),
            },
        },
    }
 );

    res.redirect(entry.RedirectURL);



});




app.listen(PORT,()=>console.log(`server started at PORT:${PORT}`));
