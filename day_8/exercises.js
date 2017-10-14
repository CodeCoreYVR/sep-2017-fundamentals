$('.shape');
$('.shape.black');
$('.shape').length;
$('.shape.black').length;
$('.shape.blue').length + $('.shape.black').length;
$('.shape.blue, .shape.black').length;
$('h1');
$('.small.circle');

// html
<img src="puppy.jpg">

// jquery
$('img').attr('src'); // "puppy.jpg", getter
$('img').attr('src', 'kitten.jpg'); // setter

// html
<a href="http://google.com">Google</a>

// jquery
// when we get, it only returns the first result of our wrapped set
$('a').attr('href');

// when we set, it write over all the elements in our wrapped set
$('a').attr('href', 'http://www.codecore.ca');

// eq allows us to target one element in our wrapped set, like an index of an array
$('a').eq(0).attr('href', 'http://www.reddit.com');

// set the class attrib of all the links to highlight
// this is what the resulting html will look like
<a class="highlight" href="http://www.google.com"></a>

// this will inject a class attribute even if one doesn't exist
$('a').attr('class', 'highlight');

//
<div class="small square blue shape"></div>

$('.shape').attr('class', 'highlight');

<div class="highlight"></div>

//
$('.shape').addClass('highlight');
<div class="small square blue shape highlight"></div>

//
$('.shape.blue').remove();
$('#orange-container .shape').remove();
$('#orange-container').children().remove();
$('.shape.small.red').remove();
$('#reset').html('Jacob');

$('a').html();
$('#reset').html('Launch Missiles!');
$('h1').html('Matt is cool!');

// function - call back function
$('#orange-container').click(function(){

  console.log("ouch!");
  //$('#orange-container').hide();
  // <div id="container" style="display:none">
  // $('#orange-container').remove();
  $('#orange-container').fadeOut(3000);
});

$('#green-container').click(function(){

  $('#orange-container').fadeIn(3000);
  // <div id="container" style="display:block">
});



$('.large.blue.square').mouseenter(function(){
  $('.large.blue.square').eq(0).addClass('highlight');
});

//
// this will register 2 events, one for each large blue square
$('.large.blue.square').mouseenter(function(){
  // these instructions can be relative
  // this, who threw the event?
  $(this).addClass('highlight');
});

// make it so that when the mouse leaves a large blue square, the highlight class gets removed:  .removeClass();
$('.large.blue.square').mouseleave(function() {
  $(this).removeClass('highlight');
});


// when any shape is clicked, hide it
$('.shape').click(function(){
  $(this).hide();
});
// when any container is clicked, hide all it's children
$('.container').click(function(){
  $(this).children().hide();
});
//
