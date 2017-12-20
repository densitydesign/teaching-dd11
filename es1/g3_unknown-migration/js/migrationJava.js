$(document).ready(function(){
	/**nav**/
	$(".homeIcon").click(function(){
		$("#navText1").addClass("hoverText");
	});
	
	/**stock**/
	$('.stockButton2010').click(function() {
    	$('#stock10').fadeToggle();
	});
	$('.stockButton2013').click(function() {
		$('#stock10').fadeOut();
	});
	
	
	
	
	/**cluster**/
	$('.immigration').click(function() {
    	$('#cluster1').fadeIn();
		$('#cluster2').fadeOut();
	});
	$('.emigration').click(function() {
		$('#cluster1').fadeOut();
    	$('#cluster2').fadeIn();
	});
	$(".immigration").click(function(){
		$(".immigration").removeClass("nonActive");
    	$(".immigration").addClass("active");
		$(".emigration").removeClass("active");
		$(".emigration").addClass("nonActive");
	});
	$(".emigration").click(function(){
		$(".emigration").removeClass("nonActive");
		$(".emigration").addClass("active");
		$(".immigration").removeClass("active");
    	$(".immigration").addClass("nonActive");
	});
	$(".clusterViola").hover(function(){
		$(".clusterDescpLUXFIN").toggle();
	});
	$(".clusterBlu").hover(function(){
		$(".clusterDescpIRELAND").toggle();
	});
	$(".clusterArancia").hover(function(){
		$(".clusterDescpFRACYP").toggle();
	});
	$(".clusterRosso").hover(function(){
		$(".clusterDescpHUNBUL").toggle();
	});
	$(".clusterBlu2").hover(function(){
		$(".clusterDescpROMANIA").toggle();
	});
	$(".clusterViola2").hover(function(){
		$(".clusterDescpPORHUN").toggle();
	});
	$(".clusterRosso2").hover(function(){
		$(".clusterDescpLUXSWE").toggle();
	});
	$(".clusterGiallo2").hover(function(){
		$(".clusterDescpITASPA").toggle();
	});
	$(".clusterGreen2").hover(function(){
		$(".clusterDescpIRELAND2").toggle();
	});
	
	/**motivations**/
	$(".proximityTab").click(function(){
		$('.proximityViz').fadeIn();
		$('.languageViz').fadeOut();
		$('.incomeViz').fadeOut();
		$('.gdpViz').fadeOut();
		$('.qualityViz').fadeOut();
		$('.labourViz').fadeOut();
		
		$('.proximityTab').removeClass("motivationsTabNonActive");
		$('.proximityTab').addClass("motivationsTabActive");
		
		$('.languageTab').removeClass("motivationsTabActive");
		$('.languageTab').addClass("motivationsTabNonActive");
		
		$('.incomeTab').removeClass("motivationsTabActive")
		$('.incomeTab').addClass("motivationsTabNonActive");
		
		$('.gdpTab').removeClass("motivationsTabActive");
		$('.gdpTab').addClass("motivationsTabNonActive");
		
		$('.qualityTab').removeClass("motivationsTabActive");
		$('.qualityTab').addClass("motivationsTabNonActive");
		
		$('.labourTab').removeClass("motivationsTabActive");
		$('.labourTab').addClass("motivationsTabNonActive");
	});
	$(".languageTab").click(function(){
		$('.proximityViz').fadeOut();
		$('.languageViz').fadeIn();
		$('.incomeViz').fadeOut();
		$('.gdpViz').fadeOut();
		$('.qualityViz').fadeOut();
		$('.labourViz').fadeOut();
		
		$('.languageTab').removeClass("motivationsTabNonActive");
		$('.languageTab').addClass("motivationsTabActive");
		
		$('.proximityTab').removeClass("motivationsTabActive");
		$('.proximityTab').addClass("motivationsTabNonActive");
		
		$('.incomeTab').removeClass("motivationsTabActive")
		$('.incomeTab').addClass("motivationsTabNonActive");
		
		$('.gdpTab').removeClass("motivationsTabActive");
		$('.gdpTab').addClass("motivationsTabNonActive");
		
		$('.qualityTab').removeClass("motivationsTabActive");
		$('.qualityTab').addClass("motivationsTabNonActive");
		
		$('.labourTab').removeClass("motivationsTabActive");
		$('.labourTab').addClass("motivationsTabNonActive");
	});
	$(".incomeTab").click(function(){
		$('.proximityViz').fadeOut();
		$('.languageViz').fadeOut();
		$('.incomeViz').fadeIn();
		$('.gdpViz').fadeOut();
		$('.qualityViz').fadeOut();
		$('.labourViz').fadeOut();
		
		$('.incomeTab').removeClass("motivationsTabNonActive");
		$('.incomeTab').addClass("motivationsTabActive");
		
		$('.languageTab').removeClass("motivationsTabActive");
		$('.languageTab').addClass("motivationsTabNonActive");
		
		$('.proximityTab').removeClass("motivationsTabActive")
		$('.proximityTab').addClass("motivationsTabNonActive");
		
		$('.gdpTab').removeClass("motivationsTabActive");
		$('.gdpTab').addClass("motivationsTabNonActive");
		
		$('.qualityTab').removeClass("motivationsTabActive");
		$('.qualityTab').addClass("motivationsTabNonActive");
		
		$('.labourTab').removeClass("motivationsTabActive");
		$('.labourTab').addClass("motivationsTabNonActive");
	});
	$(".gdpTab").click(function(){
		$('.proximityViz').fadeOut();
		$('.languageViz').fadeOut();
		$('.incomeViz').fadeOut();
		$('.gdpViz').fadeIn();
		$('.qualityViz').fadeOut();
		$('.labourViz').fadeOut();
		
		$('.gdpTab').removeClass("motivationsTabNonActive");
		$('.gdpTab').addClass("motivationsTabActive");
		
		$('.languageTab').removeClass("motivationsTabActive");
		$('.languageTab').addClass("motivationsTabNonActive");
		
		$('.proximityTab').removeClass("motivationsTabActive")
		$('.proximityTab').addClass("motivationsTabNonActive");
		
		$('.incomeTab').removeClass("motivationsTabActive");
		$('.incomeTab').addClass("motivationsTabNonActive");
		
		$('.qualityTab').removeClass("motivationsTabActive");
		$('.qualityTab').addClass("motivationsTabNonActive");
		
		$('.labourTab').removeClass("motivationsTabActive");
		$('.labourTab').addClass("motivationsTabNonActive");
	});
	$(".qualityTab").click(function(){
		$('.proximityViz').fadeOut();
		$('.languageViz').fadeOut();
		$('.incomeViz').fadeOut();
		$('.gdpViz').fadeOut();
		$('.qualityViz').fadeIn();
		$('.labourViz').fadeOut();
		
		$('.qualityTab').removeClass("motivationsTabNonActive");
		$('.qualityTab').addClass("motivationsTabActive");
		
		$('.languageTab').removeClass("motivationsTabActive");
		$('.languageTab').addClass("motivationsTabNonActive");
		
		$('.proximityTab').removeClass("motivationsTabActive")
		$('.proximityTab').addClass("motivationsTabNonActive");
		
		$('.incomeTab').removeClass("motivationsTabActive");
		$('.incomeTab').addClass("motivationsTabNonActive");
		
		$('.gdpTab').removeClass("motivationsTabActive");
		$('.gdpTab').addClass("motivationsTabNonActive");
		
		
		$('.labourTab').removeClass("motivationsTabActive");
		$('.labourTab').addClass("motivationsTabNonActive");
	});
	$(".labourTab").click(function(){
		$('.proximityViz').fadeOut();
		$('.languageViz').fadeOut();
		$('.incomeViz').fadeOut();
		$('.gdpViz').fadeOut();
		$('.qualityViz').fadeOut();
		$('.labourViz').fadeIn();
		
		$('.labourTab').removeClass("motivationsTabNonActive");
		$('.labourTab').addClass("motivationsTabActive");
		
		$('.languageTab').removeClass("motivationsTabActive");
		$('.languageTab').addClass("motivationsTabNonActive");
		
		$('.proximityTab').removeClass("motivationsTabActive")
		$('.proximityTab').addClass("motivationsTabNonActive");
		
		$('.incomeTab').removeClass("motivationsTabActive");
		$('.incomeTab').addClass("motivationsTabNonActive");
		
		$('.gdpTab').removeClass("motivationsTabActive");
		$('.gdpTab').addClass("motivationsTabNonActive");
		
		$('.qualityTab').removeClass("motivationsTabActive");
		$('.qualityTab').addClass("motivationsTabNonActive");
	});
});