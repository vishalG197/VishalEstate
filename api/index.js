const express = require('express');
const connection = require("./db")
const app =express();



app.listen(3000,async()=>{

   try {
      await connection;
      console.log("listening on http://localhost:3000");
      console.log("connected to mongodb ")
   } catch (error) {
      
   }
   
})