const mysql=require("mysql")
const winston=require("winston")

let config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'workerprocess'
}

let getconnection = () => {
   
    let connection = mysql.createConnection(config);
    connection.connect(function(err) {
        if (err) {
            winston.log('Unable to connect to mysql database')
            return null;
        } else {
            winston.log('Successfully connected to local mysql database');
            return connection;
        }
    });


}

module.exports = {
    getconnection: getconnection
}