(function(window, $){
  'use strict';

  $('main').slidescroll({
    pagesSelector: '.page'
  });

  $('body').on('click.app', '[data-popup]', function(e){
    var left = ($(window).width()/2) - (700/2),
      top = ($(window).height()/2) - (500/2);
    window.open($(this).attr('href'), $(this).data('share'), 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=700, height=500, top=' + top + ', left=' + left);
    e.preventDefault();
  });

  $('body').on('click.app', '.slidescroll-nav a', function(){
    window.location.hash = $(this).attr('href');
  });

})(this, this.jQuery);
