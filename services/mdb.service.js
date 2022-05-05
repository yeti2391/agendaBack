const mysql	= require('mysql');
//const mysql = require('mysql2')
const connection= mysql.createConnection({
	host		: 'localhost',
	user		: 'root', 
	password	: '',
	database	: 'agenda'
});

const Mdb = {
	query: function (query, fields){
		return new Promise( (resolve, reject)=> {
			connection.connect();
			connection.query(query, fields, function(error, results, fields){
				if(error){
					reject(error)
				} else{
					resolve(results)
				}
			})
		})
	}
}

module.exports = Mdb;
