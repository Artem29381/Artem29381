$(function(){
	/*Fixed Header */
	let header = $("#header");
	let intro = $("#intro");
	let introHeight = intro.innerHeight();
	let scrollPosition = $(window).scrollTop();
	checkScroll(scrollPosition, introHeight);

	$(window).on("scroll resize", function() {
		//можно load resize добавить
		scrollPosition = $(this).scrollTop();
		checkScroll(scrollPosition, introHeight);
	});

function checkScroll(scrollPosition, introHeight) {
		if (scrollPosition > introHeight) {
			header.addClass('fixed')
		}
		else {
			header.removeClass('fixed')
}}


	/*Smooth scroll */

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault(); /*Отменяет стандартное поведение ссылки */

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top; //отступ данного элемента от вверха 
		nav.removeClass('show');

		$("html, body").animate({
			scrollTop: elementOffset-60
		}, 700);


	});
/*Burger menu click show */
	let nav = $("#nav");
	let navClick = $("#navClick");
	navClick.on("click", function(event) {
		event.preventDefault();
		nav.toggleClass('show'); /*добавляет класс при клике, убираем при повторном клике*/

	});


	/*Reviews*/ 
//https://kenwheeler.github.io/slick/

let slider = $("#reviewsSlider");
slider.slick({
  infinite: true, //бесконечная прокрутка включена
  slidesToShow: 1, //сколько скролим
  slidesToScroll: 1, //сколько скроллим при клике
  fade: true, //затемнение отзывов
  arrows: false,
  dots: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  pauseOnFocus: true
  
});

let testimonials = $(".a")
testimonials.on("click", function() {

})

});



//console.log(intro.offsetHeight); intro.clientHeight