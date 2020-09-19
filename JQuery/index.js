
// Selecting the html tag and manipulating it
$("h1").css("color" , "red");

// Selecting multiple elelments

$("button").css({"backgroundColor" : "yellow" , "color" : "pink"});

// Getting class list
$("#para1").hasClass("paragraph")   // true if class exists

// Setting class list
$("#para1").addClass("p-css");

// Getting the attributes
$("a").attr('href');

// Setting the attribute
// Event listeners
// Syntax 1
$("a").click(function(){
   $(this).attr('href' , 'https://www.bing.com/')
});

// Syntax 2
$("#para1").on("click"  ,function(){
   $(this).removeClass("p-css");   // remove class
});

// $("#para1").toggleClass("p-css");  // toggle the class


// Adding content   can add html tags as well
$("h1").prepend("Prepend!");
$("h1").append("Append");
$("h1").before("<h1>Before<h1>");
$("h1").after("After");

// Sending Keys

$("input").keydown(function(event){
    console.log(event.key);
});

// $(document).keydown(function(event){
//     //alert("Clicked on " + event.key );
// });
