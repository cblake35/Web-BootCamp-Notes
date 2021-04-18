const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'im2o0YHTOAzXzJkCOMb0SD2hwT0X8T2t';
let url;

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

//NAV
nav.style.display = 'none';

//PAGINATION
let pageNumber = 0;
console.log('PageNumber:', pageNumber);
let displayNav = false;

//EVENT LISTENERS
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

//ACCESSING A REST API
//(e) is part of event handling function
function fetchResults(e) {
    //preventDefault prevents the default action of an element (form: default action is to POST; We only want GET)
    e.preventDefault(); //console.log to see event object for learning purposes
    // Assemble the full URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    console.log("URL:", url);
    if (startDate.value !== '') {
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
    };
    if (endDate.value !== '') {
        url += '&end_date=' + endDate.value;
    };
    fetch(url)    //sends request for info to the URL
        .then(function (result) {
            console.log(result)
            return result.json(); //fetch gets resource and converts response to json object
        }).then(function (json) {    //send info received to another function
            displayResults(json);
            console.log(json) //calls the displayResults function and passes the response data
        });
}

function displayResults(responseData) {
    // We run the displayResults function each time the button gets pressed. In this chunk of code, we are checking to see if the section element has any child elements. If the section.firstChild is true, then we call removeChild on the section variable, which targets the section element in the html file. This simply will clear out any child elements that are in the section.
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    let articles = responseData.response.docs;

    if (articles.length >= 10) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }

    if (articles.length === 0) {
        console.log("No results");
    } else {
        for (let i = 0; i < articles.length; i++) {
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');
            let current = articles[i];
            console.log("Current:", current);
            link.href = current.web_url;
            link.textContent = current.headline.main;
            para.textContent = 'Keywords: ';
            for (let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ' ';
                para.appendChild(span);
            }
            if (current.multimedia.length > 0) {
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            }
            clearfix.setAttribute('class', 'clearfix');
            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }
};

function nextPage(e) {
    pageNumber++;
    fetchResults(e);
    console.log(e);
}
function previousPage(e) {
    if (pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    console.log("Page:", pageNumber);
}

