const express=require("express")
const app=express()
const winston=require("winston")
const port=process.env.port || 3000
const github_code=require("./api/github_code")
const worker_process=require("./worker_process/index")
//const server=app.listen(3001)

winston.level="debug"

app.get("/",(req,res)=>{
	worker_process.publisher.publish("test","Testing redis sucessful")
	res.send("Welcome to NodeJs worker process running on port "+port)
})

app.get("/search_repo",(req,res)=>{
	res.send("Building Search functionality using worker process")
})


app.listen(port,()=>winston.info("server is running successfully"))

/*
process.on('SIGINT', shutdown);

// Do graceful shutdown
function shutdown() {
  console.log('graceful shutdown express');
  server.close(function () {
    console.log('closed express');
  });
}
*/