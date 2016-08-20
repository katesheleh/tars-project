$(document).ready(function() {
  $('.js-tab-nav').on('click', function(event) {
    event.preventDefault();
    var tabNav = $(this).closest('li');
    if (!tabNav.hasClass('active')) {
      var newTab = $($(this).attr('href'));
      $('.js-tab-section.active').removeClass('active');
      newTab.addClass('active');
      $('.js-tab-menu a.active').removeClass('active');
      $(this).closest('a').addClass('active');
    }
  });
});