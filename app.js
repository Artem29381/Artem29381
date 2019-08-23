let burg = document.getElementById('navClick');
let nav = document.querySelector('.nav');
burg.onclick = function() {
	nav.classList.toggle('show');
}


let header = document.querySelector('.header');
let intro = document.querySelector('.intro');

window.addEventListener('scroll', function() {
	if (window.pageYOffset > intro.offsetHeight) {
		nav.style.position = 'fixed';
		nav.style.right = 0;
		nav.style.backgroundColor = '#333';
		nav.style.top = 0;
		nav.style.borderRadius = 5 + 'px';
		nav.style.height = 50 + 'px';
	}
	else {
		nav.style.position = '';
	}
});
function scrollToWindow() {
	let coordinates = this.getAttribute('coord');
	let CorrectElement = document.getElementById(coordinates);
	let Otstyp = CorrectElement.getBoundingClientRect().top;
	console.log(Otstyp);
	CorrectElement.scrollIntoView({behavior: "smooth"});
/*	if (Otstyp > 1) {

	window.scrollTo(0,window.pageYOffset + Otstyp);
	else {window.scrollTo(0,window.pageYOffset + Otstyp);}*/
}




let selector = document.querySelectorAll(".nav__item");
for (let elem of selector) {
elem.addEventListener('click', scrollToWindow);
}



