(function(window, $){
  'use strict';

  //init the slideshow
  $('main').slidescroll({
    pagesSelector: '.page'
  });

  //social popups
  $('body').on('click.app', '[data-popup]', function(e){
    var left = ($(window).width()/2) - (700/2),
      top = ($(window).height()/2) - (500/2);
    window.open($(this).attr('href'), $(this).data('share'), 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=700, height=500, top=' + top + ', left=' + left);
    e.preventDefault();
  });


  //gif clikc payback
  $('.gif').on('click.app', function(e){
    e.preventDefault();
    var $this = $(this),
      $img = $this.find('img'),
      gif = $img.data('gif');

    $this.addClass('loading');

    $('<img/>').attr('src', gif).on('load', function(){
      $img.attr('src', gif);
      $this.addClass('loaded');
    });

  });

})(this, this.jQuery);
