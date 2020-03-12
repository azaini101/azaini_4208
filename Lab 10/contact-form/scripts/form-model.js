const formId = "1FAIpQLSdHYn4spgHEiGTgL6aiQKGuw7Rh0Kqq99WEOerGUZk1kb5cdA"
const entry1 = "entry.731353341"
const entry2 = "entry.1416172765"
const entry3 = "entry.1631521522"

const getPath = formId => `http://docs.google.com/forms/d/e/${formId}/formResponse`;

const postToGoogleDb = function(data){
    const path = getPath(formId);
    const url = getUrl(path,data);
    sendRequest('POST', url)
        .then( responseEvent );
}

const getUrl = function(path, params){
    const url = new URL(path);
    for(let key in params){
        url.searchParams.set(key, params[key]);
    }
    return url;
}

const initRequest = function(verb, url){
    const init = new Object();
    init.method = verb;
    init.mode = 'no-cors';
    return new Request(url, init);
}

const sendRequest = async function(verb, url){
    const request = initRequest(verb, url);
    const response = await fetch(request);
    return response;
}

const responseEvent = response => alert('Success!');
