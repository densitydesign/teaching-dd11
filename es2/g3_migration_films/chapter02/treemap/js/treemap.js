$(document).ready(function(){
	$(".treeMapSec").click(function(){
		d3.selectAll("#security_forces")
  			.classed("offLight", function (d, i) {
			return !d3.select(this).classed("offLight");
  		});
	});
	$(".treeMapVio").click(function(){
		d3.selectAll("#violence")
  			.classed("offLight", function (d, i) {
			return !d3.select(this).classed("offLight");
  		});
	});
	$(".treeMapSex").click(function(){
		d3.selectAll("#sex")
  			.classed("offLight", function (d, i) {
			return !d3.select(this).classed("offLight");
  		});
	});
	$(".treeMapCul").click(function(){
		d3.selectAll("#cultural_difference")
  			.classed("offLight", function (d, i) {
			return !d3.select(this).classed("offLight");
  		});
	});
	$(".treeMapCri").click(function(){
		d3.selectAll("#criminality")
  			.classed("offLight", function (d, i) {
			return !d3.select(this).classed("offLight");
  		});
	});
	$(".treeMapFam").click(function(){
		d3.selectAll("#family")
  			.classed("offLight", function (d, i) {
			return !d3.select(this).classed("offLight");
  		});
	});
	$(".treeMapImm").click(function(){
		d3.selectAll("#immigration")
  			.classed("offLight", function (d, i) {
			return !d3.select(this).classed("offLight");
  		});
	});
	$(".treeMapArt").click(function(){
		d3.selectAll("#arts")
  			.classed("offLight", function (d, i) {
			return !d3.select(this).classed("offLight");
  		});
	});
	$(".treeMapJob").click(function(){
		d3.selectAll("#job")
  			.classed("offLight", function (d, i) {
			return !d3.select(this).classed("offLight");
  		});
	});
	$(".treeMapAll").click(function(){
		d3.selectAll(".allCategories")
  			.classed("offLight", function (d, i) {
			return !d3.select(this).classed("offLight");
  		});
	});
});

