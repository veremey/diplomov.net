//make by Veremey4uk@gmail.com skype: baxazar
$(document).ready(function() {

	//клик на "закрыть" закр оkно и темный фон
	$(".js-close-popup").on("click", function(){
		$(".js_popup").hide();
		$('.js_popup_wrap').hide();

		$(".js_popup").removeClass('is_active');//можно удалить но в ХТМЛ указать клас, где подкл попап благодарности
		$('.js_senks').removeClass('is_active');//можно удалить но в ХТМЛ указать клас, где подкл попап благодарности
		return false;

	});

	//показать все города
	$('.js_alltown_window_open').on('click', function(){
		$('.js_popup').show();
		$('.js_all_town').show();
		return false;
	});
	//закрыть окно "Мы угадали город?"
	$('.js_close_town_window').on('click', function(){
		$('.town_window').hide();
		$('.contact__city').removeClass('is-visible');
		return false;
	});
	//клик на ПОПАП - закрывает эти окна
	$('.js_popup').on('click', function() {
		$(this).hide();
		$('.js_popup_wrap').hide();

		$(this).removeClass('is_active');//можно удалить но в ХТМЛ указать клас, где подкл попап благодарности
		$('.js_senks').removeClass('is_active');//можно удалить но в ХТМЛ указать клас, где подкл попап благодарности
		return false;

	});
	//показать попап !!!! благодарности !!!
	$('.js_senks').on('click', function(){
		$('.js_popup').show();
		$('.js_senks_popup').show();

		$('.js_popup').addClass('is_active');//можно удалить но в ХТМЛ указать клас, где подкл попап благодарности
		$(this).addClass('is_active');//можно удалить но в ХТМЛ указать клас, где подкл попап благодарности
		return false;

	});
	//показать попап  ФОРМА
	$('.js_take_form').on('click', function(){
		$('.js_popup').show();
		$('.js_popup_form').show();
		return false;
	});

});

