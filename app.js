import express from "express";
import router from "./routes/api.js";
const app=express()
import { PORT } from "./config/config.js";

app.use("/api",router);


app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
})
