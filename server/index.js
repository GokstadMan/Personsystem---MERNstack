const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PeopleModel = require("./models/People");

const app = express();
app.use(express.json());

app.use(cors());

mongoose.connect("mongodb+srv://boehman:0f5el2GP8LwERECK@cluster0.xvfzcbo.mongodb.net/project1?retryWrites=true&w=majority");

const port = 8000;

app.post("/add-people", async(req,res)=>{
    const person = req.body;
    const newPerson = new PeopleModel(person);
    await newPerson.save();

    res.json(person);
})

app.get("/get-people",async (req,res)=>{
    try{
        const result = await PeopleModel.find();
        res.status(200).json(result); }
    catch (error){
        res.status(500).json(error)
      }
})



app.listen(port,()=>{
    console.log("Server running on port:" + port)
})
