
// LIGHT AND DARK MODE SWITCH
var mode = document.getElementById('mode');
var modeToggler = document.querySelector(".mode-toggler");

modeToggler.addEventListener('click', function(){
	modeToggler.classList.toggle('dark-active');
	mode.classList.toggle("dark-active");
});



// STICKY NAVBAR 

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top', 'nav-shadow');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top', 'nav-shadow');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 
