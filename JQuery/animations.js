
// Jquery with Animations

// Hiding
$('.animation').hide(200); // hides the h1 with 0.2s delay
$('.animation').show(200); // shows the h1 with 0.2s delay

// Fading
$('.animation').fadeIn();                // fade in a hidden element
$('.animation').fadeOut(300);            // fade out
$('.animation').fadeToggle("slow");      // toggle between fadeIn and hadeOut
$('.animation').fadeTo("slow", 0.25);

// Sliding
$('.animation').slideToggle();
$('.animation').slideDown();
$('.animation').slideUp("slow");
$('.animation').slideDown();

// Animate  // only for properties which are numbers
$(".animation").animate({
    opacity: '0.5',
    left: '200px',
    height: '200px'
});
