const dotenv = require('dotenv');
const mysql = require('mysql2');

dotenv.config();
// console.log(process.env);
const password = process.env.PASSWORD;

const con = mysql.createConnection({
    host: 'viaduct.proxy.rlwy.net',
    user: 'root',
    password: password,
    database: 'railway',   
    port: 59668 
});
  
con.connect((err) => {    
    if (!err) console.log('Database Connected...');        
    else console.log(err);            
});

module.exports = con;   