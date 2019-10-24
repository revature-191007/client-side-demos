const children = document.getElementsByClassName('child');

for(let i  = 0; i < children.length; i++) {
    
    // This set's an event listener on the element
    // whenever this event is raised for this element,
    // the bound function will be called
    children[i].addEventListener('click', function(e) {
        // e -> 'event' object
        
        console.log('clicked');
        this.classList.toggle('selected');
        e.stopPropagation();
    });
}