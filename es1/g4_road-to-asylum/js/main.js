//Graph01
var dot = Snap('.graph01-dots');
var dots = dot.selectAll('circle');

dots.forEach(function(d,i){
    d.hover(function(){
        this.animate({r: '6'}, 200);
}, function(){
        this.animate({r: '4.512'}, 200);
});
});


$(document).ready(function(){
  
    //Scrollspy
    
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});   
    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    });
    
    
    //Popover
    $('[data-toggle="popover"]').popover();
    
    
    //Graph 01
    $('.graph01-dots circle').hover(function(){
        $('.graph01-box').hide();
        $(this).next().show();
    },
                                   function(){
        $('.graph01-box').hide();
    });
    
    
    //Graph 04
    $('.btn04').click(function(){
        $('.flux').css('opacity','0.05');
        $('.btn04 text').css('fill','#4C6363');
        $(this).next().css('opacity','0.7');
        $(this).children('text').css('fill','#C3945E')
    });
    
    
    //Graph 05
    //Syria
    $('.flexSyria').click(function(){
        $('.btn-flexItem').removeClass('active');
        $(this).addClass('active');
        $('.graph05').attr('src','img/graph5_Syria.svg');
    });
    //Serbia
    $('.flexSerbia').click(function(){
        $('.btn-flexItem').removeClass('active');
        $(this).addClass('active');
        $('.graph05').attr('src','img/graph5_Serbia.svg');
    });
    //Afghanistan
    $('.flexAfghanistan').click(function(){
        $('.btn-flexItem').removeClass('active');
        $(this).addClass('active');
        $('.graph05').attr('src','img/graph5_Afghanistan.svg');
    });
    //Eritrea
    $('.flexEritrea').click(function(){
        $('.btn-flexItem').removeClass('active');
        $(this).addClass('active');
        $('.graph05').attr('src','img/graph5_Eritrea.svg');
    });
    //Pakistan
    $('.flexPakistan').click(function(){
        $('.btn-flexItem').removeClass('active');
        $(this).addClass('active');
        $('.graph05').attr('src','img/graph5_Pakistan.svg');
    });
    //Albania
    $('.flexAlbania').click(function(){
        $('.btn-flexItem').removeClass('active');
        $(this).addClass('active');
        $('.graph05').attr('src','img/graph5_Albania.svg');
    });
    //Kosovo
    $('.flexKosovo').click(function(){
        $('.btn-flexItem').removeClass('active');
        $(this).addClass('active');
        $('.graph05').attr('src','img/graph5_Kosovo.svg');
    });
    //Iraq
    $('.flexIraq').click(function(){
        $('.btn-flexItem').removeClass('active');
        $(this).addClass('active');
        $('.graph05').attr('src','img/graph5_Iraq.svg');
    });
    
    
    //Graph 06
    $('.graph06-btn').hover(function(){
        $('.graph06-box').hide();
        $(this).prev().show();
    },
                                   function(){
        $('.graph06-box').hide();
    });
    
    
    //Graph 07
    $('.graph07-btn').hover(function(){
        $('.graph07-box').hide();
        $(this).prev().show();
    },
                                   function(){
        $('.graph07-box').hide();
    });
    
    
    //Graph 08
    $('.graph08-btn').hover(function(){
        $('.graph08-box').hide();
        $(this).prev().show();
    },
                                   function(){
        $('.graph08-box').hide();
    });
       
});
