const rp=require("request-promise")
const mysql_config=require("./mysql_config")
const winston=require('winston')



const options={
	uri:"https://api.github.com/search/repositories?q=",
	headers: {
        'User-Agent': 'Request-Promise'
    },
    json:true
}


let conn=mysql_config.getconnection();


module.exports={
	search_repo:search_repo,
	get_contributors:get_contributors
}