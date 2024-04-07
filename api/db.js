import mysql from "mysql"


export const db = mysql.createConnection({
host:"localhost",
user: "root",
password: "jana1234",
database: "crud"


})

