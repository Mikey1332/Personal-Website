let pageCount = 3;
let currentPage = 0;
let pages;

initializePages();

function initializePages() {
    pages = document.getElementsByClassName('page');
}

function nextPage() {
    if(currentPage + 1 >= pageCount)
        return;
    pages[currentPage].classList.toggle('hidden');
    currentPage++;
    pages[currentPage].classList.toggle('hidden');
}

function prevPage() {
    if(currentPage - 1 < 0)
        return;
    pages[currentPage].classList.toggle('hidden');
    currentPage--;
    pages[currentPage].classList.toggle('hidden');
}

function toggleNav() {
    let navbar = document.getElementById('sidebar-nav');
    navbar.classList.toggle('sidebar-shown');
    
}


