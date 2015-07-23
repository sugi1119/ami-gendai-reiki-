$(document).ready(function() {
  // humberger menu function
    $('.menu a').click(function(e) {
        $(this).toggleClass('active');
        $('.menu ul').slideToggle(300, function(){
          $('.menu ul').toggleClass('active');
          $('#panel-btn-icon').toggleClass('close');
          return false;
        })
        e.preventDefault();
    });

// Message Read more function
    $('.read_more').click(function(){
      $('.more_message').slideToggle(400)
      // $('#sx img').css('display', 'inline-block');
      var el = $(this).closest('.message').find('small');
      if(el.text() == el.data('text-swap')){
        el.text(el.data('text-original'));
      } else{
        el.data('text-original', el.text());
        el.text(el.data('text-swap'));
      }

      return false;
    });

// Change from slide toggle to visible function
    $('.grid_item.inside').hover(function(){

      var $this = $(this);

        var $that = $this.find('li');
        $that.data('clr', $that.css('color')).css('color', '#656765');
      },
      function(){
        var $this = $(this);

        var $that = $this.find('li');
        $that.css('color', $that.data('clr'));
      }
    );

// #656765
  // background image change its opaque
  // $('.grid_item').hover(function(){
  //   var $this = $(this);
  //   var $that = $this.find('.hover');
  //   var $clickable = $this.find('.sb_behind');
  //   $that.data('opq', $that.css('opacity')).css('opacity', '0.1');
  //   $clickable.data('dis', $clickable.css('display')).css('display', 'inline-block');

  // },
  // function(){
  //   var $this = $(this);
  //   var $that = $this.find('.hover');
  //   var $clickable = $this.find('.sb_behind');
  //   $that.css('opacity', $that.data('opq'));
  //   $clickable.css('display', $clickable.data('dis'));

  // }
  // );




});


