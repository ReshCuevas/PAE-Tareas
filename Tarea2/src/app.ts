import { ajax } from './services/ajax.js';

declare var Handlebars: any;

export function setPageTitle() {
    let source = document.getElementById('heading').innerHTML;
    let mainTemplate = Handlebars.compile(source);
    
    let context = { title: 'News Application', isNew: true }
    document.getElementById('heading').innerHTML = mainTemplate(context);
}

function getHeadlines() {
    const url: string = 'https://newsapi.org/v2/top-headlines?country=mx&apiKey=0845970e12f546e8b219a5cae4c4a539';

    ajax.get(url).then(data => {
        let source = document.getElementById('news-container').innerHTML;
        let template = Handlebars.compile(source);

        let context = {
            headline: data.articles, check: () => {
                return true;
            }
        }
        console.log(context)
        document.getElementById('news-container').innerHTML = template(context);
    });
}
document.addEventListener('DOMContentLoaded', function() { 
    setPageTitle();
    getHeadlines();
})
