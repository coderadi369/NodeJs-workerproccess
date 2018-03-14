const express=require("express")
const app=express()
const winston=require("winston")
const port=process.env.port || 3000
const github_code=require("./api/github_code")
const worker_process=require("./worker_process/index")

winston.level="debug"

app.get("/",(req,res)=>{
	res.send("Welcome to NodeJs worker process running on port "+port)
})

app.get("/search_repo",(req,res)=>{
	res.send("Building Search functionality using worker process")
})


app.listen(port,()=>winston.info("server is running successfully"))
