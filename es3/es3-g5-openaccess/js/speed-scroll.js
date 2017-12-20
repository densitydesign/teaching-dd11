    $.fn.moveIt = function(){
      var $window = $(window);
      var instances = [];

      $(this).each(function(){
        instances.push(new moveItItem($(this)));
      });

      window.onscroll = function(){
        var scrollTop = $window.scrollTop();
        instances.forEach(function(inst){
          inst.update(scrollTop);
        });
      }
    }

    var moveItItem = function(el){
      this.el = $(el);
      this.speed = parseInt(this.el.attr('data-scroll-speed'));
    };

    moveItItem.prototype.update = function(scrollTop){
      var pos = scrollTop / this.speed;
      this.el.css('transform', 'translateY(' + -pos + 'px)');
    };

    $(function(){
      $('[data-scroll-speed]').moveIt();
    });


    $(document).ready(function() {
    
        var path = document.querySelector('.vector');
        var length = path.getTotalLength();
        var $dashOffset = length + 5;
        $('.vector').css({'stroke-dasharray':length});
        $('.vector').css({'stroke-dashoffset':$dashOffset});
        var i = 2;

        $(window).scroll(function() {

            if ($(window).scrollTop()>2200) {

                $(".vector").css("stroke-dashoffset", 0);

            } else {

                $('.vector').css({'stroke-dashoffset':$dashOffset});

            }
            
            if ($(window).scrollTop()>2900) {
            
   
                    setTimeout(function () {    

                      $('.the-prices .col-xs-12:nth-of-type(' + i + ')').fadeIn();   

                      i++;  

                       if (i < 10) {            
                         loopEffect();             
                      }

                   }, 75);

            } else {

                $('.the-prices .col-xs-12:nth-of-type(2)').fadeOut();
                $('.the-prices .col-xs-12:nth-of-type(3)').fadeOut();
                $('.the-prices .col-xs-12:nth-of-type(4)').fadeOut();
                $('.the-prices .col-xs-12:nth-of-type(5)').fadeOut();
                $('.the-prices .col-xs-12:nth-of-type(6)').fadeOut();
                $('.the-prices .col-xs-12:nth-of-type(7)').fadeOut();
                $('.the-prices .col-xs-12:nth-of-type(8)').fadeOut();
                $('.the-prices .col-xs-12:nth-of-type(9)').fadeOut();
                $('.the-prices .col-xs-12:nth-of-type(10)').fadeOut();
                $('.the-prices .col-xs-12:nth-of-type(11)').fadeOut();
                
                i = 2; 

            }

        }); 
        
    

});