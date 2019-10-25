// Sending HTTP Requests
// Two Options:
// XmlHttpRequest object
// fetch API
// XmlHttpRequest (XHR) is a lower level API and more or less the original
// standard for sending HTTP requests via JavaScript. Despite the name
// we don't have to use XML.  XHR is more verbose than fetch, and
// requires a little more knowledge. However, it's frequently asked about
// in interviews, so you definitely want to know about it.
const url = 'https://pokeapi.co/api/v2/pokemon/6';

const xhrRequest = () => {

    const xhr = new XMLHttpRequest();

    // xhr is an event driven object
    // we can handle the processing of the response by using event listeners
    
    // xhr exposes the response state using a 'readyState' property
    // which is a numeric value representing the current state of the request
    
    /*
        Ready State Values:
            0 - UNSENT 
            1 - OPENED
            2 - HEADERS_RECEIVED
            3 - LOADING
            4 - DONE
    */
    
    // registering an event for processing ready state changes
    xhr.addEventListener('readystatechange', () => {
        console.log('Ready State: ' + xhr.readyState);
    });
    
    // Bind event listener to loadend for handling when loading has
    // completed
    xhr.addEventListener('loadend', () => {    
        console.log(xhr.response);
    })
    
    xhr.open('GET', url);
    
    xhr.send();
}

/**
 * Fetch is a higher level API for sending requests using promises
 * Promises are an object that were designed to alleviate some of the problems
 * of 'callback hell' that tend to occur with applications that a lot of asynchronous
 * http calls.
 * 
 * fetch method will return a promise which we can then chain more actions on
 * using the .then() method or handle errors using the .catch() method.
 * 
 * Additionally, ES7 introduced the async/await keywords for implicit handling of promises.
 */
const fetchRequestPromise = () => {
    fetch(url)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then(result => {
        console.log(result);
    })
    .catch((err) => {
        console.err(err);
    });
}

const fetchRequestAsync = async () => {
    const response = await fetch(url)
    const data = await response.json();
    console.log(data);
}

fetchRequestAsync();