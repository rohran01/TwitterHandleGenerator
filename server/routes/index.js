var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get('/nouns', function(request, response) {
    response.sendFile(path.join(__dirname, '../../data/nouns.json'));
});

router.get('/adjectives', function(request, response) {
    response.sendFile(path.join(__dirname, '../../data/adjectives.json'));
});

module.exports = router;