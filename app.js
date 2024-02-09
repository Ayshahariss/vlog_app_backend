const  express = require("express")
const  cors =  require ("cors")
const  mongoose = require("mongoose")
const  vlogRoute = require("./controllers/vlogRoute")

const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://aysha-haris:Captainthor432@cluster0.3vwom3n.mongodb.net/vlogDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/users",vlogRoute)


app.listen(3002,()=>{
    console.log("server running")
})