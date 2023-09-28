var { createConnection } = require("mysql");
var con = createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12649487",
  password: "kAEh9hBJa9",
  database: "sql12649487",
  connectionLimit: 10,
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Database is connected successfully !");
});
module.exports = con;
