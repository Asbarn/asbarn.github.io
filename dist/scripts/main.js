const menuButton = document.getElementsByClassName('menu-btn')[0];
const menu = document.getElementsByClassName('menu')[0];
const menuNav = document.getElementsByClassName('menu-nav')[0];
//const menuBranding = document.getElementsByClassName('menu-branding')[0];
const navItems = document.getElementsByClassName('nav-item');
let menuShow = false;
console.log(navItems)
menuButton.addEventListener('click', () => {
    if (!menuShow) {
        menuButton.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        //menuBranding.classList.add('show');
        for (item of navItems) {
            item.classList.add('show');
        }
        //navItems.forEach(element => {element.classList.add('show');});
        menuShow = true;
    } else {
        menuButton.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        //menuBranding.classList.remove('show');
        for (item of navItems) {
            item.classList.remove('show');
        }
        menuShow = false;
    }

})
