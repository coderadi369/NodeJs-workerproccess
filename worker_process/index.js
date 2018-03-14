const redis=require("redis")
let publisher=redis.createClient()
let subscriber=redis.createClient()

subscriber.on('message',(channel,message)=>{
	console.log(message)
})

subscriber.subscribe("test")

module.exports={
	publisher:publisher,
	subscriber:subscriber
}