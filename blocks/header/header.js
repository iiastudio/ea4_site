<<<<<<< HEAD
// Block name: Header
// Dependencies: no dependencies
// Docs: 
(function(){
	var header = $(".js-header").first();
	var logo = header.find('.js-logo__image');

	var updateHeader = function() {
		if($(window).scrollTop() === 0){
			header.removeClass('header--fixed');
			if (logo.data('switch') === true) {
				logo.attr("src","assets/img/common/logo/logo.png");
			}
		}else{
			header.addClass('header--fixed');
			if (logo.data('switch') === true) {
				logo.attr("src","assets/img/common/logo/logo-dark.png");
			}
		}
	};

	if (header.length) { updateHeader(); }

	$(window).scroll(function () {
		updateHeader();
	});

=======
// Block name: Header
// Dependencies: no dependencies
// Docs: 
(function(){
	var header = $(".js-header").first();
	var logo = header.find('.js-logo__image');

	var updateHeader = function() {
		if($(window).scrollTop() === 0){
			header.removeClass('header--fixed');
			if (logo.data('switch') === true) {
				logo.attr("src","assets/img/common/logo/logo.png");
			}
		}else{
			header.addClass('header--fixed');
			if (logo.data('switch') === true) {
				logo.attr("src","assets/img/common/logo/logo-dark.png");
			}
		}
	};

	if (header.length) { updateHeader(); }

	$(window).scroll(function () {
		updateHeader();
	});

>>>>>>> 6c64ec922bfd710a542f016516ef3d76d20446f9
})();