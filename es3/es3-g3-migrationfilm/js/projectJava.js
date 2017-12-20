// JavaScript Document<script>
$(document).ready(function(){
 	var allow=false;

    $('#fullpage').fullpage({
            anchors: ['page1', 'page2', 'page3', 'page4','page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12', 'page13', 'page14'],
            scrollingSpeed: 1000,
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
 
    $(document).on('click', '#moveDown', function(){
        $.fn.fullpage.moveSectionDown();
    });
	
	$('.presetSelected').click(function(){
            $('.genderSelector').css('opacity', '0.2'),
            $('.ageSelector').css('opacity', '0.2'),
            $('.skinSelector').css('opacity', '0.2'),
			$('#sex').prop('disabled', 'disabled'),
			$('#age').prop('disabled', 'disabled'),
			$('#skin').prop('disabled', 'disabled'),
			$('#buttonVariable').fadeOut(0);
			$('#buttonVariable2').fadeIn(0);
            $('.alertDisplayPreset').show();
	})
	$('.noPresetSelected').click(function(){
            $('.genderSelector').css('opacity', '1'),
            $('.ageSelector').css('opacity', '1'),
            $('.skinSelector').css('opacity', '1'),
			$('#sex').prop('disabled', false),
			$('#age').prop('disabled', false),
			$('#skin').prop('disabled', false);
            $('#buttonVariable').fadeIn(0);
			$('#buttonVariable2').fadeOut(0);
            $('.alertDisplayPreset').hide();
	})

	 $(".plusInfo").click(function(){
            $("#why1").fadeOut();
            $("#why2").fadeIn();
    });
    $(".closeWhy2").click(function(){
            $("#why1").fadeIn();
            $("#why2").fadeOut();
    });
   
    
	
});
$(document).on('click', '.continue', function(){
	var addName = $('input[name=imputNameSpace]').val();
	$('#baseText').remove();
	
	var sexFilm = $("#sex").val();
	var ageFilm = $("#age").val();
    var skinFilm = $("#skin").val();
	var insieme3sopra = sexFilm + ageFilm + skinFilm;
	var workFilm = $('#work'+insieme3sopra).val();
	var totalGivenSexAndAgeAndSkinAndWork = characters.filter(function(films){
	       return films.Sex == sexFilm && films.Age == ageFilm && films['Skin color'] == skinFilm && films.KindJob == workFilm; 
		}).length
	
	$('#comparisonIntro').html('<p>Now let’s see how someone like '+ addName +'<br/> is presented in our movies and how reviewers <br/>speak about each movie.</p>');
	$('#confrontMoviesDescp').html('A character like: <hl>'+ addName +'</hl><br/>is presented in <hl>'+totalGivenSexAndAgeAndSkinAndWork+'</hl> movies');
	
	
	
});

$('#presetsSelector').change(function(){
    changePreset();
    $('#person').css('background-image', 'none');
    $('#person2').css('background-image', 'none');
    
});

$(document).on('click', '#buttonVariable', function(){
   
	var selectedSex = document.getElementById('sex').value;
	var selectedAge = document.getElementById('age').value;
	var selectedSkin = document.getElementById('skin').value;
	
	var insieme3sopra = selectedSex + selectedAge + selectedSkin;
	console.log(insieme3sopra);   
         
    //$(this).addClass('next1' + insieme3sopra);
	$('.generalAspects').fadeOut(0);
		$('.aesthetic'+insieme3sopra).fadeIn(0);
	go();
	
    $('.stepIndex1').addClass('stepOff');
	$('.stepIndex2').removeClass('stepOff');
	$('.stepIndex3').addClass('stepOff');
    $('#person').css('background-image', 'none');
    $('#person2').css('background-image', 'none');
});

$(document).on('click', '.next2', function(){
   
	var selectedSex = document.getElementById('sex').value;
	var selectedAge = document.getElementById('age').value;
	var selectedSkin = document.getElementById('skin').value;
	
	var insieme3sopra = selectedSex + selectedAge + selectedSkin;
	console.log(insieme3sopra);   
         
    //$(this).addClass('next1' + insieme3sopra);
	$('.aesthetics').fadeOut(0);
		$('.life'+insieme3sopra).fadeIn(0);
	
	$('.stepIndex1').addClass('stepOff');
	$('.stepIndex2').addClass('stepOff');
	$('.stepIndex3').removeClass('stepOff');
});



$(document).on('click', '#buttonBack2', function(){
    var selectedSex = document.getElementById('sex').value;
	var selectedAge = document.getElementById('age').value;
	var selectedSkin = document.getElementById('skin').value;
	
	var insieme3sopra = selectedSex + selectedAge + selectedSkin;
	console.log(insieme3sopra);   
         
    //$(this).addClass('next1' + insieme3sopra);
	$('.lifeAspects').fadeOut(0);
		$('.aesthetic'+insieme3sopra).fadeIn(0);
    
    $('.stepIndex1').addClass('stepOff');
	$('.stepIndex2').removeClass('stepOff');
	$('.stepIndex3').addClass('stepOff');
});

$(document).on('click', '.prevTo3', function(){
    var selectedSex = document.getElementById('sex').value;
	var selectedAge = document.getElementById('age').value;
	var selectedSkin = document.getElementById('skin').value;
	
	var insieme3sopra = selectedSex + selectedAge + selectedSkin;
	console.log(insieme3sopra);   
         
    //$(this).addClass('next1' + insieme3sopra);
	$('#generatorSubSectionStats').fadeOut(0);
    $('#generatorSubSection').fadeIn(0);
    
    $('.stepIndex1').addClass('stepOff');
	$('.stepIndex2').addClass('stepOff');
	$('.stepIndex3').removeClass('stepOff');
});

$('.next3').click(function(){
    filmFilter();
    $('iframe').width('705px');
    $('iframe').height('370px');
    $('iframe').css('border', 'none');
    $('iframe').css('overflow-y', 'auto');
});

$('.prevToGeneralAspects').click(function(){
    $('.aesthetics').fadeOut(0);
    $('.generalAspects').fadeIn(0);
    
    $('.stepIndex1').removeClass('stepOff');
	$('.stepIndex2').addClass('stepOff');
	$('.stepIndex3').addClass('stepOff');
});

