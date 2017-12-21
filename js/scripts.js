var today = new Date();
var now = today.getHours();
var greeting = document.getElementById("greeting");
var message;

if ( now < 07 ){
  message = 'Everyday may not be good, but there is something good in every day! Stewart ilondanga says Good Morning';
} else if ( now < 08 ) {
  message
} else if ( now < 09 ) {
  message
} else if ( now < 10 ) {
  message
} else if ( now < 11 ) {
  message
} else if ( now < 12 ) {
  message
} else if ( now < 13 ) {
  message
} else if ( now < 14 ) {
  message
} else if ( now < 15 ) {
  message
} else if ( now < 16 ) {
  message
} else if ( now < 17 ) {
  message
} else if ( now < 18 ) {
  message = 'I always wanted to be somebody, but now I realize I should have been more specific. Good Afternoon!';
} else if ( now < 19 ) {
  message = 'Every sunset brings the promise of a new dawn! Good Evening';
} else if ( now < 20 ) {
  message
} else if ( now < 21 ) {
  message
} else if ( now < 22 ) {
  message
} else if ( now < 23 ) {
  message = 'No man has a good enough memory to be a successful liar. Good night!';
} else {
  message = 'Preparing for tommorrow? Good night!';
}

greeting.innerHTML = message;

$(document).ready(function(){

	$("nav a").on("click", function(event){
		event.preventDefault();
		$("nav").addClass("fixed");
		id = ($(this).attr("href"));
		scrollVertical = $(id).offset().top;

		$("body, html").animate({scrollTop: scrollVertical});
	});

	$(document).on("scroll", function(){
		secondPage = $("nav li:nth-child(2) a").attr("href");

		if ( $("body").scrollTop() >= $("nav").height() )
		{
			$("nav").addClass("fixed");
		} else {
			$("nav").removeClass("fixed");
		}
	});

});

var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();
