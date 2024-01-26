const express = require("express");
const app = express();


app.use(express.json())
app.get("/app",(req,res)=>{

    res.status(200).json({

        name:"MSDFSD",
        des:"sdfsdfsdfsfddsfsdfsdfsfsfsfsdfsfsfsdfsfsdfsdfsdfdsf"

    })

})

app.get("/test",(req,res)=>{

    res.status(200).json({

        name:"Test",
        des:"Test"

    })

})

app.listen(4000,()=>{

    console.log("Backend is running on Port 4000");

})


