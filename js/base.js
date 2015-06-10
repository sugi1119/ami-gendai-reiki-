$(document).ready(function() {
    $('.menu a').click(function(e) {
        $(this).toggleClass('active');
        $('.menu ul').slideToggle(300, function(){
          $('.menu ul').toggleClass('active');
          $('#panel-btn-icon').toggleClass('close');
          return false;
        })
        e.preventDefault();
    });

    $('.read_more').click(function(){
      $('.more_message').slideToggle(200);
      return false;
    });

    $('.mouse_show').hover(function(){
        $(this).closest('.grid_item').find('.line').slideToggle();
    });

});
