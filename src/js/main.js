const body = document.querySelector('body');
const btnMenuMobile = document.querySelector('.btn');
const btnOpenMenuMobile = document.querySelector('.open-menu');
const btnCloseMenuMobile = document.querySelector('.close-menu');
const navMenuMobile = document.querySelector('.nav-menu');
const navMenuMoblieBtns = document.querySelectorAll('.nav-menu_element');
const footerYear = document.querySelector('.footer-year')

const openMenuMobile = () => {
	navMenuMobile.classList.toggle('active-nav');
	btnOpenMenuMobile.classList.toggle('active-nav_btn');
	btnCloseMenuMobile.classList.toggle('active-nav_btn');
    body.classList.toggle('stop-scroll')
};

const closeMenuMobile = () => {
    navMenuMobile.classList.toggle('active-nav');
	btnOpenMenuMobile.classList.toggle('active-nav_btn');
	btnCloseMenuMobile.classList.toggle('active-nav_btn');
    body.classList.toggle('stop-scroll')
};

btnOpenMenuMobile.addEventListener('click', openMenuMobile);
btnCloseMenuMobile.addEventListener('click', closeMenuMobile);
navMenuMoblieBtns.forEach(e => {
    e.addEventListener('click', closeMenuMobile)
})

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();