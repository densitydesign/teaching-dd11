$(document).ready(function() {
    // attivo il menu per la versione responsive
    jQuery("#nav ul").slicknav({
    });
    
     // attivo il filtraggio sul portfolio
    jQuery("#portfolio-wrapper").mixItUp();
    
});
/** CONTROLS DROPDOWN **/
$(".switchDropButton").click(function (){
		$(".switchDrop").fadeToggle();
		$(".switchArrow").toggleClass("upwards");
	
		$(".dialogNote1").fadeIn(0);
		$(".dialogNote2").fadeOut(0);
});
$(".switchDiagramButton").click(function(){
		$(".diagramDrop").fadeToggle();
		$(".switchArrow2").toggleClass("upwards");
		$(".switchTypeImgButton").fadeToggle();
		$(".switchEtnicButton").fadeToggle();
		$(".switchRelationalButton").fadeToggle();
		$(".switchKinesicButton").fadeToggle();
		$(".switchGenderButton").fadeToggle();
	
		$(".dialogNote1").fadeOut(0);
		$(".dialogNote2").fadeIn(0);
});
$(".switchTypeImgButton").click(function(){
		$(".typeImgDrop").fadeToggle();
		$(".switchArrow3").toggleClass("upwards");
		$(".switchDiagramButton").fadeToggle();
		$(".switchEtnicButton").fadeToggle();
		$(".switchRelationalButton").fadeToggle();
		$(".switchKinesicButton").fadeToggle();
		$(".switchGenderButton").fadeToggle();
	
		$(".dialogNote1").fadeOut(0);
		$(".dialogNote2").fadeIn(0);
});
$(".switchEtnicButton").click(function(){
		$(".etnicDrop").fadeToggle();
		$(".switchArrow4").toggleClass("upwards");
		$(".switchDiagramButton").fadeToggle();
		$(".switchTypeImgButton").fadeToggle();
		$(".switchRelationalButton").fadeToggle();
		$(".switchKinesicButton").fadeToggle();
		$(".switchGenderButton").fadeToggle();
	
		$(".dialogNote1").fadeOut(0);
		$(".dialogNote2").fadeIn(0);
});
$(".switchRelationalButton").click(function(){
		$(".relationPeopleDrop").fadeToggle();
		$(".switchArrow5").toggleClass("upwards");
		$(".switchDiagramButton").fadeToggle();
		$(".switchTypeImgButton").fadeToggle();
		$(".switchEtnicButton").fadeToggle();
		$(".switchKinesicButton").fadeToggle();
		$(".switchGenderButton").fadeToggle();
	
		$(".dialogNote1").fadeOut(0);
		$(".dialogNote2").fadeIn(0);
});
$(".switchKinesicButton").click(function(){
		$(".kinesicDrop").fadeToggle();
		$(".switchArrow6").toggleClass("upwards");
		$(".switchDiagramButton").fadeToggle();
		$(".switchTypeImgButton").fadeToggle();
		$(".switchEtnicButton").fadeToggle();
		$(".switchRelationalButton").fadeToggle();
		$(".switchGenderButton").fadeToggle();
	
		$(".dialogNote1").fadeOut(0);
		$(".dialogNote2").fadeIn(0);
});
$(".switchGenderButton").click(function(){
		$(".genderDrop").fadeToggle();
		$(".switchArrow7").toggleClass("upwards");
		$(".switchDiagramButton").fadeToggle();
		$(".switchTypeImgButton").fadeToggle();
		$(".switchEtnicButton").fadeToggle();
		$(".switchRelationalButton").fadeToggle();
		$(".switchKinesicButton").fadeToggle();
	
		$(".dialogNote1").fadeOut(0);
		$(".dialogNote2").fadeIn(0);
});

/** CONTROLS DROPDOWN END **/


/** SWITCH **/
$(".turnCover").click(function(){
		$(".coversPlain").fadeToggle(0);
		$(".turnCover").toggleClass("turnButtonActivo");
});
$(".turnLuminance").click(function(){
		$(".luminance").fadeToggle(0);
		$(".turnLuminance").toggleClass("turnButtonActivo");
		$(".statsCoversColors").fadeOut(0);
		$(".statsCoversLuminance").fadeToggle(0);
		$(".statsCovers").fadeOut(0);
		$(".statsDiagram").fadeOut(0);
		$(".statsTypeImg").fadeOut(0);
		$(".statsEtnic").fadeOut(0);
		$(".statsRelational").fadeOut(0);
		$(".statsKinesic").fadeOut(0);
		$(".statsGender").fadeOut(0);
});
$(".turnPallette").click(function(){
		$(".colors").fadeToggle(0);
		$(".turnPallette").toggleClass("turnButtonActivo");
		$(".statsCoversColors").fadeToggle(0);
		$(".statsCoversLuminance").fadeOut(0);
		$(".statsCovers").fadeOut(0);
		$(".statsDiagram").fadeOut(0);
		$(".statsTypeImg").fadeOut(0);
		$(".statsEtnic").fadeOut(0);
		$(".statsRelational").fadeOut(0);
		$(".statsKinesic").fadeOut(0);
		$(".statsGender").fadeOut(0);
});
$(".turnTrailer").click(function(){
		$(".trailers").fadeToggle(0);
		$(".turnTrailer").toggleClass("turnButtonActivo");
});
/** SWITCH END **/


/** DIAGRAM **/
$(".switchDiagramButton").click(function(){
		$(".photomontage").toggleClass("highlight");
		$(".photo").toggleClass("highlight");
		$(".mozaic").toggleClass("highlight");
	
		$(".statsCovers").fadeOut(0);
		$(".statsCoversColors").fadeOut(0);
		$(".statsCoversLuminance").fadeOut(0);
		$(".statsDiagram").fadeIn(0);
		$(".statsTypeImg").fadeOut(0);
		$(".statsEtnic").fadeOut(0);
		$(".statsRelational").fadeOut(0);
		$(".statsKinesic").fadeOut(0);
		$(".statsGender").fadeOut(0);
		  		
});

$(".turnPhotomontage").click(function(){
		$(".turnPhotomontage").toggleClass("turnButtonActivo");
		$(".photomontage").toggleClass("highlight");
});

$(".turnPhotomontage").click(function(){
		d3.selectAll("#photomontageBar")
		console.error()
  			.classed("highlightStats", function (d, i) {
			return !d3.select(this).classed("highlightStats");
  	});
});

$(".turnMozaic").click(function(){
		$(".turnMozaic").toggleClass("turnButtonActivo");
		$(".mozaic").toggleClass("highlight");
});
$(".turnPhoto").click(function(){
		$(".turnPhoto").toggleClass("turnButtonActivo");
		$(".photo").toggleClass("highlight");
});

/** DIAGRAM END **/

/** TYPE OF IMAGE **/
$(".switchTypeImgButton").click(function(){
		$(".photography").toggleClass("highlight");
		$(".illustration").toggleClass("highlight");
		$(".combinedTypeImg").toggleClass("highlight");
	
		$(".statsCovers").fadeOut(0);
		$(".statsCoversColors").fadeOut(0);
		$(".statsCoversLuminance").fadeOut(0);
		$(".statsDiagram").fadeOut(0);
		$(".statsTypeImg").fadeIn(0);
		$(".statsEtnic").fadeOut(0);
		$(".statsRelational").fadeOut(0);
		$(".statsKinesic").fadeOut(0);
		$(".statsGender").fadeOut(0);
});
$(".turnPhotography").click(function(){
		$(".turnPhotography").toggleClass("turnButtonActivo");
		$(".photography").toggleClass("highlight");
});
$(".turnIllustration").click(function(){
		$(".turnIllustration").toggleClass("turnButtonActivo");
		$(".illustration").toggleClass("highlight");
});
$(".turnCombinedTypeImg").click(function(){
		$(".turnCombinedTypeImg").toggleClass("turnButtonActivo");
		$(".combinedTypeImg").toggleClass("highlight");
});
/** TYPE OF IMAGE END **/


/** ETNIC **/
$(".switchEtnicButton").click(function(){
		$(".yes").toggleClass("highlight");
		$(".no").toggleClass("highlight");
	
		$(".statsCovers").fadeOut(0);
		$(".statsCoversColors").fadeOut(0);
		$(".statsCoversLuminance").fadeOut(0);
		$(".statsDiagram").fadeOut(0);
		$(".statsTypeImg").fadeOut(0);
		$(".statsEtnic").fadeIn(0);
		$(".statsRelational").fadeOut(0);
		$(".statsKinesic").fadeOut(0);
		$(".statsGender").fadeOut(0);
});
$(".turnEtnicYes").click(function(){
		$(".turnEtnicYes").toggleClass("turnButtonActivo");
		$(".yes").toggleClass("highlight");
		$("statYes").toggleClass("highlightStats");
	
});
$(".turnEtnicNo").click(function(){
		$(".turnEtnicNo").toggleClass("turnButtonActivo");
		$(".no").toggleClass("highlight");
		$(".statNo").toggleClass("highlightStats");
});
/** ETNIC END **/


/** RELATIONAL **/
$(".switchRelationalButton").click(function(){
		$(".people").toggleClass("highlight");
		$(".place").toggleClass("highlight");
		$(".peopleandplace").toggleClass("highlight");
	
		$(".statsCovers").fadeOut(0);
		$(".statsCoversColors").fadeOut(0);
		$(".statsCoversLuminance").fadeOut(0);
		$(".statsDiagram").fadeOut(0);
		$(".statsTypeImg").fadeOut(0);
		$(".statsEtnic").fadeOut(0);
		$(".statsRelational").fadeIn(0);
		$(".statsKinesic").fadeOut(0);
		$(".statsGender").fadeOut(0);
});
$(".turnPeople").click(function(){
		$(".turnPeople").toggleClass("turnButtonActivo");
		$(".people").toggleClass("highlight");
});
$(".turnPlace").click(function(){
		$(".turnPlace").toggleClass("turnButtonActivo");
		$(".place").toggleClass("highlight");
});
$(".turnPeoplAndPlace").click(function(){
		$(".turnPeoplAndPlace").toggleClass("turnButtonActivo");
		$(".peopleandplace").toggleClass("highlight");
});
/** RELATIONAL END **/


/** KINESC **/
$(".switchKinesicButton").click(function(){
		$(".facing").toggleClass("highlight");
		$(".backwards").toggleClass("highlight");
		$(".profile").toggleClass("highlight");
		$(".combined").toggleClass("highlight");
		$(".nokinesic").toggleClass("highlight");
	
		$(".statsCovers").fadeOut(0);
		$(".statsCoversColors").fadeOut(0);
		$(".statsCoversLuminance").fadeOut(0);
		$(".statsDiagram").fadeOut(0);
		$(".statsTypeImg").fadeOut(0);
		$(".statsEtnic").fadeOut(0);
		$(".statsRelational").fadeOut(0);
		$(".statsKinesic").fadeIn(0);
		$(".statsGender").fadeOut(0);
});
$(".turnFacing").click(function(){
		$(".turnFacing").toggleClass("turnButtonActivo");
		$(".facing").toggleClass("highlight");
});
$(".turnBackwards").click(function(){
		$(".turnBackwards").toggleClass("turnButtonActivo");
		$(".backwards").toggleClass("highlight");
});
$(".turnProfile").click(function(){
		$(".turnProfile").toggleClass("turnButtonActivo");
		$(".profile").toggleClass("highlight");
});
$(".turnCombined").click(function(){
		$(".turnCombined").toggleClass("turnButtonActivo");
		$(".combined").toggleClass("highlight");
});
$(".turnNokinesic").click(function(){
		$(".turnNokinesic").toggleClass("turnButtonActivo");
		$(".nokinesic").toggleClass("highlight");
});
/** KINESIC END **/


/** GENDER **/
$(".switchGenderButton").click(function(){
		$(".female").toggleClass("highlight");
		$(".male").toggleClass("highlight");
		$(".both").toggleClass("highlight");
		$(".notSpecified").toggleClass("highlight");
	
		$(".statsCovers").fadeOut(0);
		$(".statsCoversColors").fadeOut(0);
		$(".statsCoversLuminance").fadeOut(0);
		$(".statsDiagram").fadeOut(0);
		$(".statsTypeImg").fadeOut(0);
		$(".statsEtnic").fadeOut(0);
		$(".statsRelational").fadeOut(0);
		$(".statsKinesic").fadeOut(0);
		$(".statsGender").fadeIn(0);
});
$(".turnMale").click(function(){
		$(".turnMale").toggleClass("turnButtonActivo");
		$(".male").toggleClass("highlight");
});
$(".turnFemale").click(function(){
		$(".turnFemale").toggleClass("turnButtonActivo");
		$(".female").toggleClass("highlight");
});
$(".turnBoth").click(function(){
		$(".turnBoth").toggleClass("turnButtonActivo");
		$(".both").toggleClass("highlight");
});
$(".turnNotSpecified").click(function(){
		$(".turnNotSpecified").toggleClass("turnButtonActivo");
		$(".notSpecified").toggleClass("highlight");
});
/** GENDER END **/


$(".resetFilters").click(function(){
		$(".mozaic").removeClass("highlight");
		$(".photomontage").removeClass("highlight");
		$(".photo").removeClass("highlight");
		$(".photography").removeClass("highlight");
		$(".illustration").removeClass("highlight");
		$(".combinedTypeImg").removeClass("highlight")
		
		$(".statsCovers").fadeIn(0);
		$(".statsCoversColors").fadeOut(0);
		$(".statsCoversLuminance").fadeOut(0);
		$(".statsDiagram").fadeOut(0);
		$(".statsTypeImg").fadeOut(0);
		$(".statsEtnic").fadeOut(0);
		$(".statsRelational").fadeOut(0);
		$(".statsKinesic").fadeOut(0);
		$(".statsGender").fadeOut(0);
});


/** MOVIE TITLE HOVER **/
$(".film1").hover(function(){
		$(".titleFilm1").toggleClass("hide");
});
$(".film2").hover(function(){
		$(".titleFilm2").toggleClass("hide");
});
$(".film3").hover(function(){
		$(".titleFilm3").toggleClass("hide");
});
$(".film4").hover(function(){
		$(".titleFilm4").toggleClass("hide");
});
$(".film5").hover(function(){
		$(".titleFilm5").toggleClass("hide");
});
$(".film6").hover(function(){
		$(".titleFilm6").toggleClass("hide");
});
$(".film7").hover(function(){
		$(".titleFilm7").toggleClass("hide");
});
$(".film8").hover(function(){
		$(".titleFilm8").toggleClass("hide");
});
$(".film9").hover(function(){
		$(".titleFilm9").toggleClass("hide");
});
$(".film10").hover(function(){
		$(".titleFilm10").toggleClass("hide");
});
$(".film11").hover(function(){
		$(".titleFilm11").toggleClass("hide");
});
$(".film12").hover(function(){
		$(".titleFilm12").toggleClass("hide");
});
$(".film13").hover(function(){
		$(".titleFilm13").toggleClass("hide");
});
$(".film14").hover(function(){
		$(".titleFilm14").toggleClass("hide");
});
$(".film15").hover(function(){
		$(".titleFilm15").toggleClass("hide");
});
$(".film16").hover(function(){
		$(".titleFilm16").toggleClass("hide");
});
$(".film17").hover(function(){
		$(".titleFilm17").toggleClass("hide");
});
$(".film18").hover(function(){
		$(".titleFilm18").toggleClass("hide");
});
$(".film19").hover(function(){
		$(".titleFilm19").toggleClass("hide");
});
$(".film20").hover(function(){
		$(".titleFilm20").toggleClass("hide");
});
$(".film21").hover(function(){
		$(".titleFilm21").toggleClass("hide");
});
$(".film22").hover(function(){
		$(".titleFilm22").toggleClass("hide");
});
$(".film23").hover(function(){
		$(".titleFilm23").toggleClass("hide");
});
$(".film24").hover(function(){
		$(".titleFilm24").toggleClass("hide");
});
$(".film25").hover(function(){
		$(".titleFilm25").toggleClass("hide");
});
$(".film26").hover(function(){
		$(".titleFilm26").toggleClass("hide");
});
$(".film27").hover(function(){
		$(".titleFilm27").toggleClass("hide");
});
$(".film28").hover(function(){
		$(".titleFilm28").toggleClass("hide");
});
$(".film29").hover(function(){
		$(".titleFilm29").toggleClass("hide");
});
$(".film30").hover(function(){
		$(".titleFilm30").toggleClass("hide");
});
$(".film31").hover(function(){
		$(".titleFilm31").toggleClass("hide");
});
$(".film32").hover(function(){
		$(".titleFilm32").toggleClass("hide");
});
$(".film33").hover(function(){
		$(".titleFilm33").toggleClass("hide");
});
$(".film34").hover(function(){
		$(".titleFilm34").toggleClass("hide");
});
$(".film35").hover(function(){
		$(".titleFilm35").toggleClass("hide");
});
$(".film36").hover(function(){
		$(".titleFilm36").toggleClass("hide");
});
$(".film37").hover(function(){
		$(".titleFilm37").toggleClass("hide");
});
$(".film38").hover(function(){
		$(".titleFilm38").toggleClass("hide");
});
$(".film39").hover(function(){
		$(".titleFilm39").toggleClass("hide");
});
$(".film40").hover(function(){
		$(".titleFilm40").toggleClass("hide");
});
$(".film41").hover(function(){
		$(".titleFilm41").toggleClass("hide");
});
$(".film42").hover(function(){
		$(".titleFilm42").toggleClass("hide");
});
$(".film43").hover(function(){
		$(".titleFilm43").toggleClass("hide");
});
$(".film44").hover(function(){
		$(".titleFilm44").toggleClass("hide");
});
$(".film45").hover(function(){
		$(".titleFilm45").toggleClass("hide");
});
$(".film46").hover(function(){
		$(".titleFilm46").toggleClass("hide");
});
$(".film47").hover(function(){
		$(".titleFilm47").toggleClass("hide");
});
$(".film48").hover(function(){
		$(".titleFilm48").toggleClass("hide");
});
$(".film49").hover(function(){
		$(".titleFilm49").toggleClass("hide");
});
$(".film50").hover(function(){
		$(".titleFilm50").toggleClass("hide");
});
$(".film51").hover(function(){
		$(".titleFilm51").toggleClass("hide");
});
$(".film52").hover(function(){
		$(".titleFilm52").toggleClass("hide");
});
$(".film53").hover(function(){
		$(".titleFilm53").toggleClass("hide");
});
$(".film54").hover(function(){
		$(".titleFilm54").toggleClass("hide");
});
$(".film55").hover(function(){
		$(".titleFilm55").toggleClass("hide");
});
$(".film56").hover(function(){
		$(".titleFilm56").toggleClass("hide");
});
$(".film57").hover(function(){
		$(".titleFilm57").toggleClass("hide");
});
$(".film58").hover(function(){
		$(".titleFilm58").toggleClass("hide");
});
$(".film59").hover(function(){
		$(".titleFilm59").toggleClass("hide");
});
$(".film60").hover(function(){
		$(".titleFilm60").toggleClass("hide");
});
$(".film61").hover(function(){
		$(".titleFilm61").toggleClass("hide");
});
$(".film62").hover(function(){
		$(".titleFilm62").toggleClass("hide");
});
$(".film63").hover(function(){
		$(".titleFilm63").toggleClass("hide");
});
$(".film64").hover(function(){
		$(".titleFilm64").toggleClass("hide");
});
$(".film65").hover(function(){
		$(".titleFilm65").toggleClass("hide");
});
$(".film66").hover(function(){
		$(".titleFilm66").toggleClass("hide");
});
$(".film67").hover(function(){
		$(".titleFilm67").toggleClass("hide");
});
$(".film68").hover(function(){
		$(".titleFilm68").toggleClass("hide");
});
$(".film69").hover(function(){
		$(".titleFilm69").toggleClass("hide");
});
$(".film70").hover(function(){
		$(".titleFilm70").toggleClass("hide");
});
$(".film71").hover(function(){
		$(".titleFilm71").toggleClass("hide");
});
$(".film72").hover(function(){
		$(".titleFilm72").toggleClass("hide");
});
$(".film73").hover(function(){
		$(".titleFilm73").toggleClass("hide");
});
$(".film74").hover(function(){
		$(".titleFilm74").toggleClass("hide");
});
$(".film75").hover(function(){
		$(".titleFilm75").toggleClass("hide");
});
$(".film76").hover(function(){
		$(".titleFilm76").toggleClass("hide");
});
$(".film77").hover(function(){
		$(".titleFilm77").toggleClass("hide");
});
$(".film78").hover(function(){
		$(".titleFilm78").toggleClass("hide");
});
$(".film79").hover(function(){
		$(".titleFilm79").toggleClass("hide");
});
$(".film80").hover(function(){
		$(".titleFilm80").toggleClass("hide");
});
$(".film81").hover(function(){
		$(".titleFilm81").toggleClass("hide");
});
$(".film82").hover(function(){
		$(".titleFilm82").toggleClass("hide");
});
$(".film83").hover(function(){
		$(".titleFilm83").toggleClass("hide");
});
$(".film84").hover(function(){
		$(".titleFilm84").toggleClass("hide");
});
$(".film85").hover(function(){
		$(".titleFilm85").toggleClass("hide");
});
$(".film86").hover(function(){
		$(".titleFilm86").toggleClass("hide");
});
$(".film87").hover(function(){
		$(".titleFilm87").toggleClass("hide");
});
$(".film88").hover(function(){
		$(".titleFilm88").toggleClass("hide");
});
$(".film89").hover(function(){
		$(".titleFilm89").toggleClass("hide");
});
$(".film90").hover(function(){
		$(".titleFilm90").toggleClass("hide");
});
$(".film91").hover(function(){
		$(".titleFilm91").toggleClass("hide");
});
$(".film92").hover(function(){
		$(".titleFilm92").toggleClass("hide");
});
$(".film93").hover(function(){
		$(".titleFilm93").toggleClass("hide");
});
$(".film94").hover(function(){
		$(".titleFilm94").toggleClass("hide");
});
$(".film95").hover(function(){
		$(".titleFilm95").toggleClass("hide");
});
$(".film96").hover(function(){
		$(".titleFilm96").toggleClass("hide");
});
$(".film97").hover(function(){
		$(".titleFilm97").toggleClass("hide");
});
$(".film98").hover(function(){
		$(".titleFilm98").toggleClass("hide");
});
$(".film99").hover(function(){
		$(".titleFilm99").toggleClass("hide");
});
$(".film100").hover(function(){
		$(".titleFilm100").toggleClass("hide");
});
$(".film101").hover(function(){
		$(".titleFilm101").toggleClass("hide");
});
$(".film102").hover(function(){
		$(".titleFilm102").toggleClass("hide");
});
$(".film103").hover(function(){
		$(".titleFilm103").toggleClass("hide");
});
$(".film104").hover(function(){
		$(".titleFilm104").toggleClass("hide");
});
$(".film105").hover(function(){
		$(".titleFilm105").toggleClass("hide");
});
$(".film106").hover(function(){
		$(".titleFilm106").toggleClass("hide");
});
$(".film107").hover(function(){
		$(".titleFilm107").toggleClass("hide");
});
$(".film108").hover(function(){
		$(".titleFilm108").toggleClass("hide");
});
$(".film109").hover(function(){
		$(".titleFilm109").toggleClass("hide");
});
$(".film110").hover(function(){
		$(".titleFilm110").toggleClass("hide");
});
$(".film111").hover(function(){
		$(".titleFilm111").toggleClass("hide");
});
$(".film112").hover(function(){
		$(".titleFilm112").toggleClass("hide");
});
$(".film113").hover(function(){
		$(".titleFilm113").toggleClass("hide");
});
$(".film114").hover(function(){
		$(".titleFilm114").toggleClass("hide");
});
$(".film115").hover(function(){
		$(".titleFilm115").toggleClass("hide");
});
$(".film116").hover(function(){
		$(".titleFilm116").toggleClass("hide");
});
$(".film117").hover(function(){
		$(".titleFilm117").toggleClass("hide");
});
$(".film118").hover(function(){
		$(".titleFilm118").toggleClass("hide");
});
$(".film119").hover(function(){
		$(".titleFilm119").toggleClass("hide");
});
$(".film120").hover(function(){
		$(".titleFilm120").toggleClass("hide");
});
$(".film121").hover(function(){
		$(".titleFilm121").toggleClass("hide");
});

/** STATISTICS **/


$(".action").click(function(){
		$("#action rect").toggleClass(".opacityBarFull");
});





