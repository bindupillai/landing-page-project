/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
const sectionList = document.querySelectorAll('section');
const ulElement = document.querySelector('#navbar__list');

// build the nav
function buildNavMenu(){
    //set the class for the nav bar
    ulElement.className = "navbar__menu";
     
    for(let i=0; i < sectionList.length; i++){
        //Create <li> and <a> elements
        let liElement = document.createElement('li');
        let anchorElement = document.createElement('a');

        //set class, href and text
        anchorElement.className = "menu__link";
        anchorElement.textContent = sectionList[i].dataset.nav;
        anchorElement.href = "#" + sectionList[i].id;

        //Listen to anchor tag click event and Scroll to anchor ID using scrollinto view event
        anchorElement.addEventListener('click', function(event){
            //prevent default action
            event.preventDefault();
            //set scrolling action
            sectionList[i].scrollIntoView({behavior:"smooth", block:"end", inline:"nearest"});  
            //call function to make the correct menulink active
            viewportSection;           
        });

        //append anchor tag to <li>element
        liElement.appendChild(anchorElement);
        ulElement.appendChild(liElement);
    }
}

//based on udacity class 7.3 #9
function viewportSection() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        const box = section.getBoundingClientRect();       
        if (
            box.top < (window.innerHeight /2)
            && box.top > -box.height
            && box.left < window.innerWidth
            && box.left > -box.width)
        {      
            //this section is on viewport 
            section.classList.add('your-active-class');   
            //loop through all the anchor menu tag and make the correct link active
            let anchorElementList = document.querySelectorAll('a');
            anchorElementList.forEach((item) => {
                if (item.textContent === section.dataset.nav){
                    item.classList.add('menu__linkclicked');
                } else {
                    item.classList.remove('menu__linkclicked');
                }  
            });       
        } else {
            //this section is not on viewport
            section.classList.remove('your-active-class');
        }
        
    });
}

// Build menu 
document.addEventListener('DOMContentLoaded', buildNavMenu());

// Scroll to section and set section as active
document.addEventListener('scroll', viewportSection);






