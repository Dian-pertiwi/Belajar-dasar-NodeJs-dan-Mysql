var db = require("./db_config");

// Pilih database yang akan digunakan terlebih dahulu
db.query("USE employees", function (err, result) {
  if (err) throw err;

  var sql = " SELECT * FROM member";

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
