const axios = require('axios');
require('dotenv').config();

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

console.log('Displaying news');

function newsEndpoints(app) {
    app.get('/recientes', function (req, res) {
        const url = `${apiUrl}/top-headlines?country=mx&apiKey=${apiKey}`;
        axios.get(url).then(response => {
            res.render('index', {
                headline: response.data.articles
            });
        }).catch(err => {
            res.send('Failure');
        });
    });
    
    app.get('/', function(req, res) {
        const url = `${apiUrl}everything?q=bitcoin&sortBy=publishedAt&apiKey=${apiKey}`;
        axios.get(url).then(response => {
            res.render('news', {
                headline: response.data.articles
            });
        }).catch(err => {
            res.send('Something went wrong');
        });
    });
}

module.exports = newsEndpoints;