buttonColors = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = [];
started = false;
level = 0;


$(document).keydown(function() {
  if (!started) {
    $('#level-title').text('Level ' + level);
    started = true;
    nextSequence();
  }
});


// When any of the button is clicked

$('.btn').click(function(event) {
  userChosenColor = $(this).attr('id');
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});


function nextSequence() {
  userClickedPattern = [];
  level++;
  $('#level-title').text('Level ' + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    new Audio("sounds/wrong.mp3").play();
    $('body').addClass('game-over');
    setTimeout(function() {
      $('body').removeClass('game-over');
    }, 200);

    $('#level-title').text("Game Over, Press Any Key to Restart");

    startOver();
  }
}

function playSound(name) {
  new Audio("sounds/" + name + ".mp3").play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass('pressed');
  setTimeout(function() {
    $("#" + currentColor).removeClass('pressed');
  }, 100);
}

function startOver() {
   level = 0;
   gamePattern = [];
   started = false;
}