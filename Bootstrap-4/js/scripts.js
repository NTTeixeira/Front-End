$( document ).ready(function() {

	var btnMenuMobile = $('.btnMenuMobile');

	$(btnMenuMobile).on('click', function() {

		$('.nav-container ul').toggleClass('open');
	
	 });

});
