const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/vulny.db');

const searchByName = function (searchText, cb) {

  db.all("select id,name,description from item where name like '%" + searchText + "%'", [], function (err, rows) {
  //db.all("select id,name,description from item where name like '%?%'", [searchText], function (err, rows) {
    if (err) {
      console.log('error ' + err);
      cb(err);
      //res.redirect('/search')
    } else {
      //console.log(req.body);
      console.log('rows? ' + rows);
      console.log('got ' + rows.length + ' rows');
      const ret = {
        searchText: searchText,
        rows: rows
      };
      cb(null, ret);
      //res.render('searchResult', ret)
    }
  });

};

module.exports = {
  searchByName: searchByName
};