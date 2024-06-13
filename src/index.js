import dotenv from "dotenv";
import { connectDb } from "./db/db.config.js";
import { app } from "./app.js";
dotenv.config({
    path:'./env'
})


app.get("/",(req,res)=>{
    res.send("working");
})

connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000),()=>{
        console.log(`server is running at http://localhost:${process.env.PORT}`)
    }
})
.catch((error)=>{
    console.log("mongodb connection error");
})