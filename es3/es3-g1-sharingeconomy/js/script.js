$(document).ready(function () {

//    HOME QUESTION ANIMATION
    $("#noAnswer").click(function(){
        $("#questionBox").fadeOut();
        $(".hidden").fadeIn(1000);
    })
    
    //SET HEIGHT CLASSES FOR THE SECTIONS

    var WindowHeight = $(window).height();
    var WindowHalfHeight = ($(window).height())/2;
    
    function setHeight() {

        
        $(".fullHeight").css("height", WindowHeight);
//        $(".fullHeight").css("height", WindowHeight);

        var WindowHalfHeight = ($(window).height() / 2);
        $(".halfHeight").css("height", WindowHalfHeight);

        var WindowtwoThirdHeight = ($(window).height() / 3) * 2;
        $(".twoThirdHeight").css("height", WindowtwoThirdHeight);

        var WindowThreefourthHeight = ($(window).height() / 4) * 3;
        $(".WindowThreefourthHeight").css("height", WindowThreefourthHeight);

        var WindowFiveSixthsHeight = ($(window).height() / 6) * 5;
        $(".WindowFiveSixthsHeight").css("height", WindowFiveSixthsHeight);

    }

    setHeight();

    //SCROLLMAGIC

//    $(function () { // wait for document ready
        // init
//        var sliderController = new ScrollMagic.Controller({
//            globalSceneOptions: {
//                triggerHook: 'onLeave'
//            }
//        });
//
//        // get all slides
//        var slides = document.querySelectorAll(".slideUp");
//
//        // create scene for every slide
//        for (var i = 0; i < slides.length; i++) {
//            new ScrollMagic.Scene({
//                    triggerElement: slides[i]
//                })
//                .setPin(slides[i])
//                .addIndicators() // add indicators (requires plugin)
//                .addTo(sliderController);
//        }
    
        
//        var bgColorController = new ScrollMagic.Controller();
//    
//        
////        var changeBgColor = TweenMax.to("body", 0.5, {backgroundColor: "#455770"});
//        var appear = TweenMax.to(".appear", 0.5, {opacity: "0.99"});
//        var appearLater = TweenMax.to(".appearLater", 0.5, {opacity: "0.99"});
//        var disappear = TweenMax.to(".disappear", 0.5, {opacity: "0"});
////        var scale_tween = TweenMax.to("#third", 1, { transform: 'scale(.75)', ease: Linear.easeNone });
//
//			// exitLeft
////        var scene1 = new ScrollMagic.Scene({triggerElement: "#slide4", duration: 200, offset: 0})
////							.setTween(changeBgColor)
//////							.addIndicators({name: "changeColor"}) // add indicators (requires plugin)
////							.addTo(bgColorController);    
//        
//        var scene2 = new ScrollMagic.Scene({triggerElement: "#slide4", duration: 200, offset: -150})
//                            .setTween(disappear)
////							.addIndicators({name: "disappear"}) // add indicators (requires plugin)
//							.addTo(bgColorController);    
//        
////        var scene = new ScrollMagic.Scene({triggerElement: "#slide4", duration: 200, offset: 0})
////                            .setTween(appear)
//////							.addIndicators({name: "appear"}) // add indicators (requires plugin)
////							.addTo(bgColorController);  
//        
//        var scene3 = new ScrollMagic.Scene({triggerElement: "#slide4", duration: 200, offset: 0})
//                            .setTween(appearLater)
////							.addIndicators({name: "appear"}) // add indicators (requires plugin)
//							.addTo(bgColorController); 
//            
//        
//        var scene4 = new ScrollMagic.Scene({triggerElement: "#slide4", duration: 440, offset: -200})
//					.setTween(".parallax", {y: "-30%", ease: Linear.easeNone})
//					.addIndicators()
//					.addTo(bgColorController);
//        
//        
//    });

    
    
    //SMOOTH SCROLL

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    
    
     //PLAYVIDEO ON HOVER
    
    $(".playOnHover").hover(
    function() {
        $(this).children(".video1").get(0).play();
         $(this).children(".video2").get(0).play();    
    }, function() {
       $(this).children(".video1").get(0).pause();
        $(this).children(".video1").get(0).currentTime = 0;
         $(this).children(".video2").get(0).pause();
        $(this).children(".video2").get(0).currentTime = 0;
    });
    
    
});

 // TOOL SCRIPT

    

    // LOAD DATABASE
   
    $.ajax({
        type: 'GET',
        url: 'database.json',
        dataType: 'json',
        success: jsonParser
    });

     



    function jsonParser(json) {
    
        $.getJSON('database.json', function (data) {
            $.each(data.rows, function (k, v) {
                var name = v.name;
                var nameNOSPACE = "";
                var description = v.description;
                var website = v.Website;
                var canVerb = v.verbo;
                var canVerbNOSPACE = ""
                var canComplement = v.complemento_can;
                var canComplementNOSPACE = "";
                var need = "";
                var needVerb = v.verbo2;
                var needVerbNOSPACE = "";
                var needComplement = v.complememto_need;
                var needComplementNOSPACE = "";
                var can = "";
                
                if( v.can == "true") {
                    can = "can"
                }
                
                if( v.need == "true") {
                    need = "need"
                }
                
                if( canVerb != null) {
                    canVerbNOSPACE = canVerb.replace(/\s+/g, '');
                }
                
                if( canComplement != null) {
                    canComplementNOSPACE = canComplement.replace(/\s+/g, '');
                }
                
                if( needVerb != null) {
                    needVerbNOSPACE = needVerb.replace(/\s+/g, '');
                }
                
                if( needComplement != null) {
                    needComplementNOSPACE = needComplement.replace(/\s+/g, '');
                }
                
                if(name != null) {
                    nameNOSPACE = name.replace(/\s+/g, '');
                }
                
                
                if( v.can == "true") {
//                    console.log($("#verb ." + needVerbNOSPACE).length);
//                    console.log($("#complement ." + needComplementNOSPACE).length);
                    
                    var canButton = '<button id="canButton" class="can buttonHidden filter" data-filter=".can">i can</button>';
                    if ($("#needCan ." + can).length == 0){
                        
                        $("#needCan").append(canButton)
                    }
                    
                    if( $("#verb ." + canVerbNOSPACE).length == 0) {
                        $("#verb").append(' <button class="buttonHidden filter canVerb ' + canVerbNOSPACE +'" data-filter=".' + canVerbNOSPACE + '">' + canVerb + '</button>')
                    };
                    if( $("#complement ." + canComplementNOSPACE).length == 0) {
                        $("#complement").append(' <button class="buttonHidden  filter '+ canComplementNOSPACE + ' ' + canVerbNOSPACE +'" data-filter=".' + canComplementNOSPACE + '">' + canComplement + '</button>')
                    };
                }
                
                if( v.need == "true") { 
                    
                    var needButton = '<button id="needButton" class="need buttonHidden filter" data-filter=".need">i need to</button>';
                    
                    if ($("#needCan ." + need).length == 0){
                        
                        $("#needCan").append(needButton)
                    }
                    
//                  console.log( canComplementNOSPACE);
//                  console.log($("." + canComplementNOSPACE).length);
                    if( $("#verb ." + needVerbNOSPACE).length == 0) {$("#verb").append(' <button class="buttonHidden filter needVerb ' + needVerbNOSPACE +'" data-filter=".' + needVerbNOSPACE + '">' + needVerb + '</button>')};
                    if( $("#complement ." + needComplementNOSPACE).length == 0) {$("#complement").append(' <button class="buttonHidden  filter '+ needComplementNOSPACE + ' ' + needVerbNOSPACE +'" data-filter=".' + needComplementNOSPACE + '">' + needComplement + '</button>')};
                }
                
//                
                // If you want to REMOVE SPACE in the variables use  replace(/\s+/g, '') but down here and not up here, otherwise the function will be blocked.
                
                if( name != null) {
                
                    var classString ='companyWebsite mix '+ can + ' ' + canVerbNOSPACE + ' ' + canComplementNOSPACE + ' ' + need + ' ' + needVerbNOSPACE + ' ' + needComplementNOSPACE;
                    
                    $('#grid').append('<a class="' + classString +'" href="'+ website +'" target="_blank"> <div class="companyBox"> <img class="companyLogo" src="images/logos/'+ nameNOSPACE +'.jpg"/> <h5 class="companyName">'+ name +'</h5> <p class="companyDescription">'+ description +'</p> </div> </a>');
                
                }
                
                
            }); 
                
                
                
            });

// POPUP BUTTON
        
        $(".closeButton").click(function(){
            $(this).parent().fadeOut();
            $("#popUp").fadeOut();
        })
        
        $("#showPopUp-1").click(function(){
            $("#popUp").css("display", "flex");
            $("#popUp-1").fadeIn();
        })
        
        $("#slide9Button").click(function(){
            $("#popUp").css("display", "flex");
            $("#popUp-2").fadeIn();
        })
        
        $("#slide10Button").click(function(){
            $("#popUp").css("display", "flex");
            $("#popUp-3").fadeIn();
        })
        
        $("#slide12Button").click(function(){
            $("#popUp").css("display", "flex");
            $("#popUp-4").fadeIn();
        })
        
        
    }




//$(window).load
$(document).ready(function(){
    
      // function to controll the filter system
    
function filterControll (){
    
    $("#needButton").click(function(){
        $(".canVerb").addClass("notPertinent");
        $(".needVerb").removeClass("notPertinent");
        $("footer").fadeOut();
    })

    $("#canButton").click(function(){
        $(".canVerb").removeClass("notPertinent");
        $(".needVerb").addClass("notPertinent");
        $("footer").fadeOut();
    })

    $("fieldset").click(function(){
       $(this).children("button").toggleClass("buttonHidden");        
    });

    $("fieldset").children("button").click(function(){
        var newLabel = $(this).text();        
        $(this).parent().find("h2").text(newLabel);
    });

    $("#needCan").click(function(){
        $("#verb").children("button").removeClass("active");
        $("#complement").children("button").removeClass("active");
        $("#verb").children("h2").html('choose a verb  <i class="fa fa-angle-down"></i>');
        $("#complement").children("h2").html('choose what to do  <i class="fa fa-angle-down"></i>');
        $("#complement").addClass("locked");
    })

    $("#needCan").children("button").click(function(){
        $("#verb").removeClass("locked");
    })

    $("#verb").click(function(){
        $("#complement").children("button").removeClass("active");
        $("#complement").children("h2").html('choose what to do  <i class="fa fa-angle-down"></i>');
    })


    $("#verb").children("button").click(function(){
        $("#complement").removeClass("locked");

        $("#complement").children("button").addClass("notPertinent");

        var relatedVerbs = $(this).data("filter");
        $("#complement").find(relatedVerbs).removeClass("notPertinent");

    })
}

    setTimeout(filterControll, 2000); 

    

//-------------------------------------------------------------------------------------------------------------
//                          complex filtering mixit u code
//-------------------------------------------------------------------------------------------------------------

 var buttonFilter = {
  
  // Declare any variables we will need as properties of the object
  
  $filters: null,
  $reset: null,
  groups: [],
  outputArray: [],
  outputString: '',
  
  // The "init" method will run on document ready and cache any jQuery objects we will need.
  
  init: function(){
    var self = this; // As a best practice, in each method we will asign "this" to the variable "self" so that it remains scope-agnostic. We will use it to refer to the parent "buttonFilter" object so that we can share methods and properties between all parts of the object.
    
    self.$filters = $('#filters');
    self.$reset = $('#Reset');
    self.$container = $('#grid');
    
    self.$filters.find('fieldset').each(function(){
      self.groups.push({
        $buttons: $(this).find('.filter'),
        active: ''
      });
    });
    
    self.bindHandlers();
  },
  
  // The "bindHandlers" method will listen for whenever a button is clicked. 
  
  bindHandlers: function(){
    var self = this;
    
    // Handle filter clicks
    
    self.$filters.on('click', '.filter', function(e){
      e.preventDefault();
      
      var $button = $(this);
      
      // If the button is active, remove the active class, else make active and deactivate others.
      
      $button.hasClass('active') ?
        $button.removeClass('active') :
        $button.addClass('active').siblings('.filter').removeClass('active');
      
      self.parseFilters();
    });
    
    // Handle reset click
    
    self.$reset.on('click', function(e){
      e.preventDefault();
      
      self.$filters.find('.filter').removeClass('active');
      
      self.parseFilters();
    });
  },
  
  // The parseFilters method checks which filters are active in each group:
  
  parseFilters: function(){
    var self = this;
 
    // loop through each filter group and grap the active filter from each one.
    
    for(var i = 0, group; group = self.groups[i]; i++){
      group.active = group.$buttons.filter('.active').attr('data-filter') || '';
    }
    
    self.concatenate();
  },
  
  // The "concatenate" method will crawl through each group, concatenating filters as desired:
  
  concatenate: function(){
    var self = this;
    
    self.outputString = ''; // Reset output string
    
    for(var i = 0, group; group = self.groups[i]; i++){
      self.outputString += group.active;
    }
    
    // If the output string is empty, show all rather than none:
    
    !self.outputString.length && (self.outputString = 'all');
    
    console.log(self.outputString); 
    
    // ^ we can check the console here to take a look at the filter string that is produced
    
    // Send the output string to MixItUp via the 'filter' method:
    
	  if(self.$container.mixItUp('isLoaded')){
        self.$container.mixItUp('filter', self.outputString);
        console.log( self.$container.mixItUp('filter', self.outputString) );   
	  }
  }
};


            // On document ready, initialise our code.
    



                 
function createGrid (){
    
    $(function(){
      
      // Initialize buttonFilter code

      buttonFilter.init();

      // Instantiate MixItUp

      $('#grid').mixItUp({
        controls: {
          enable: false // we won't be needing these
        },
        load: {
            filter: 'none'
        },
        callbacks: {
          onMixFail: function(){
            alert('No items were found matching the selected filters.');
          }
        }
      });    
    });
     
    
}
                
setTimeout(createGrid, 1700);
             
                
            

    
});