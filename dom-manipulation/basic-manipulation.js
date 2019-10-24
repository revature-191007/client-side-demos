/*
 * DOM manipulation 
 * What is the DOM?
 * Document Object Model
 * The document object model is an in memory representation
 * of the structure of a processed html document.  When you load
 * an html document, the browser creates the 'dom' object. When we
 * use JavaScript to manipulate the HTML page, we aren't actually
 * changing any HTML - we are changing the DOM.
 * 
 * The DOM is a tree-like data structure.
 * 
 * Tree representation of basic-manipulation.html:
 * 
 *                          html
 *                         /     \
 *                       head    body
 *                      /        /    \   
 *                    title     header  div
 *                              /      /   \
 *                             h1    nav    section
 *                                  /        /  \    \
 *                                ol        p   p    p
 *                             /  |   \     |   |    |
 *                            li  li  li   (t) (t)  (t)
 *                            |   |   |
 *                           a    a   a
 *                           |    |   |
 *                          (t)  (t) (t)      
 * 
 * 
 * 
 * ------------------------------------------------------
 * 
 * How to get a reference to an element in the DOM?
 * The 'document' object is provided to us by the browser and functions
 * as our interface to the DOM.
 *
 * There are a few methods to retrieve a specific element or elements:
 * 
 * document.getElementById('id');
 * document.getElementsByClassName('className');
 * document.getElementsByName('name');
 * document.getElementsByTagName('tagName');
 * 
 * Query selector use CSS like syntax to retrieve elements.
 * 
 * document.querySelector('query')
 * document.querySelectorAll('query')
 * 
 * 
*/

firstP = document.querySelector('section > p');
secondP = document.querySelector('section > p:nth-child(2)');

setTimeout(() => {
    firstP.innerText = '<h1>hello</h1>';
    secondP.innerHTML = '<h1>Goodbye!</h1>'
    firstP.classList.add('red-background');
    setTimeout(() => {
        firstP.classList.remove('red-background');
    }, 500);
}, 500);

setInterval(() => {
    firstP.classList.toggle('red-background');
}, 500);

const section = document.querySelector("section");
console.log(section.parentElement);

const printDom = (el) => {
    const children = el.children;
    console.log(el.tagName);
    for (let i = 0; i < el.children.length; i++) {
        printDom(el.children[i]);
    }
}

addedPs = [];

const addParagraph = (str) => {
    // Creates a new element with the tagname 'p'
    const p = document.createElement('p');
    // Applies str to the innertext of the p
    p.innerText = str;
    // Adds the new p tag to the end of the section element
    section.appendChild(p);
    addedPs.push(p);
}

const deleteParagraph = (p) => {
    section.removeChild(p);
}
