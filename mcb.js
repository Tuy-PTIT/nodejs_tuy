var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
   database: "mangcambien"
});

// tạo môi trường
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE mangcambien", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });

//tạo bảng
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "create table dlcambien (id int auto_increment primary key, id_cam_bien int(10), nhietdo int(10), do_am int(10),anh_sang int(10), ngaytao datetime default current_timestamp)";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });


//tạo bảng
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE sensors (id int(10),Mac_address VARCHAR(255), Location VARCHAR(255),Name VARCHAR(255), createws_at datetime )";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });

//ghi dư liệu vào
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    setInterval(func,2000);
  function func()
  {
    var idcb=Math.floor((Math.random()*5)+1);
    var ND=Math.floor((Math.random()*40)+1);
    // // var ma=Math.random().toString(36).substring(2,7);
    var DA=Math.floor((Math.random()*100)+1);
    var AS=Math.floor((Math.random()*1000)+1);

    var sql = `INSERT INTO  dlcambien(id_cam_bien,nhietdo,do_am,anh_sang) VALUES ('${idcb}','${ND}','${DA}','${AS}')`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    };

  })

   

// con.query(sql, [values], function (err, result) {
//   if (err) throw err;
//   console.log("Number of records inserted: " + result.affectedRows);
// });
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!")
//     var sql = "CREATE TABLE datasensors (id int(10),ss_id int(10) ,temp int(10) ,hum int(10),light int(10),gas int(10), createws_at datetime )";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });

// var id = 1;
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected to database");
//     var loop = setInterval(function() {
//         var sql = "INSERT INTO datasensors(id,ss_id,temp,hum,light,gas,createws_at) VALUES (" + id + "," +id+ "," + Math.floor(Math.random()*100) + "," + Math.floor(Math.random()*100) + ", " + Math.floor(Math.random()*100) + ", " + Math.floor(Math.random()*100) + ",2022-10-17);";
//         id = id + 1;
//         if (id > 50 ) {
//             clearInterval(loop);
//             con.end();
//         }
//         con.query(sql, function(err, result) {
//                 if (err) throw err;
//                 console.log("insert data "+ id);
//             })
//         }, 2000); 
//     }
