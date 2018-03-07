const express=require("express")
const app=express()
const winston=require("winston")
const port=process.env.port || 3000

winston.level="debug"

app.get("/",(req,res)=>{
	res.send("Welcome to NodeJs worker process running on port "+port)
})

app.listen(port,()=>winston.info("server is running successfully"))
