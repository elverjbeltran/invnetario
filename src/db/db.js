import mysql from "promise-mysql";
import config from "./../config.js"

const con = mysql.createConnection({
    host : config.host,
    database : config.database,
    user : config.user,
    password : config.password
})

const getConnection =()=>{

    return con
}

export default getConnection;