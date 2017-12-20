// JavaScript Document<script>
$(document).ready(function(){
 	var allow=false;
	
$('#fullpage').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4','page5', 'page6', 'page7', 'page8', 'page9', 'page10'],
 });

$('#fullpage').fullpage({
        onLeave: function(index, nextIndex, direction){
            //it won't scroll if the destination is the 8th section
            if(nextIndex == 8 && allow==false){
                return false;
            }
        }
        
  });

    
$(document).on('click', '.continue', function(){
  allow = true;
});
	
	
    $(".next1").click(function(){
        $(".generalAspects").fadeOut(0);
        $(".aestheticAspects").fadeIn(0);
        $(".lifeAspects").fadeOut(0);
        
        $(".stepIndex1").addClass('stepOff');
        $(".stepIndex2").removeClass('stepOff');
  });
    $(".next2").click(function(){
        $(".generalAspects").fadeOut(0);
        $(".aestheticAspects").fadeOut(0);
        $(".lifeAspects").fadeIn(0);
        
        $(".stepIndex2").addClass('stepOff');
        $(".stepIndex3").removeClass('stepOff');
  });
	
    $(".next3").click(function(){
            $("#generatorSubSection").fadeOut(0);
            $("#generatorSubSectionStats").fadeIn(0);
     });
    
    $(".stepIndex1").click(function(){
            $(".generalAspects").fadeIn(0);
            $(".aestheticAspects").fadeOut(0);
            $(".lifeAspects").fadeOut(0);
        
            $(".stepIndex1").removeClass('stepOff');
            $(".stepIndex2").addClass('stepOff');
            $(".stepIndex3").addClass('stepOff');
     });
    $(".stepIndex2").click(function(){
            $(".generalAspects").fadeOut(0);
            $(".aestheticAspects").fadeIn(0);
            $(".lifeAspects").fadeOut(0);
        
            $(".stepIndex1").addClass('stepOff');
            $(".stepIndex2").removeClass('stepOff');
            $(".stepIndex3").addClass('stepOff');
     });
    $(".stepIndex3").click(function(){
            $(".generalAspects").fadeOut(0);
            $(".aestheticAspects").fadeOut(0);
            $(".lifeAspects").fadeIn(0);
        
            $(".stepIndex1").addClass('stepOff');
            $(".stepIndex2").addClass('stepOff');
            $(".stepIndex3").removeClass('stepOff');
     });
});
	
	
/**	
	$('fullpage').fullpage({
	anchors: ['titles','titles2','titles3','titles4','introduction','introGenerator','generatorSection','whySection'],
  });	
afterSlideLoad: function(){
       var loadedSlide = $('generatorSection');
		
		$.fn.fullpage.setAllowScrolling(false, 'down');
		$.fn.fullpage.setKeyboardScrolling(false, 'down');
	}
	
	
$(document).on('click', '#turnOff', function(){
  $.fn.fullpage.setAllowScrolling(false);
});

$(document).on('click', '#turnOn', function(){
  $.fn.fullpage.setAllowScrolling(true);
});
**/