var menu = 0;
var i = 1;
var NumOfLinks = 6;
var effect = true; 
var socialIcons = true; 
var effectSpeed = 75;
var quote = 0;
var hp = $(window).height();
var wp = $(window).width();
var back = false;


$(document).ready(function() {

    var showed = false;
    var path = document.querySelector('.path');
    var length = path.getTotalLength();
    var $dashOffset = length + 5;
    $('.path').css({'stroke-dasharray':length});
        
    $('#pelo').css({'stroke-dasharray':300});
    
    setTimeout( function() { $('div.mark p').fadeIn(); } , 1200 );
    setTimeout( function() { $('div.down').css('margin-top', '140px');$('div.down').css('opacity', '1'); } , 1200 );

    
    $('html').mousemove(function(e){
        
        var x = e.pageX;
        var y = e.pageY;
                
        
        if ($(window).scrollTop()>2000) { 
            
            if (x < (wp/3) || x > (wp - (wp/3)) || y > (4000 - 250) || y < (4000 - hp + 200) || menu == 1) {
            
                $('div.move').fadeOut();
            
            } else if (showed == false && all == 0) {
        
                $('div.move').fadeIn();
                
            }
        
        } else {
        
            $('div.move').fadeOut();
        
        }
  
        setTimeout( function() { $('div.move').css({'top': y - $(window).scrollTop() ,'left': x}) } , 120 );
        
    

        
   });
    
    var arrow = false;
    
   $(window).scroll(function() {
               
        
       
        if ($(window).scrollTop()>2) {

        
            $('.mark').fadeOut();
            $('.just-home').fadeOut();
        
        } else if (back == false){
        
            $('.mark').fadeIn();
        
        }
        
        if ($(window).scrollTop()>2900) {
            
           
        
                $('div.div-button').addClass('buttonOn');
                $('div.arrow').css('opacity','1');
            
            
                $('div.arrow-left').css('left','35px');
                $('div.arrow-right').css('right','35px');
            
            
            if (quote == 1) {
            
                showQuote();
            
            }
            
            
        } else {
        
            $('div.div-button').removeClass('buttonOn');
            $('div.arrow').css('opacity','0');
            $('div.arrow-left').css('left','15px');
            $('div.arrow-right').css('right','15px');
            
        
        }
        
        //calculate how far down the page the user is 
        var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);
        //convert dashoffset pixel value to interger
        var $newUnit = parseInt($dashOffset, 10);
        //get the value to be subtracted from the 'stroke-dashoffset'
        var $offsetUnit = $percentageComplete * ($newUnit / 100);
        //set the new value of the dashoffset to create the drawing effect
        $(".illustration svg g path").css("stroke-dashoffset", $newUnit - $offsetUnit);
    });

});
 

function showMenu() {
    
    if(menu == 0) {
        $('div.nav-menu').fadeIn();
        loopEffect();
        menu = 1;
    } else {
        $('div.nav-menu').fadeOut();
        $('.nav-menu .centered .row .col-md-12 ul li').fadeOut();
        i = 1;
        menu = 0;
    }

}

function loopEffect() {           
   
    setTimeout(function () {    
                  
      $('.nav-menu .centered .row .col-md-12 ul li:nth-child(' + i + ')').fadeIn();   
       
      i++;  
      
       if (i < NumOfLinks) {            
         loopEffect();             
      }
       
   }, effectSpeed);
        
}


function goToTop() {

    if ($(window).scrollTop() > 100) {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
    }
    
}

function goProject() {

    goToTop();

}

function goDraw(a,b) {
    
    back = true;

    goToTop();
    
     if (a == 0) {
        var lang = "en";
    } else {
        var lang = "es";
    }
    
    setTimeout( function() { 
    
        window.location.replace("http://drawabetter2016.com/" + lang + "/draw/" + b + "/");
    
    } , 1700 );

    
}


function showQuote(a) {
    
    if (a == 0) {
        var txt = "BACK";
        var frase = "QUOTE";
    } else {
        var txt = "ATRÁS";
        var frase = "FRASE";
    }

    if (quote == 0) {
    
        $('.illustration').fadeOut();
        $('.quote').css('opacity','1');
        $('.quote').css('margin-top','-50px');
        document.getElementById("move-div").innerHTML= '<a id="one-link" href="javascript:showQuote(' + a + ');">' + txt + '</a>';
        quote = 1;
    
    } else {
    
        $('.illustration').fadeIn();
        $('.quote').css('opacity','0');
        $('.quote').css('margin-top','-20px');
        document.getElementById("move-div").innerHTML= '<a id="one-link" href="javascript:showQuote(' + a + ');">' + frase + '</a>';
        quote = 0;
    
    }

}

var all = 0;
var p = 1;

function showAll() {
    
    if(all == 0) {
        $('div.nav-all').fadeIn();
        loopAll();
        all = 1;
    } else {
        $('div.nav-all').fadeOut();
        $('.nav-all .row div').css('opacity','0');
        p = 1;
        all = 0;
    }

}


function loopAll() {
    setTimeout(function () {    

      $('div.nav-all div.row div:nth-of-type(' + p + ')').css('opacity','1');   

      p++;  

       if (p < 31) {            
         loopAll();             
      }

   }, 50);
}

