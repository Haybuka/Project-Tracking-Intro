const harmburger = document.querySelector('.dropDown')
const dropimg = document.querySelector('.dropDown img')
const nav = document.querySelector('#container nav ul')

harmburger.addEventListener('click', (e) => {
    //toggle class list for harmburger
    //using the evemt element,toggle src for closed harm and open
    nav.classList.toggle('open');
    if ((e.srcElement.src) == 'file:///C:/Users/precious/Desktop/HtmlCss%20Project/project-tracking-intro-component-master/images/icon-hamburger.svg') {
        //using setAttribute and conditional,Check what Element exist,then set
        dropimg.setAttribute('src', 'images/icon-close.svg');
    } else {
        dropimg.setAttribute('src', 'images/icon-hamburger.svg');
    }
})