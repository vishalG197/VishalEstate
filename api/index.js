const express = require('express');
const connection = require("./db");
const userRouter = require("./routes/authRoutes");
const authRouter = require("./routes/authRoutes");
const app =express();

app.get('/', function(req, res){
   res.json({success: true})
})
app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);
app.listen(3000,async()=>{

   try {
      await connection;
      console.log("listening on http://localhost:3000");
      console.log("connected to mongodb ")
   } catch (error) {
      
   }
   
})