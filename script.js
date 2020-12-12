let languageMenu = document.getElementById("language-menu");
let languageList = document.getElementById("language-list");
let hamburgerMenu = document.getElementById('hamburger-menu');
let hamburgerList = document.getElementById('hamburger-list');

function activeLanguageMenu() {
    languageMenu.style.backgroundColor = 'rgba(236, 104, 10, 0.726)';
    languageMenu.style.color = 'white';
    languageMenu.classList.add('active');
}

function desactiveLanguageMenu() {
    /*languageMenu.style.backgroundColor = 'rgba(0, 0, 0, 0)';*/
    languageMenu.classList.remove('active');
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
    hamburgerMenu.style.background = 'url("img/icons/menu-hamburger/menu-hamburger-active.png") no-repeat';
    hamburgerMenu.style.backgroundSize = 'contain';
    hamburgerMenu.style.backgroundColor = 'rgba(236, 104, 10, 0.726)';
    hamburgerMenu.style.alt = 'Ouvrir le Menu';
    hamburgerMenu.style.color = 'white';
    hamburgerMenu.classList.add('active');
}

function desactiveHamburgerMenu() {
    hamburgerMenu.style.background = 'url("img/icons/menu-hamburger/menu-hamburger.png") no-repeat';
    hamburgerMenu.style.backgroundSize = 'contain';
    hamburgerMenu.style.alt = 'Fermer le Menu';
    hamburgerMenu.classList.remove('active');
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
