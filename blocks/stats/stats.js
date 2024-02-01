<<<<<<< HEAD
// Block name: Stats
// Dependencies: jquery.animateNumber.js, jquery.inview.js
// Docs: 
// https://github.com/aishek/jquery-animateNumber
// https://github.com/protonet/jquery.inview
(function(){
	var numbers = $('.js-stats__number');

	numbers.each(function () {
		var number = $(this);
		var to = number.data('number');
		var units = number.data('units') ? number.data('units') : '';

		number.one("inview",function () {
			number.animateNumber({
				number: to,
				numberStep: $.animateNumber.numberStepFactories.append(units)
			}, 3000);
		});
	});
=======
// Block name: Stats
// Dependencies: jquery.animateNumber.js, jquery.inview.js
// Docs: 
// https://github.com/aishek/jquery-animateNumber
// https://github.com/protonet/jquery.inview
(function(){
	var numbers = $('.js-stats__number');

	numbers.each(function () {
		var number = $(this);
		var to = number.data('number');
		var units = number.data('units') ? number.data('units') : '';

		number.one("inview",function () {
			number.animateNumber({
				number: to,
				numberStep: $.animateNumber.numberStepFactories.append(units)
			}, 3000);
		});
	});
>>>>>>> 6c64ec922bfd710a542f016516ef3d76d20446f9
})();