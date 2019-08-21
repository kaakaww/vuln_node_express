const express = require('express');
const router = express.Router();
const searchService = require('../service/search');

/* GET search listing. */
router.get('/', function (req, res, next) {
  res.render('search', {title: 'Search for items'});
});

router.post('/', function (req, res, next) {
  const searchText = req.body.searchText;

  searchService.searchByName(searchText, function (err, ret) {
    if (err) {
      res.redirect('/search')
    } else {
      res.render('searchResult', ret)
    }
  });
});

module.exports = router;
