$('#form-1').submit(function(event){
  event.preventDefault();
  // $('#form-1 input[type=text]')
  const color = $('#form-1 input').val();
  $('.circle').css('background-color', color);
});
