var today = new Date();
var now = today.getHours();
var greeting = document.getElementById("greeting");
var message;

if ( now < 12 ){
  message = 'Welcome! Stewart ilondanga says Good Morning';
} else if ( now < 18 ) {
  message = 'Welcome! Stewart ilondanga says Good Afternoon';
} else {
  message = 'Welcome! Stewart ilondanga says Good Evening';
}

greeting.innerHTML = message;
