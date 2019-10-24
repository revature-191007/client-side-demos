const elements = document.querySelectorAll('body *');

console.log(elements);

for(let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(e) {
        console.log('bubbling' + this.tagName);
    });
    
    elements[i].addEventListener('click', function(e) {
        console.log('capturing' + this.tagName);
    }, true); // optional truthy parameter sets this as capturing handler
}