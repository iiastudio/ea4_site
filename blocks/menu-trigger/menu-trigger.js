<<<<<<< HEAD
// Block name: Menu Trigger
// Dependencies: jquery.sidr.js
// Docs: https://github.com/artberri/sidr
(function(){
	// Initialize Sidr plugin
	$('.js-menu-trigger').sidr({
		side: 'right',
		displace: false
	});

	// Close Sidr on click on menu anchors 
	$('.js-mobile-menu__close, #sidr a').on('click', function(event) {
		event.preventDefault();
		$.sidr('close', 'sidr');
	});

=======
// Block name: Menu Trigger
// Dependencies: jquery.sidr.js
// Docs: https://github.com/artberri/sidr
(function(){
	// Initialize Sidr plugin
	$('.js-menu-trigger').sidr({
		side: 'right',
		displace: false
	});

	// Close Sidr on click on menu anchors 
	$('.js-mobile-menu__close, #sidr a').on('click', function(event) {
		event.preventDefault();
		$.sidr('close', 'sidr');
	});

>>>>>>> 6c64ec922bfd710a542f016516ef3d76d20446f9
})();