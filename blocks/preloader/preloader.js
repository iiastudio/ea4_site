<<<<<<< HEAD
// Block name: Preloader
// Dependencies: no dependencies
(function(){
	var preloader = $('.js-preloader');
	var preload = $('.js-preload-me').length;

	// Check if the preloader is active
	if(preload){
		$(window).on("load", function () {
			preloader.fadeOut('slow',function () {
				$(this).remove();
			});
		});
	}
=======
// Block name: Preloader
// Dependencies: no dependencies
(function(){
	var preloader = $('.js-preloader');
	var preload = $('.js-preload-me').length;

	// Check if the preloader is active
	if(preload){
		$(window).on("load", function () {
			preloader.fadeOut('slow',function () {
				$(this).remove();
			});
		});
	}
>>>>>>> 6c64ec922bfd710a542f016516ef3d76d20446f9
})();