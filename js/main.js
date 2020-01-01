'use strict';

 
jQuery(function () {
	//$(".ba-game__about").not(":first").hide();
	$('.ba-tabs__item').on('click', function(){
	  let index = $(this).index();
	  let content = $('.ba-card .ba-game__about').eq(index);
	  $(this).addClass('is-active').siblings().removeClass('is-active');
	  content.addClass('is-active').siblings().removeClass('is-active');
	});
});







