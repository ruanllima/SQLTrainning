import mysql from 'mysql2';

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sqltrainning"
})

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!")
})

export default conn;
