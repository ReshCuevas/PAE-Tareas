const express = require('express');
const router = express.Router();

const newsController = require('./../src/controllers/news.controller');
const testController = require('./../src/controllers/test.controller');

router.get('/news', newsController.getAll);
router.get('/news/:noticiaID', newsController.getByID);

router.get('/titulares/:country?', newsController.getTitulares);

router.get('/noticias', newsController.getNoticias);

router.get('/fuentes', newsController.getFuentes);

router.get('/airbnb', testController.getAll);

router.post('/auth', function(req, res) {
    console.log('Auth: ', req.body);
    res.send('ok');
})


module.exports = router;