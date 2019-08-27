let burg = document.querySelector('#navClick');
let nav = document.querySelector('.header');
let navigation = document.querySelector('.nav');
burg.onclick = function() {
	burg.classList.toggle('trans');
	navigation.classList.toggle('show');
	navigation.style.borderRadius = 5 + 'px';
		if (document.body.offsetWidth < 1000) {
		navigation.style.height = 200 + 'px';}
		else {
			navigation.style.height = 50 + 'px';
		}
}


let header = document.querySelector('.header');
let intro = document.querySelector('.intro');
/*let burger = document.querySelector('.burger')
	let element = document.querySelector('div').parentNode;
	let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
*/
window.addEventListener('scroll', function() {
/*		
Определение какой элемент попал в фокус экрана 
if (element.offsetTop + element.getBoundingClientRect().bottom < window.pageYOffset) {
					element = element.nextElementSibling;	
					if (window.getComputedStyle(element).backgroundColor != 'rgba(0, 0, 0, 0)') {
							burger.style.background = '#333';
					}
					else {
						burger.style.background = '#333';
					}
}
else if (scrollHeight - element.offsetTop + element.offsetHeight  < scrollHeight-window.pageYOffset) {
		console.log(window.getComputedStyle(element).backgroundColor);
	element = element.previousElementSibling;

	if (window.getComputedStyle(element).backgroundColor != 'rgba(0, 0, 0, 0)') {
						burger.style.background = '#333';
					}
					else {
						burger.style.background = '#333';
					}
}*/
	
	if (window.pageYOffset > intro.offsetHeight) {
		nav.style.position = 'fixed';
		nav.style.right = 0;
		nav.style.backgroundColor = '#333';
		nav.style.top = 0;
		nav.style.borderRadius = 5 + 'px';
		if (document.body.offsetWidth < 600) {
		nav.style.height = 70 + 'px';}
		else {
			nav.style.height = 80 + 'px';
		}
	}
	else {
		nav.style.position = '';
	}
});
function scrollToWindow() {
	let coordinates = this.getAttribute('coord');
	let CorrectElement = document.getElementById(coordinates);
	let Otstyp = CorrectElement.getBoundingClientRect().top;
	CorrectElement.scrollIntoView({behavior: "smooth"});
/*	if (Otstyp > 1) {

	window.scrollTo(0,window.pageYOffset + Otstyp);
	else {window.scrollTo(0,window.pageYOffset + Otstyp);}*/
}




let selector = document.querySelectorAll(".nav__item");
for (let elem of selector) {
elem.addEventListener('click', scrollToWindow);
}



