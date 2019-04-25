const test = require("tape");
const dbBuild = require("../model/database/db_build");

test("test database build is working", t => {
  dbBuild
    .then(res => {
      t.pass("database built successfully");
      t.end();
    })
    .catch(err => {
      t.error(err, "database should build successfully");
      t.end();
    });
});
