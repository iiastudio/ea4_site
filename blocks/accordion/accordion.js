<<<<<<< HEAD
// Block name: Accordion
// Dependencies: no dependencies
(function(){
	$(".js-accordion").each(function() {
		var accordion = $(this);
		var select = {
			title: ".accordion__title",
			content: ".accordion__content"
		};

		var title = accordion.find(select.title);

		title.on('click', function(event) {
			event.preventDefault();
			$(this).toggleClass('accordion__title--active').parent().find(select.content).slideToggle();
		});
	});
=======
// Block name: Accordion
// Dependencies: no dependencies
(function(){
	$(".js-accordion").each(function() {
		var accordion = $(this);
		var select = {
			title: ".accordion__title",
			content: ".accordion__content"
		};

		var title = accordion.find(select.title);

		title.on('click', function(event) {
			event.preventDefault();
			$(this).toggleClass('accordion__title--active').parent().find(select.content).slideToggle();
		});
	});
>>>>>>> 6c64ec922bfd710a542f016516ef3d76d20446f9
})();