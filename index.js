const express = require("express");
const app = express();


app.use(express.json())
app.use("/app",(req,res)=>{

    res.status(200).json({

        name:"MSDFSD",
        des:"sdfsdfsdfsfddsfsdfsdfsfsfsfsdfsfsfsdfsfsdfsdfsdfdsf"

    })

})

app.listen(4000,()=>{

    console.log("Backend is running on Port 4000");

})


