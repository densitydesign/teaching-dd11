$(document).ready(function() {

    //Interaction Viz 02.01
    //Button
    $('.corpus-btn').click(function(){
        if($('.corpus-btn').text() == 'Hide groups'){
            $(this).removeClass('corpus-active').text('Highlight groups');
            $('.corpus-video--source').attr('src', '../img/viz02-01--r.mp4');
            $('.corpus-video')[0].load();
            $('.corpus-video').get(0).play();
            $('.corpus-video--img').attr('src', '../img/viz02-01.png');
        }
        else if($('.corpus-btn').text() == 'Highlight groups'){
            $(this).addClass('corpus-active').text('Hide groups');
            $('.corpus-video--source').attr('src', '../img/viz02-01.mp4');
            $('.corpus-video')[0].load();
            $('.corpus-video').get(0).play();
            $('.corpus-video--img').attr('src', '../img/viz02-01--r.png');
        };
    });
    
    //Slider
    $('.corpus-slider--selector').slider();
    $('.corpus-slider--selector').on('slide', function (slideEvt) {
        $('.corpus-slider--val').text(slideEvt.value);
    });
    $('.corpus-slider--selector').on('change', function (slideEvt) {
        $('.corpus-img').attr('src', 'img_ch02/img_rank' + slideEvt.value.newValue + '.png');
    });
    
    
    //Interaction Viz 03.01
    $('.tag-circle').click(function(){
        $('.tag-circle').css('opacity','0.3');
        $('.tag-news').css('opacity','0');
        $('.tag-segment').css('opacity','0');
        $(this).css('opacity','1');
        $(this).siblings('.tag-news').css('opacity','1');
        $(this).siblings('.tag-segment').css('opacity','1');
    });
    
    
    //Interaction Viz 04.01
    //Buttons
    $('.events-flexItem').click(function(){
        $('.events-active').removeClass('events-active');
        $(this).addClass('events-active');
    });
    
    //Swap
    $('.events01').click(function(){
        $('.events-svg').hide();
        $('#events-svg01').show();
    });
    $('.events02').click(function(){
        $('.events-svg').hide();
        $('#events-svg02').show();
    });
    $('.events03').click(function(){
        $('.events-svg').hide();
        $('#events-svg03').show();
    });
    $('.events04').click(function(){
        $('.events-svg').hide();
        $('#events-svg04').show();
    });
    $('.events05').click(function(){
        $('.events-svg').hide();
        $('#events-svg05').show();
    });
    $('.events06').click(function(){
        $('.events-svg').hide();
        $('#events-svg06').show();
    });
    
    //Svg
    $('.events-moment').hover(function(){
        $('.events-moment').css('opacity', '0.2');
        $(this).css('opacity', '1');
    },
                                   function(){
        $('.events-moment').css('opacity', '1');
    });
    
    $('.events-text').hover(function(){
        $(this).prev().animate({opacity: '1'}, 200);
        $(this).siblings('.events-img--base').animate({opacity: '0'}, 200);
    },
                           function(){
        $(this).prev().animate({opacity: '0'}, 200);
        $(this).siblings('.events-img--base').animate({opacity: '1'}, 200);
    });
    
    
    //Interaction Viz 05.01
    //Buttons
    $('.archetype-flexItem').click(function(){
        $('.archetype-active').removeClass('archetype-active');
        $(this).addClass('archetype-active');
    });
    
    //Swap
    $('.archetype01').click(function(){
        $('.archetype-svg').hide();
        $('#archetype-svg01').show();
        $(".archetype-gif").attr("src", "../img/gif/gif01.gif");
    });
    $('.archetype02').click(function(){
        $('.archetype-svg').hide();
        $('#archetype-svg02').show();
        $(".archetype-gif").attr("src", "../img/gif/gif02.gif");
    });
    $('.archetype03').click(function(){
        $('.archetype-svg').hide();
        $('#archetype-svg03').show();
        $(".archetype-gif").attr("src", "../img/gif/gif03.gif");
    });
    $('.archetype04').click(function(){
        $('.archetype-svg').hide();
        $('#archetype-svg04').show();
        $(".archetype-gif").attr("src", "../img/gif/gif04.gif");
    });
    $('.archetype05').click(function(){
        $('.archetype-svg').hide();
        $('#archetype-svg05').show();
        $(".archetype-gif").attr("src", "../img/gif/gif05.gif");
    });
    $('.archetype06').click(function(){
        $('.archetype-svg').hide();
        $('#archetype-svg06').show();
        $(".archetype-gif").attr("src", "../img/gif/gif06.gif");
    });
    $('.archetype07').click(function(){
        $('.archetype-svg').hide();
        $('#archetype-svg07').show();
        $(".archetype-gif").attr("src", "../img/gif/gif07.gif");
    });
    $('.archetype08').click(function(){
        $('.archetype-svg').hide();
        $('#archetype-svg08').show();
        $(".archetype-gif").attr("src", "../img/gif/gif08.gif");
    });
    $('.archetype09').click(function(){
        $('.archetype-svg').hide();
        $('#archetype-svg09').show();
        $(".archetype-gif").attr("src", "../img/gif/gif09.gif");
    });
    $('.archetype10').click(function(){
        $('.archetype-svg').hide();
        $('#archetype-svg10').show();
        $(".archetype-gif").attr("src", "../img/gif/gif10.gif");
    });
    $('.archetype11').click(function(){
        $('.archetype-svg').hide();
        $('#archetype-svg11').show();
        $(".archetype-gif").attr("src", "../img/gif/gif11.gif");
    });

});