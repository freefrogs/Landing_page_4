//$(document).ready(function() 
$(function() {
	//Scroll to ID
	$('a[href^="#nav"]').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
	});

	//Lightbox
	$('.img_lightbox').click(function() {
		var $src = $(this).attr('src');
		var image = $("<div id='lightbox'><img src=''></div>");
		$('body').append(image);
		$('#lightbox').show();
		$('#lightbox img').attr('src', $src);
	});
	$('body').on('click', '#lightbox', function() {
		$('#lightbox').remove();
	});
	
	//Tooltips initialized
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});
});
