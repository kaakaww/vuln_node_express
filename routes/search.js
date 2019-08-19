const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/vulny.db');

/* GET search listing. */
router.get('/', function (req, res, next) {
  res.render('search', {title: 'Search for items'});
});

router.post('/', function (req, res, next) {
  const searchText = req.body.searchText;
  db.all("select id,name,description from item where name like '%" + searchText + "%'", [], function (err, rows) {
    if (err) {
      console.log('error ' + err);
      res.redirect('/search')
    } else {
      console.log(req.body);
      console.log('rows? ' + rows);
      console.log('got ' + rows.length + ' rows');
      const ret = {
        searchText: searchText,
        rows: rows
      };
      res.render('searchResult', ret)
    }
  })
});

module.exports = router;
