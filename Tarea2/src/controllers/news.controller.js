const axios = require('axios');
require('dotenv').config();

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

class News {
    getAll(req, res) {
        console.log('Query params: ', req.query);
        const url = `${apiUrl}everything?q=bitcoin&sortBy=publishedAt&apiKey=${apiKey}`;
        axios.get(url).then(response => {
            res.send(response.data.articles);
        }).catch(err => {
            res.send('Oops, failed!');
            res.end();
        });
    }

    getByID(req, res) {
        res.send('Traer la noticia ' + req.params.noticiaID);
        res.end();
    }

    getTitulares(req, res) {
        let country = req.params.country || 'mx';
        const url =  `${apiUrl}top-headlines?country=${country}&apiKey=${apiKey}`;
        axios.get(url).then(response => {
            res.send(response.data.articles);
        }).catch(err => {
            res.send('Oops, failed!');
            res.end();
        });
    }

    getNoticias(req, res) {
        let query = req.query.search;
        let sources = req.query.sources || {};
        let url = `${apiUrl}everything?q=${query}&apiKey=${apiKey}`;
        if(req.query.sources){
            url = url.concat(`&sources=${sources}`);
        }
        axios.get(url).then(response => {
            res.send(response.data.articles);
        }).catch(err => {
            res.send('Oops, failed!');
            res.end();
        });
    }

    getFuentes(req, res) {
        const url = `${apiUrl}sources?apiKey=${apiKey}`;
        axios.get(url).then(response => {
            res.send(response.data.sources);
        }).catch(err => {
            res.send('Oops, failed!');
            res.end();
        });
    }
}

module.exports = new News();