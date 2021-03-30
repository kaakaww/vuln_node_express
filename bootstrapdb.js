const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/vulny.db');

db.serialize(function () {
  db.run('CREATE TABLE item (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name NVARCHAR(1024) NOT NULL, description TEXT)', function (err) {
    if (err) {
      console.error(err);
    } else {
      const itemTbl = db.prepare('INSERT INTO item VALUES (null, ?, ?)', function (err) {
        if (err) {
          console.error(err)
        }
      });

      for (var i = 0; i < 3; i++) {
        itemTbl.run('item-' + i, 'item-' + i + ' is the great item evar');
      }

      itemTbl.finalize(function (err) {
        if (err) {
          console.error(err)
        } else {
          db.close(function (err) {
            if (err) {
              console.error(err)
            }
          });
        }
      });
    }
  });


  db.run('CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, username NVARCHAR(1024) NOT NULL, password TEXT NOT NULL)', function (err) {
    if (err) {
      console.error(err);
    } else {
      const userTbl = db.prepare('INSERT INTO user VALUES (null, ?, ?)', function (err) {
        if (err) {
          console.error(err)
        }
      });
      userTbl.run('admin', 'S3cr37P@$$w0rD!');
      userTbl.run('user1', 'bad_password');
      userTbl.run('user2', 'worse');
      userTbl.run('user3', 'fail');
      userTbl.finalize(function (err) {
        if (err) {
          console.error(err)
        } else {
          db.close(function (err) {
            if (err) {
              console.error(err)
            }
          });
        }
      });
    }
  });
});
