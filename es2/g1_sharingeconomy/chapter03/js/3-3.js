//$(document).ready(function() {
//$("#L_x5F_Bulgaria").click(function(){
//    $("#F_Bugaria").css("opacity", "1");
//});
//});

//d3.select("#L_x5F_Bulgaria").on("click", function () {
//    d3.select("#F_Bulgaria").style("display", "block")
//});
//
//function mouseon("#L_x5F_Bulgaria") {
//		d3.select("#F_Bulgaria").style("display","block");
//	}
//
//
//function scompariTor(){
//	$("#F_Bulgaria",svg_context("#1")).stop().hide();
//}
//
//function appariDW(){
//	$("#DW",svg_context("#1")).stop().show_grid(200);
//	$("#Tor",svg_context("#1")).stop().hide(200);
//	$("#BDW_1_",svg_context("#1")).stop().show_grid(200);
//	$("#BDWG",svg_context("#1")).stop().hide(200);
//	$("#BTor",svg_context("#1")).stop().hide(200);
//	$("#BTorG",svg_context("#1")).stop().show_grid(200);		
//	}
//	
//function appariTor(){
//	$("#DW",svg_context("#1")).stop().hide(200);
//	$("#Tor",svg_context("#1")).stop().show_grid(200);
//	$("#BTor",svg_context("#1")).stop().show_grid(200);
//	$("#BTorG",svg_context("#1")).stop().hide(200);
//	$("#BDW_1_",svg_context("#1")).stop().hide(200);
//	$("#BDWG",svg_context("#1")).stop().show_grid(200);	
//	}
//
//$(document).on("svg_ready", function(e) {
//	scompariTor();
//	$("#BTorG",svg_context("#1")).click(appariTor).css("cursor","pointer");
//	$("#BDWG",svg_context("#1")).click(appariDW).css("cursor","pointer");
//});

	
$(document).ready(function(){
    
//    France
	$("#L_x5F_France").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_France text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_Francia").classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
        });
	});
    
    $("#F_Francia").on("mouseenter", function() {
            d3.selectAll("#T_Francia").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_Francia").classed("show_grid", false)
    });
    
//    USA
    $("#L_x5F_Usa").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_Usa text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_USA")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_USA").on("mouseenter", function() {
            d3.selectAll("#T_USA").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_USA").classed("show_grid", false)
    });
    
//    UK
    $("#L_x5F_Uk").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_Uk text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_Uk")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_Uk").on("mouseenter", function() {
            d3.selectAll("#T_Uk").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_Uk").classed("show_grid", false)
    });
    
//    Thailand
    $("#L_x5F_Thailand").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_Thailand text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_Tailandia")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_Tailandia").on("mouseenter", function() {
            d3.selectAll("#T_Tailandia").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_Tailandia").classed("show_grid", false)
    });
    
//    Spain
    $("#L_x5F_Spain").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_Spain text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_Spain")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_Spain").on("mouseenter", function() {
            d3.selectAll("#T_Spain").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_Spain").classed("show_grid", false)
    });
    
//    Italy
    $("#L_x5F_Italy").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_Italy text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_Italia")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_Italia").on("mouseenter", function() {
            d3.selectAll("#T_Italia").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_Italia").classed("show_grid", false)
    });
    
//    Belgium
    $("#L_x5F_Belgium").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_Belgium text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_Belgio")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_Belgio").on("mouseenter", function() {
            d3.selectAll("#T_Belgio").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_Belgio").classed("show_grid", false)
    });
    
//    Taiwan
    $("#L_x5F_Taiwan").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_Taiwan text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_Taiwan")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_Taiwan").on("mouseenter", function() {
            d3.selectAll("#T_Taiwan").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_Taiwan").classed("show_grid", false)
    });
    
//    South Korea
    $("#L_x5F_Southkorea").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_Southkorea text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_South_Korea")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_South_Korea").on("mouseenter", function() {
            d3.selectAll("#T_South_Korea").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_South_Korea").classed("show_grid", false)
    });
    
//    Germany
    $("#L_x5F_Germany").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_Germany text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_Germania")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_Germania").on("mouseenter", function() {
            d3.selectAll("#T_Germania").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_Germania").classed("show_grid", false)
    });
    
//    South Africa
    $("#L_x5F_Southafrica").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_Southafrica text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_South_Africa")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_South_Africa").on("mouseenter", function() {
            d3.selectAll("#T_South_Africa").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_South_Africa").classed("show_grid", false)
    });
    
//    Romania
    $("#L_x5F_Romania").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_Romania text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_Romania")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_Romania").on("mouseenter", function() {
            d3.selectAll("#T_Romania").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_Romania").classed("show_grid", false)
    });
    
//    Poland
    $("#L_x5F_Poland").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_Poland text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_Poland").classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_Poland").on("mouseenter", function() {
            d3.selectAll("#T_Poland").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_Poland").classed("show_grid", false)
    });
    
//    Philipines
    $("#L_x5F_Philippines").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_Philippines text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_Filippine")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_Filippine").on("mouseenter", function() {
            d3.selectAll("#T_Filippine").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_Filippine").classed("show_grid", false)
    });
    
//    New Zealand
    $("#L_x5F_Newzealand").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_Newzealand text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_New_Zeland")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_New_Zeland").on("mouseenter", function() {
            d3.selectAll("#T_New_Zeland").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_New_Zeland").classed("show_grid", false)
    });
    
//    Netherlands
    $("#L_x5F_Netherlands").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_Netherlands text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_Netherlands")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_Netherlands").on("mouseenter", function() {
            d3.selectAll("#T_Netherlands").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_Netherlands").classed("show_grid", false)
    });
    
//    Malaysia
    $("#L_x5F_Malaysia").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_Malaysia text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_Malaysia")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_Malaysia").on("mouseenter", function() {
            d3.selectAll("#T_Malaysia").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_Malaysia").classed("show_grid", false)
    });
    
//    India
    $("#L_x5F_India").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_India text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_India")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_India").on("mouseenter", function() {
            d3.selectAll("#T_India").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_India").classed("show_grid", false)
    });
    
//    Hong Kong
    $("#L_x5F_HongKong").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_HongKong text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_Hong_Kong")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_Hong_Kong").on("mouseenter", function() {
            d3.selectAll("#T_Hong_Kong").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_Hong_Kong").classed("show_grid", false)
    });
    
//    Denmark
    $("#L_x5F_Denmark").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_Denmark text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_Danimarca")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_Danimarca").on("mouseenter", function() {
            d3.selectAll("#T_Danimarca").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_Danimarca").classed("show_grid", false)
    });
    
//    China
    $("#L_x5F_China").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_China text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_Cina")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_Cina").on("mouseenter", function() {
            d3.selectAll("#T_Cina").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_Cina").classed("show_grid", false)
    });
    
//    Canada
    $("#L_x5F_Canada").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_Canada text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_Canada")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_Canada").on("mouseenter", function() {
            d3.selectAll("#T_Canada").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_Canada").classed("show_grid", false)
    });
    
//    Australia
    $("#L_x5F_Australia").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_Australia text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_Australia")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_Australia").on("mouseenter", function() {
            d3.selectAll("#T_Australia").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_Australia").classed("show_grid", false)
    });
    
//    Brazil
    $("#L_x5F_Brazil").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_Brazil text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_Brazil")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_Brazil").on("mouseenter", function() {
            d3.selectAll("#T_Brazil").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_Brazil").classed("show_grid", false)
    });
    
//    Bulgaria
    $("#L_x5F_Bulgaria").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_Bulgaria text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_Bulgaria")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_Bulgaria").on("mouseenter", function() {
            d3.selectAll("#T_Bulgaria").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_Bulgaria").classed("show_grid", false)
    });
    
//    Croazia
    $("#L_x5F_Croazia").click(function(){
        d3.selectAll(".active_link").classed("active_link", false);
        d3.selectAll("#L_x5F_Croazia text").classed("active_link", true);
        d3.selectAll(".show_grid").classed("show_grid", false);
		d3.selectAll("#F_Croazia")
  			.classed("show_grid", function (d, i) {
			return !d3.select(this).classed("show_grid");
  		});
	});
    
    $("#F_Croazia").on("mouseenter", function() {
            d3.selectAll("#T_Croazia").classed("show_grid", true)
    }).on("mouseleave", function (d, i){
        d3.selectAll("#T_Croazia").classed("show_grid", false)
    });
    
    

});