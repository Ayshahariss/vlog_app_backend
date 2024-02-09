const express = require("express")
const router = express.Router()
const vlogModel = require("../models/vlogModel")


router.post("/add",async(req,res)=>{
    let data = req.body
    let  users = new vlogModel(data)
    let result = await users.save()
    res.json({
        status:"success"
    })
     
})







module.exports= router
