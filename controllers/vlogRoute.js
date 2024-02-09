const express = require("express")
const router = express.Router()
const vlogModel = require("../models/vlogModel")
const bcrypt = require("bcryptjs")

hasPasswordGenerator = async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    //encryption:
    return bcrypt.hash(pass,salt)
}


router.post("/add",async(req,res)=>{

    let{data}={"data":req.body}
    let password=data.password
    hasPasswordGenerator(password).then(
        (hashedPassword)=>{
            console.log(hashedPassword)
            data.password=hashedPassword
            console.log(data)
            
            let  users = new vlogModel(data)
            let result =  users.save()
            res.json({
                status:"success"
            })

        }
    )




    //reading dataa individually
    // let data = req.body
    // let name=req.body.name
    // let age = req.body.age
    // let mobileNo = req.body.mobileNo
    // let address = req.body.address
    // let pincode = req.body.pincode
    // let emailId = req.body.emailId
    // let password = req.body.password

})



    
router.post("/signin",async(req,res)=>{
    let input=req.body
    let emailId= req.body.emailId
    let data= await vlogModel.findOne({"emailId":emailId})
    if(!data){
        return res.json({
            status:"invalid user"
        })
    }
    console.log(data)
    let dbPassword=data.password
    let inputPassword=req.body.password
    console.log(dbPassword)
    console.log(inputPassword)
    const match=await bcrypt.compare(inputPassword,dbPassword)
    if(!match){
        return res.json({
            status:"invalid password"
        })
    }
    res.json({
        status:"success"
    })

 })



module.exports= router
