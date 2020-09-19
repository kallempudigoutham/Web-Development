/*     JQuery Seletors */

$('h2').css('color' , 'red');    // Selects all the h2 and changes color to red
$('.first-div h2').css('color', '#000'); //// Selects all the h2 and changes color to red

$('.second-div h2').css('color' , 'pink'); // Selects head1 and head2 and changes color to pink
$('.second-div .heading1').css('color' , 'red'); // Selects head1 and head2 and changes color to pink


$('.first-div .heading2').css('color' , 'purple'); // Selects head3 and changes color to purple
$('h2.heading2').css('color' , 'red'); // Selects head3 and changes color to red
$('h2#head3').css('color' , '#000'); // Selects head3 and changes color to black
$('.heading2#head3').css('color' , "blue"); // Selects head3 and changes color to black


// text and html
$('.heading2#head3').text();                  // returns text content
$('.heading2#head3').html();                  // returns content, including HTML markup                 // returns field value
$('.heading2#head3').html('Hey <em>yo</em>')
