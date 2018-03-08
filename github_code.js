const rp=require("request-promise")
const options={
	uri:"https://api.github.com/search/repositories?q=",
	headers: {
        'User-Agent': 'Request-Promise'
    },
    json:true
}


let search_repo=(req,res)=>{
    
   options.uri+=req.query.lang 

   rp(options).then(function(data){
		res.json({'search-match':data.items})
	}).catch(function(error){
    	res.send(error)
	})
}

let get_contributors=(req,res)=>{
	res.send("Building functionality of getting contributors")
}

module.exports={
	search_repo:search_repo,
	get_contributors:get_contributors
}