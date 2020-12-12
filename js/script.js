let languageMenu = document.getElementById('language-menu');
let languageList = document.getElementById('language-list');
let triangle = document.getElementById('triangle');
let languageH2 = document.getElementById('language-h2');
let hamburgerMenu = document.getElementById('hamburger-menu');
let hamburgerList = document.getElementById('hamburger-list');

function activeLanguageMenu() {
    languageMenu.classList.add('language_active');
    triangle.classList.add('triangle_active');
}

function desactiveLanguageMenu() {
    languageMenu.classList.remove('language_active');
    triangle.classList.remove('triangle_active');
}

function displayLanguageMenu() {
    if (languageList.style.display != 'flex') {
        activeLanguageMenu();
        languageList.style.display = 'flex';
    } else {
        desactiveLanguageMenu();
        languageList.style.display = 'none';
    }
}

function activeHamburgerMenu() {
    hamburgerMenu.classList.add('hamburger_active');
}

function desactiveHamburgerMenu() {
    hamburgerMenu.classList.remove('hamburger_active');
}

function displayHamburgerMenu() {
    if (hamburgerList.style.display != 'flex') {
        activeHamburgerMenu();
        hamburgerList.style.display = 'flex';
    } else {
        desactiveHamburgerMenu();
        hamburgerList.style.display = 'none';
    }
}

languageMenu.addEventListener('click', displayLanguageMenu);
hamburgerMenu.addEventListener('click', displayHamburgerMenu);

window.addEventListener('mouseup', e => {
	if (e.target != hamburgerList && e.target!= hamburgerMenu){
        desactiveHamburgerMenu();
        hamburgerList.style.display = 'none';
    }
});

window.addEventListener('mouseup', e => {
	if (e.target != languageList && e.target != languageH2 && e.target != triangle){
        desactiveLanguageMenu();
        languageList.style.display = 'none';
    }
});