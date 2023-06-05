var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
//About page route
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
//Project page route
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Project' });
});

//Services page route
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
// Contact page route
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});


module.exports = router;

