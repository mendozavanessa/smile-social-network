$(document).ready(function() {
  $('.toggle').click(function() {
    $('.formulario').animate({
      height: 'toggle',
      'padding-top': 'toggle',
      'padding-bottom': 'toggle',
      opacity: 'toggle'
    }, 'slow');
  });
  $('input[type="submit"]').click(function() {
    window.location.href = '../views/redSocialSmile.html';
  });
});
