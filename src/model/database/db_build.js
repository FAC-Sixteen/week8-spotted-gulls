const fs = require("fs");
const path = require("path");

const buildDatabase = new Promise((resolve, reject) => {
  const connection = require("./db_connection");
  let sqlPath = path.join(__dirname, "db_build.sql");
  if (process.env.NODE_ENV === "test")
    sqlPath = path.join(__dirname, "db_build_test.sql");
  const sql = fs.readFileSync(sqlPath).toString();

  connection
    .query(sql)
    .then(res => resolve(res))
    .catch(err => reject(err));
});

buildDatabase
  .then(res => console.log("database build succeeded"))
  .catch(err => console.log("database build failed"));

module.exports = buildDatabase;
