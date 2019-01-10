$(function() {
// show hide tabs	
	$('#tabs li').click(function(){
		var thisClass = this.className.slice(0,2);
		$('div.t1').hide();
		$('div.t2').hide();
		$('div.t3').hide();
		$('div.' + thisClass).fadeIn(500);
		$('#tabs li').removeClass('active');
		$(this).addClass('active');
		return false;
	});
	$('li.t1').click();

//show hide popup
    $('#callme').click(function() {
    	event.preventDefault();
    	$('.popup').fadeIn(900);
		setTimeout(function(){
			$('.popup').hide('slow');
		}, 4000); 
	});
 //scroll to next page
	$('.center').click(function () {
		$('html, body').animate({scrollTop: $(".property").offset().top}, 2000);
	});
	$('.service').click(function () {
		$('html, body').animate({scrollTop: $(".tab-content").offset().top}, 2000);
	});
	$('.team').click(function () {
		$('html, body').animate({scrollTop: $(".team-slider").offset().top}, 2000);
	});
	$('.contat').click(function () {
		$('html, body').animate({scrollTop: $(".footer-contact").offset().top}, 2000);
	});
//show hide menu
	$('.list-menu').click(function() {
		event.preventDefault();
	 	 $('.menu-list').toggle();
	});	

});
