const mongoose=require("mongoose")

const vlogSchema = new mongoose.Schema(
    {
        name:String,
        age:String,
        mobileNo:String,
        address:String,
        pincode:String,
        emailId:String,
        password:String

    }
)

module.exports=mongoose.model("vlog",vlogSchema)