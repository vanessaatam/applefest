$(document).ready(function() {
  function updateNavElements() {
      if ($(window).width() > 600) {
          $('#hamburger-icon').addClass('hidden');
          $('#nav-horizontal').removeClass('hidden');
          $('#logo2').addClass('hidden');
          $('#logo').removeClass('hidden');
          $('#nav-tag').removeClass('hidden');
      } else {
          $('#nav-tag').addClass('hidden');  
          $('#hamburger-icon').removeClass('hidden');
          $('#nav-horizontal').addClass('hidden');
          $('#logo').addClass('hidden');
          $('#logo2').removeClass('hidden');
      }
  }

  updateNavElements();

  $(window).resize(function() {
      updateNavElements();
  });

  $('#hamburger-icon').click(function() {
      $('#hamburger-nav').removeClass('hidden');
      $('#nav-drop').removeClass('hidden');
  });

  $('#close-nav-btn').click(function() {
      $('#hamburger-nav').addClass('hidden');
      $('#nav-drop').addClass('hidden');
  });
});
