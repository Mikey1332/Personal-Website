const pageCount = 3;
let currentPage = 0;
let pages;
let pageCountEl = document.getElementById('total-pages');
let pageNumberEl = document.getElementById('current-page');
// Get a reference to the element that you want to work with
var img = document.querySelector("img.img-default");

initializePages();

function initializePages() {
    pages = document.getElementsByClassName('page');
    pageCountEl.textContent = pageCount;
}

function nextPage() {
    if(currentPage + 1 >= pageCount)
        return;
    pages[currentPage].classList.toggle('hidden');
    currentPage++;

    pageNumberEl.textContent = currentPage + 1;

    pages[currentPage].classList.toggle('hidden');
}

function prevPage() {
    if(currentPage - 1 < 0)
        return;
    pages[currentPage].classList.toggle('hidden');
    currentPage--;
    pages[currentPage].classList.toggle('hidden');
    pageNumberEl.textContent = currentPage + 1;

}

// function backPage() {
//     window.history.back();

// }

function toggleNav() {
    let navbar = document.getElementById('sidebar-nav');
    navbar.classList.toggle('sidebar-shown') 
}

function projectsNavOn() {
    let navbar = document.getElementById('projects-nav');
    // navbar.classList.toggle('projects-shown')
    navbar.classList.add('projects-shown')
}

function projectsNavOff() {
    let navbar = document.getElementById('projects-nav');
    // navbar.classList.toggle('projects-shown')
    navbar.classList.remove('projects-shown')
}


// Set up an event handler. Notice that we don't use "on" in front
// of the event name when doing it this way.
img.addEventListener("mouseover", changeDef);

function changeDef(event){
  console.log(event.target);
}

$('#go').click(function(event){
    var email =  $('mkroner24@pascack.org').val();
    window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to='+email;
    })
