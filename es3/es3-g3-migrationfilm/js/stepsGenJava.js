$(document).on('click', '.blackSelected', function(){
    
      if (document.getElementById('sex').value == "Female") && (document.getElementById('age').value == "child") && (document.getElementById('skin').value == "Black") {
            $('.nextNull').fadeOut(0); 
      }    
         
         
});
    
$(document).ready(function(){    
    //make the proper next button appear
    $('.next1MaleChildAmerindian').click(function(){
        $('.aestheticMaleChildAmerindian').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1MaleChildBLack').click(function(){
        $('.aestheticMaleChildBLack').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1MaleChildMestizo').click(function(){
        $('.aestheticMaleChildMestizo').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1MaleChildWhite').click(function(){
        $('.aestheticMaleChildWhite').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    
    $('.next1MaleLess30Amerindian').click(function(){
        $('.aestheticLess30Amerindian').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1MaleLess30Black').click(function(){
        $('.aestheticMaleLess30BLack').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1MaleLess30Mestizo').click(function(){
        $('.aestheticMaleLess30Mestizo').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1MaleLess30White').click(function(){
        $('.aestheticMaleLess30White').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    
    $('.next1MaleMore30Amerindian').click(function(){
        $('.aestheticMore30Amerindian').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1MaleMore30Black').click(function(){
        $('.aestheticMaleMore30BLack').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1MaleMore30Mestizo').click(function(){
        $('.aestheticMaleMore30Mestizo').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1MaleMore30White').click(function(){
        $('.aestheticMaleMore30White').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    
    $('.next1MaleOldAmerindian').click(function(){
        $('.aestheticOldAmerindian').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1MaleOldBlack').click(function(){
        $('.aestheticMaleOldBLack').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1MaleOldMestizo').click(function(){
        $('.aestheticMaleOldMestizo').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1MaleOldWhite').click(function(){
        $('.aestheticMaleOldWhite').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    
    $('.next1FemaleOldAmerindian').click(function(){
        $('.aestheticFemaleChildAmerindian').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1FemaleOldBlack').click(function(){
        $('.aestheticFemaleChildBLack').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1FemaleOldMestizo').click(function(){
        $('.aestheticFemaleChildMestizo').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1FemaleOldWhite').click(function(){
        $('.aestheticFemaleChildWhite').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    
    $('.next1FemaleLess30Amerindian').click(function(){
        $('.aestheticFemaleLess30Amerindian').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1FemaleLess30Black').click(function(){
        $('.aestheticFemaleLess30BLack').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1FemaleLess30Mestizo').click(function(){
        $('.aestheticFemaleLess30Mestizo').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1FemaleLess30White').click(function(){
        $('.aestheticFemaleLess30White').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    
    $('.next1FemaleMore30Amerindian').click(function(){
        $('.aestheticMore30Amerindian').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1FemaleMore30Black').click(function(){
        $('.aestheticFemaleMore30BLack').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1FemaleMore30Mestizo').click(function(){
        $('.aestheticFemaleMore30Mestizo').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1FemaleMore30White').click(function(){
        $('.aestheticFemaleMore30White').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    
    $('.next1FemaleOldAmerindian').click(function(){
        $('.aestheticOldAmerindian').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1FemaleOldBlack').click(function(){
        $('.aestheticFemaleOldBLack').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1FemaleOldMestizo').click(function(){
        $('.aestheticFemaleOldMestizo').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    $('.next1FemaleOldWhite').click(function(){
        $('.aestheticFemaleOldWhite').fadeIn(0);
        $('.generalAspects').fadeOut(0);
    });
    
    
    
    
    $(".next1").click(function(){
        $(".generalAspects").fadeOut(0);
        $(".aestheticMaleMorer30Mestizo").fadeIn(0);
        $(".lifeAspects").fadeOut(0);
        
        $("#person").css('background-image', 'none');
  	});
    $(".next2").click(function(){
        $(".generalAspects").fadeOut(0);
        $(".aestheticMaleMorer30Mestizo").fadeOut(0);
        $(".lifeAspects").fadeIn(0);
  	});
	
    $(".next3").click(function(){
            $("#generatorSubSection").fadeOut(0);
            $("#generatorSubSectionStats").fadeIn(0);
     });
    
    
    $(".prevTo2").click(function(){
            $(".generalAspects").fadeOut(0);
            $(".aestheticMaleMorer30Mestizo").fadeIn(0);
            $(".lifeAspects").fadeOut(0);
        
            $(".stepIndex1").addClass('stepOff');
            $(".stepIndex2").removeClass('stepOff');
            $(".stepIndex3").addClass('stepOff');
    });
	$(".skipPreset").click(function(){
            $("#generatorSubSection").fadeOut(0);
            $("#generatorSubSectionStats").fadeIn(0);
     });
    
    
    
	
});