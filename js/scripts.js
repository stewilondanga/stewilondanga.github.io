var today = new Date();
var now = today.getHours();
var greeting = document.getElementById("greeting");
var message;

if ( now < 12 ){
  message = 'Whether tea or coffee, a cup will keep you warm! Stewart ilondanga says Good Morning';
} else if ( now < 18 ) {
  message = 'An apple a day keeps the doctor away! Stewart ilondanga says Good Afternoon';
} else if ( now < 21 ){
  message = 'Enjoying the review! Stewart ilondanga says Good Evening';
} else {
  message = 'Preparing for tommorrow? Stewart ilondanga says Good night!';
}

greeting.innerHTML = message;
