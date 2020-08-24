//?WEBPSUPPORT
function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
   callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   
   testWebP(function (support) {
   
   if (support == true) {
   document.querySelector('body').classList.add('webp');
   }else{
   document.querySelector('body').classList.add('no-webp');
   }
   });
//?IMAGE BACKGROUND
function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();
//?BURGER
// Бургер меню
$('.burger').click(function(event) {
	$('.burger__button').toggleClass('active');
	$('.header__bottom-menu').toggleClass('active');
	if($(this).hasClass('active')){
		$('body').data('scroll',$(window).scrollTop());
	}
		$('body').toggleClass('lock');
	// if(!$(this).hasClass('active')){
	// 	$('body,html').scrollTop(parseInt($('body').data('scroll')));
	// }
});
// Клик вне области
$(document).on('click touchstart',function(e) {
	if (!$(e.target).is(".header__bottom *")) {
		$('.header__bottom-menu').removeClass('active');
		$('.burger__button').removeClass('active');
		$('body').removeClass('lock')
	};
});


//?FIXED_HEADER
window.onscroll = function showHeader() {
	var header = document.querySelector('.header__bottom');
	if(window.pageYOffset > 100){
		 header.classList.add('fixed');
	} else{
		 header.classList.remove('fixed');
	}
}
//?SPOILER
$(document).ready(function(){
	$('.spoiler__btn').click(function(event){
		if($('.spoiler').hasClass('onlyone')){
			$('.spoiler__btn').not($(this)).removeClass('active');
			$('.spoiler__body').not($(this).next()).slideUp(100);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});