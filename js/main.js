//@prepros-append script.js
$(document).ready(function() {
	function ibg(){
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
	}
	ibg();
	$('.icon-menu').click(function(event) {
		$('.icon-menu, .menu__body, .menu__link, .menu__logo, .header__wrapper, .header__logo, .menu__contacts, .contacts__name, .contacts__number, .contacts__column, .menu__btn, .langs-menu__item,.langs-menu, langs-menu__item_active').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$(window).scroll(function() {scrolling()});
	function scrolling(){
		if($(window).scrollTop()>47){
			$('.header').addClass('scroll');
		}
		if($(window).scrollTop()==0){
			$('.header').removeClass('scroll');
		}
	}
});
