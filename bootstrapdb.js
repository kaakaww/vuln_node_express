const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/vulny.db');

db.serialize(function () {
  db.run('CREATE TABLE item (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name NVARCHAR(1024) NOT NULL, description TEXT)', function (err) {
    if (err) {
      console.error(err);
    } else {
      const stmt = db.prepare('INSERT INTO item VALUES (null, ?, ?)', function (err) {
        if (err) {
          console.error(err)
        }
      });

      for (var i = 0; i < 3; i++) {
        stmt.run('item-' + i, 'item-' + i + ' is the great item evar');
      }

      stmt.finalize(function (err) {
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
