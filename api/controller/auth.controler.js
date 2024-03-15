const bcrypt = require("bcrypt");

const signup = async (req,res)=>{
   try {
      const {username,email,password}=req.body;
      const hashedPassword= await bcrypt.hash(password,10);
      const newUser = new User({username,email,password:hashedPassword});
      await newUser.save();
      res.status(201).json("new user created successfully");
   } catch (error) {
      res.status(500).json({message:error})
   }
}

module.exports ={signup};