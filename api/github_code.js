const rp=require("request-promise")
const mysql_config=require("../mysql/mysql_config")
const winston=require('winston')



const options={
	uri:"https://api.github.com/search/repositories?q=",
	headers: {
        'User-Agent': 'Request-Promise'
    },
    json:true
}


let conn=mysql_config.getconnection();


