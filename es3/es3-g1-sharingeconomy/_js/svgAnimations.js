//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::                                                                                                      ::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::                                                                                                      ::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::                                     Script di LorenzoPositano                                        ::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::                                                                                                      ::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// VIVUS FOR ARROWS

new Vivus('vivus_1', {
            type: 'scenario',
            animTimingFunction: Vivus.EASE_IN,
            duration: 100,
        });

new Vivus('vivus_2', {
            type: 'scenario',
            animTimingFunction: Vivus.EASE_IN,
            duration: 100,
        });

new Vivus('vivus_3', {
            type: 'scenario',
            animTimingFunction: Vivus.EASE_IN,
            duration: 100,
        });

new Vivus('vivus_4', {
            type: 'scenario',
            animTimingFunction: Vivus.EASE_IN,
            duration: 100,
        });


// TEXT ON-OFF SLIDE 3

$(document).ready(function() {
    console.log("...Intanto il js viene letto");
        $("#slide3Example1").on("mouseenter", function(){
        d3.select("#slide3Example1_text").transition(100).style("opacity", 1);
        }).on("mouseleave", function(){
        d3.select("#slide3Example1_text").transition(100).style("opacity", 0);
        });
    
    $("#slide3Example2").on("mouseenter", function(){
        d3.select("#slide3Example2_text").transition(100).style("opacity", 1);
        }).on("mouseleave", function(){
        d3.select("#slide3Example2_text").transition(100).style("opacity", 0);
        });
    
    $("#slide3Example3").on("mouseenter", function(){
        d3.select("#slide3Example3_text").transition(100).style("opacity", 1);
        }).on("mouseleave", function(){
        d3.select("#slide3Example3_text").transition(100).style("opacity", 0);
        });

 })

// PALLOZZI FUNDING

 $(document).ready(function() {
                console.log("...Intanto il js viene letto");
                
                // AIRBNB
                $(".airbnb_circle").on("mouseenter", function(){
                    d3.select("#Airbnb_x5F_ON").transition(200).style("opacity", 1);
                    d3.select(".airbnb_circle").select("circle").transition(200).style("fill", "#27E0AD");
                    d3.select(".airbnb_circle").select("text").transition(200).style("fill", "#455770");
                }).on("mouseleave", function(){
                    d3.select("#Airbnb_x5F_ON").transition(200).style("opacity", 0);
                    d3.select(".airbnb_circle").select("circle").transition(200).style("fill", "#063F84");
                    d3.select(".airbnb_circle").select("text").transition(200).style("fill", "#ffffff");
                })
                
                // GRABTAXI
                $(".grabtaxi_circle").on("mouseenter", function(){
                    d3.select("#GrabTaxi_x5F_ON").transition(200).style("opacity", 1);
                    d3.select(".grabtaxi_circle").select("circle").transition(200).style("fill", "#27E0AD");
                    d3.select(".grabtaxi_circle").select("text").transition(200).style("fill", "#455770");
                }).on("mouseleave", function(){
                    d3.select("#GrabTaxi_x5F_ON").transition(200).style("opacity", 0);
                    d3.select(".grabtaxi_circle").select("circle").transition(200).style("fill", "#063F84");
                    d3.select(".grabtaxi_circle").select("text").transition(200).style("fill", "#ffffff");
                })
                
                // PROSPER
                $(".prosper_circle").on("mouseenter", function(){
                    d3.select("#Prosper_x5F_ON").transition(200).style("opacity", 1);
                    d3.select(".prosper_circle").select("circle").transition(200).style("fill", "#27E0AD");
                    d3.select(".prosper_circle").select("text").transition(200).style("fill", "#455770");
                }).on("mouseleave", function(){
                    d3.select("#Prosper_x5F_ON").transition(200).style("opacity", 0);
                    d3.select(".prosper_circle").select("circle").transition(200).style("fill", "#063F84");
                    d3.select(".prosper_circle").select("text").transition(200).style("fill", "#ffffff");
                })
                
                
                // LYFT
                $(".lyft_circle").on("mouseenter", function(){
                    d3.select("#Lyft_x5F_ON").transition(200).style("opacity", 1);
                    d3.select(".lyft_circle").select("circle").transition(200).style("fill", "#27E0AD");
                    d3.select(".lyft_circle").select("text").transition(200).style("fill", "#455770");
                }).on("mouseleave", function(){
                    d3.select("#Lyft_x5F_ON").transition(200).style("opacity", 0);
                    d3.select(".lyft_circle").select("circle").transition(200).style("fill", "#063F84");
                    d3.select(".lyft_circle").select("text").transition(200).style("fill", "#ffffff");
                })
                
                
                
                // OLA
                $(".ola_circle").on("mouseenter", function(){
                    d3.select("#Ola_x5F_ON").transition(200).style("opacity", 1);
                    d3.select(".ola_circle").select("circle").transition(200).style("fill", "#27E0AD");
                    d3.select(".ola_circle").select("text").transition(200).style("fill", "#455770");
                }).on("mouseleave", function(){
                    d3.select("#Ola_x5F_ON").transition(200).style("opacity", 0);
                    d3.select(".ola_circle").select("circle").transition(200).style("fill", "#063F84");
                    d3.select(".ola_circle").select("text").transition(200).style("fill", "#ffffff");
                })
                
                
                
                // TUJIA
                $(".tujia_circle").on("mouseenter", function(){
                    d3.select("#Tujia_x5F_ON").transition(200).style("opacity", 1);
                    d3.select(".tujia_circle").select("circle").transition(200).style("fill", "#27E0AD");
                    d3.select(".tujia_circle").select("text").transition(200).style("fill", "#455770");
                }).on("mouseleave", function(){
                    d3.select("#Tujia_x5F_ON").transition(200).style("opacity", 0);
                    d3.select(".tujia_circle").select("circle").transition(200).style("fill", "#063F84");
                    d3.select(".tujia_circle").select("text").transition(200).style("fill", "#ffffff");
                })
                
                
                
                // HOME AWAY
                $(".homeaway_circle").on("mouseenter", function(){
                    d3.select("#HomeAway_x5F_ON").transition(200).style("opacity", 1);
                    d3.select(".homeaway_circle").select("circle").transition(200).style("fill", "#27E0AD");
                    d3.select(".homeaway_circle").selectAll("tspan").transition(200).style("fill", "#455770");
                }).on("mouseleave", function(){
                    d3.select("#HomeAway_x5F_ON").transition(200).style("opacity", 0);
                    d3.select(".homeaway_circle").select("circle").transition(200).style("fill", "#063F84");
                    d3.select(".homeaway_circle").selectAll("tspan").transition(200).style("fill", "#ffffff");
                })
                
                
                
                // UBER
                $(".uber_circle").on("mouseenter", function(){
                    d3.select("#Uber_x5F_ON").transition(200).style("opacity", 1);
                    d3.select(".uber_circle").select("circle").transition(200).style("fill", "#27E0AD");
                    d3.select(".uber_circle").select("text").transition(200).style("fill", "#455770");
                }).on("mouseleave", function(){
                    d3.select("#Uber_x5F_ON").transition(200).style("opacity", 0);
                    d3.select(".uber_circle").select("circle").transition(200).style("fill", "#063F84");
                    d3.select(".uber_circle").select("text").transition(200).style("fill", "#ffffff");
                })
                
                
                // DIDI
                $(".didi_circle").on("mouseenter", function(){
                    d3.select("#DidiKuaidi_x5F_ON").transition(200).style("opacity", 1);
                    d3.select(".didi_circle").select("circle").transition(200).style("fill", "#27E0AD");
                    d3.select(".didi_circle").select("text").transition(200).style("fill", "#455770");
                }).on("mouseleave", function(){
                    d3.select("#DidiKuaidi_x5F_ON").transition(200).style("opacity", 0);
                    d3.select(".didi_circle").select("circle").transition(200).style("fill", "#063F84");
                    d3.select(".didi_circle").select("text").transition(200).style("fill", "#ffffff");
                })
                
                
                // WEWORK
                $(".wework_circle").on("mouseenter", function(){
                    d3.select("#WeWork_x5F_ON").transition(200).style("opacity", 1);
                    d3.select(".wework_circle").select("circle").transition(200).style("fill", "#27E0AD");
                    d3.select(".wework_circle").select("text").transition(200).style("fill", "#455770");
                }).on("mouseleave", function(){
                    d3.select("#WeWork_x5F_ON").transition(200).style("opacity", 0);
                    d3.select(".wework_circle").select("circle").transition(200).style("fill", "#063F84");
                    d3.select(".wework_circle").select("text").transition(200).style("fill", "#ffffff");
                })
                
            })
 
 //////////// VIZ 7 TAGCLOUD ///////////////////////////////////////////////
 
 ////////////////////////////////////////////////////////////////////////////
        // FUNCTIONS FOR YEARS//
        ////////////////////////////////////////////////////////////////////////////


        /////// FUNCTION 2015
        function f2015() {
            d3.selectAll(".tagcloud_st5_copy").classed("text_clicked", false)
            d3.selectAll(".tagcloud_st5_copy").classed("text_not_clicked", true)
            d3.selectAll(".tagcloud_st6_copy").classed("line_clicked", false)
            d3.selectAll(".tagcloud_st6_copy").classed("line_not_clicked", true)
            d3.selectAll(".tag_button").classed("clicked", false)
            d3.selectAll(".tagcloud_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#46576F")
            d3.select(this).classed("clicked", true)
            d3.select(this).select(".tagcloud_st6_copy")
                .classed("line_not_clicked", false)
                .classed("line_clicked", true)
            d3.select(this).select(".tagcloud_st5_copy")
                .classed("text_not_clicked", false)
                .classed("text_clicked", true)


            d3.select(".digital").transition()
                .duration(500)
                .attr("x", 123.4922)
                .attr("y", 335.6899)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".network").transition()
                .duration(500)
                .attr("x", 331.5258)
                .attr("y", 113.1584)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".web").transition()
                .duration(500)
                .attr("x", 400.9718)
                .attr("y", 193.7323)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".software").transition()
                .duration(500)
                .attr("x", 384.5227)
                .attr("y", 350.6826)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".learning").transition()
                .duration(500)
                .attr("x", 522.7426)
                .attr("y", 318.359)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".international").transition()
                .duration(500)
                .attr("x", 19.4092)
                .attr("y", 84.5494)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".development").transition()
                .duration(500)
                .attr("x", 25.3979)
                .attr("y", 381.4702)
                .style("font-size", 0).style("opacity", 0)


            d3.select(".management").transition()
                .duration(500)
                .attr("x", 44.5057)
                .attr("y", 350.6822)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".zipcar").transition()
                .duration(500)
                .attr("x", 515.792)
                .attr("y", 350.6822)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".university").transition()
                .duration(500)
                .attr("x", 393.2689)
                .attr("y", 81.7693)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".vehicles").transition()
                .duration(500)
                .attr("x", 509.5296)
                .attr("y", 351.1821)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".system").transition()
                .duration(500)
                .attr("x", 251.479)
                .attr("y", 337.1098)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".program").transition()
                .duration(500)
                .attr("x", 487.2288)
                .attr("y", 90.3062)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".innovation").transition()
                .duration(500)
                .attr("x", 310.8764)
                .attr("y", 154.0223)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".global").transition()
                .duration(500)
                .attr("x", 245.9164)
                .attr("y", 123.4051)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".future").transition()
                .duration(500)
                .attr("x", 410.4253)
                .attr("y", 86.084)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".economic").transition()
                .duration(500)
                .attr("x", 35.3526)
                .attr("y", 270.3336)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".design").transition()
                .duration(500)
                .attr("x", 156.6867)
                .attr("y", 280.4454)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".trust").transition()
                .duration(500)
                .attr("x", 301.4854)
                .attr("y", 177.486)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".uber").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 277.4478)
                .attr("y", 189.5887)
                .style("font-size", 53)

            d3.select(".airbnb").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 163.5471)
                .attr("y", 135.447)
                .style("font-size", 40)

            d3.select(".sharing").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 57.8181)
                .attr("y", 248.3271)
                .style("font-size", 56)

            d3.select(".business").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 378.8652)
                .attr("y", 252.6277)
                .style("font-size", 55)

            d3.select(".people").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 262.7093)
                .attr("y", 308.2018)
                .style("font-size", 52)

            d3.select(".companies").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 369.660)
                .attr("y", 125.0418)
                .style("font-size", 46)

            d3.select(".services").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 432.72)
                .attr("y", 297.3607)
                .style("font-size", 44)

            d3.select(".service").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 243.2258)
                .attr("y", 240.1547)
                .style("font-size", 42)

            d3.select(".social").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 75.7402)
                .attr("y", 173.9552)
                .style("font-size", 41)

            d3.select(".economy").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 55.2422)
                .attr("y", 308.2021)
                .style("font-size", 38)

            d3.select(".work").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 184.0972)
                .attr("y", 192.9511)
                .style("font-size", 38.8183)

            d3.select(".platforms").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 415.3557)
                .attr("y", 341.2865)
                .style("font-size", 37.286)

            d3.select(".consumers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 143.6579)
                .attr("y", 347.3636)
                .style("font-size", 36.2645)

            d3.select(".car").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 502.1189)
                .attr("y", 194.1854)
                .style("font-size", 34.7322)

            d3.select(".share").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 294.0844)
                .attr("y", 269.2563)
                .style("font-size", 33.1999)

            d3.select(".drivers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 184.097)
                .attr("y", 281.4867)
                .style("font-size", 30)

            d3.select(".need_alias").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 411.5338)
                .attr("y", 192.951)
                .style("font-size", 28)

            d3.select(".online").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 75.7404)
                .attr("y", 115.412)
                .style("font-size", 27)

            d3.select(".market").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 161.8945)
                .attr("y", 371.932)
                .style("font-size", 27)

            d3.select(".model").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 343.8479)
                .attr("y", 366.3148)
                .style("font-size", 25)

            d3.select(".information").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 407.0707)
                .attr("y", 157.6298)
                .style("font-size", 23)

            d3.select(".technology").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 427.6135)
                .attr("y", 371.932)
                .style("font-size", 23)

            d3.select(".access").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 40.4524)
                .attr("y", 194.1855)
                .style("font-size", 21)

            d3.select(".users").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 301.9651)
                .attr("y", 113.995)
                .style("font-size", 20)

            d3.select(".data").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 294.5078)
                .attr("y", 133.4995)
                .style("font-size", 13.1862)

            d3.select(".local").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 99.8936)
                .attr("y", 274.7948)
                .style("font-size", 17)

            d3.select(".workers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 343.8481)
                .attr("y", 333.2277)
                .style("font-size", 15)

            d3.select(".home").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 16.9563)
                .attr("y", 228.9174)
                .style("font-size", 12)

            d3.select(".world").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 306.5608)
                .attr("y", 359.1625)
                .style("font-size", 12)

            d3.select(".community").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 225.7507)
                .attr("y", 79.0527)
                .style("font-size", 10)

            d3.select(".city").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 443.7828)
                .attr("y", 325.6165)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".media").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 252.0925)
                .attr("y", 222.5937)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".goods").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 163.1316)
                .attr("y", 329.453)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".lyft").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 257.0508)
                .attr("y", 349.4387)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".bike").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 378.8656)
                .attr("y", 338.3538)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".economic").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 32.3525)
                .attr("y", 271.8598)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".public").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 26.1008)
                .attr("y", 217.5938)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".money").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 171.2271)
                .attr("y", 287.5681)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".law").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 531.9443)
                .attr("y", 331.7524)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".cars").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 185.7556)
                .attr("y", 323.839)
                .style("font-size", 0).style("opacity", 0)
        }


        /////// FUNCTION 2014
        function f2014() {

            d3.selectAll(".tagcloud_st5_copy").classed("text_clicked", false)
            d3.selectAll(".tagcloud_st5_copy").classed("text_not_clicked", true)
            d3.selectAll(".tagcloud_st6_copy").classed("line_clicked", false)
            d3.selectAll(".tagcloud_st6_copy").classed("line_not_clicked", true)
            d3.selectAll(".tag_button").classed("clicked", false)
            d3.selectAll(".tagcloud_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#46576F")
            d3.select(this).classed("clicked", true)
            d3.select(this).select(".tagcloud_st6_copy")
                .classed("line_not_clicked", false)
                .classed("line_clicked", true)
            d3.select(this).select(".tagcloud_st5_copy")
                .classed("text_not_clicked", false)
                .classed("text_clicked", true)

            d3.select(".digital").transition()
                .duration(500)
                .attr("x", 123.4922)
                .attr("y", 335.6899)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".network").transition()
                .duration(500)
                .attr("x", 331.5258)
                .attr("y", 113.1584)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".web").transition()
                .duration(500)
                .attr("x", 400.9718)
                .attr("y", 193.7323)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".software").transition()
                .duration(500)
                .attr("x", 384.5227)
                .attr("y", 350.6826)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".learning").transition()
                .duration(500)
                .attr("x", 522.7426)
                .attr("y", 318.359)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".international").transition()
                .duration(500)
                .attr("x", 19.4092)
                .attr("y", 84.5494)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".development").transition()
                .duration(500)
                .attr("x", 25.3979)
                .attr("y", 381.4702)
                .style("font-size", 0).style("opacity", 0)


            d3.select(".management").transition()
                .duration(500)
                .attr("x", 44.5057)
                .attr("y", 350.6822)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".zipcar").transition()
                .duration(500)
                .attr("x", 515.792)
                .attr("y", 350.6822)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".university").transition()
                .duration(500)
                .attr("x", 393.2689)
                .attr("y", 81.7693)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".vehicles").transition()
                .duration(500)
                .attr("x", 509.5296)
                .attr("y", 351.1821)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".system").transition()
                .duration(500)
                .attr("x", 251.479)
                .attr("y", 337.1098)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".program").transition()
                .duration(500)
                .attr("x", 487.2288)
                .attr("y", 90.3062)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".innovation").transition()
                .duration(500)
                .attr("x", 310.8764)
                .attr("y", 154.0223)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".global").transition()
                .duration(500)
                .attr("x", 245.9164)
                .attr("y", 123.4051)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".future").transition()
                .duration(500)
                .attr("x", 410.4253)
                .attr("y", 86.084)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".economic").transition()
                .duration(500)
                .attr("x", 35.3526)
                .attr("y", 270.3336)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".design").transition()
                .duration(500)
                .attr("x", 156.6867)
                .attr("y", 280.4454)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".trust").transition()
                .duration(500)
                .attr("x", 301.4854)
                .attr("y", 177.486)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".uber").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 289.6758)
                .attr("y", 182.7221)
                .style("font-size", 34.8584)

            d3.select(".airbnb").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 169.353)
                .attr("y", 134.1484)
                .style("font-size", 35.0783)

            d3.select(".sharing").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 64.0908)
                .attr("y", 243.4497)
                .style("font-size", 44.3356)

            d3.select(".business").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 386.3872)
                .attr("y", 251.436)
                .style("font-size", 48.7589)

            d3.select(".people").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 267.8359)
                .attr("y", 305.8354)
                .style("font-size", 44.0942)

            d3.select(".companies").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 376.1004)
                .attr("y", 125.0416)
                .style("font-size", 42.8132)

            d3.select(".services").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 432.72)
                .attr("y", 297.3607)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".service").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 243.2258)
                .attr("y", 240.1547)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".social").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 75.7402)
                .attr("y", 173.3418)
                .style("font-size", 44.174)

            d3.select(".economy").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 57.8184)
                .attr("y", 303.2436)
                .style("font-size", 23.0572)

            d3.select(".work").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 193.6725)
                .attr("y", 189.5886)
                .style("font-size", 27.7313)

            d3.select(".platforms").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 415.3557)
                .attr("y", 341.2865)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".consumers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 143.6579)
                .attr("y", 347.3636)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".car").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 505.8496)
                .attr("y", 192.4013)
                .style("font-size", 32.4888)

            d3.select(".share").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 282.2302)
                .attr("y", 268.8007)
                .style("font-size", 42.125)

            d3.select(".drivers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 185.8525)
                .attr("y", 280.1245)
                .style("font-size", 29.0273)

            d3.select(".need_alias").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 411.5339)
                .attr("y", 191.6323)
                .style("font-size", 18.9211)

            d3.select(".online").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 78.4048)
                .attr("y", 114.4949)
                .style("font-size", 24.8122)

            d3.select(".market").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 163.1313)
                .attr("y", 372.7495)
                .style("font-size", 25.3783)

            d3.select(".model").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 343.8479)
                .attr("y", 366.3148)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".information").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 407.0707)
                .attr("y", 157.6298)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".technology").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 435.4449)
                .attr("y", 372.7494)
                .style("font-size", 19.9471)

            d3.select(".access").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 40.4524)
                .attr("y", 194.1855)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".users").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 303.2168)
                .attr("y", 113.478)
                .style("font-size", 18.2956)

            d3.select(".data").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 294.0845)
                .attr("y", 134.7534)
                .style("font-size", 15.202)

            d3.select(".local").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 99.8936)
                .attr("y", 274.7948)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".workers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 343.8481)
                .attr("y", 333.2277)
                .style("font-size", 0)

            d3.select(".home").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 19.5586)
                .attr("y", 227.4033)
                .style("font-size", 9)

            d3.select(".world").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 308.3682)
                .attr("y", 357.0161)
                .style("font-size", 8.9009)

            d3.select(".community").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 218.3164)
                .attr("y", 77.5424)
                .style("font-size", 14.9126)

            d3.select(".city").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 443.7828)
                .attr("y", 325.6165)
                .style("font-size", 36.9751)

            d3.select(".media").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 252.0925)
                .attr("y", 222.5937)
                .style("font-size", 29.1908)

            d3.select(".goods").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 163.1316)
                .attr("y", 329.453)
                .style("font-size", 26.7583)

            d3.select(".lyft").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 257.0508)
                .attr("y", 349.4387)
                .style("font-size", 20.5749)

            d3.select(".bike").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 378.8656)
                .attr("y", 338.3538)
                .style("font-size", 10.0904)

            d3.select(".economic").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 32.3525)
                .attr("y", 271.8598)
                .style("font-size", 12.1128)

            d3.select(".public").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 26.1008)
                .attr("y", 217.5938)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".money").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 171.2271)
                .attr("y", 287.5681)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".law").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 531.9443)
                .attr("y", 331.7524)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".cars").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 185.7556)
                .attr("y", 323.839)
                .style("font-size", 0).style("opacity", 0)
        }

        /////// FUNCTION 2013
        function f2013() {

            d3.selectAll(".tagcloud_st5_copy").classed("text_clicked", false)
            d3.selectAll(".tagcloud_st5_copy").classed("text_not_clicked", true)
            d3.selectAll(".tagcloud_st6_copy").classed("line_clicked", false)
            d3.selectAll(".tagcloud_st6_copy").classed("line_not_clicked", true)
            d3.selectAll(".tag_button").classed("clicked", false)
            d3.selectAll(".tagcloud_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#46576F")
            d3.select(this).classed("clicked", true)
            d3.select(this).select(".tagcloud_st6_copy")
                .classed("line_not_clicked", false)
                .classed("line_clicked", true)
            d3.select(this).select(".tagcloud_st5_copy")
                .classed("text_not_clicked", false)
                .classed("text_clicked", true)

            d3.select(".digital").transition()
                .duration(500)
                .attr("x", 123.4922)
                .attr("y", 335.6899)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".network").transition()
                .duration(500)
                .attr("x", 331.5258)
                .attr("y", 113.1584)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".web").transition()
                .duration(500)
                .attr("x", 400.9718)
                .attr("y", 193.7323)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".software").transition()
                .duration(500)
                .attr("x", 384.5227)
                .attr("y", 350.6826)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".learning").transition()
                .duration(500)
                .attr("x", 522.7426)
                .attr("y", 318.359)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".international").transition()
                .duration(500)
                .attr("x", 19.4092)
                .attr("y", 84.5494)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".development").transition()
                .duration(500)
                .attr("x", 25.3979)
                .attr("y", 381.4702)
                .style("font-size", 0).style("opacity", 0)


            d3.select(".management").transition()
                .duration(500)
                .attr("x", 44.5057)
                .attr("y", 350.6822)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".zipcar").transition()
                .duration(500)
                .attr("x", 515.792)
                .attr("y", 350.6822)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".university").transition()
                .duration(500)
                .attr("x", 393.2689)
                .attr("y", 81.7693)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".vehicles").transition()
                .duration(500)
                .attr("x", 509.5296)
                .attr("y", 351.1821)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".system").transition()
                .duration(500)
                .attr("x", 251.479)
                .attr("y", 337.1098)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".program").transition()
                .duration(500)
                .attr("x", 487.2288)
                .attr("y", 90.3062)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".innovation").transition()
                .duration(500)
                .attr("x", 310.8764)
                .attr("y", 154.0223)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".global").transition()
                .duration(500)
                .attr("x", 245.9164)
                .attr("y", 123.4051)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".future").transition()
                .duration(500)
                .attr("x", 410.4253)
                .attr("y", 86.084)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".economic").transition()
                .duration(500)
                .attr("x", 35.3526)
                .attr("y", 270.3336)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".design").transition()
                .duration(500)
                .attr("x", 156.6867)
                .attr("y", 280.4454)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".trust").transition()
                .duration(500)
                .attr("x", 301.4854)
                .attr("y", 177.486)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".uber").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 289.6758)
                .attr("y", 182.7221)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".airbnb").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 175.0767)
                .attr("y", 132.8681)
                .style("font-size", 29.7886)

            d3.select(".sharing").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 75.2577)
                .attr("y", 241.6314)
                .style("font-size", 40.4654)

            d3.select(".business").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 377.0117)
                .attr("y", 248.2905)
                .style("font-size", 47.967)

            d3.select(".people").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 270.4112)
                .attr("y", 306.231)
                .style("font-size", 42.8391)

            d3.select(".companies").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 378.8654)
                .attr("y", 123.4048)
                .style("font-size", 34.8355)

            d3.select(".services").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 443.9261)
                .attr("y", 295.3606)
                .style("font-size", 36.4549)

            d3.select(".service").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 252.0924)
                .attr("y", 240.1548)
                .style("font-size", 32.6176)

            d3.select(".social").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 80.3188)
                .attr("y", 172.1709)
                .style("font-size", 40.2262)

            d3.select(".economy").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 63.8936)
                .attr("y", 304.936)
                .style("font-size", 20.1447)

            d3.select(".work").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 196.0334)
                .attr("y", 189.5885)
                .style("font-size", 25.4225)

            d3.select(".platforms").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 415.3557)
                .attr("y", 341.2865)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".consumers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 143.6579)
                .attr("y", 347.3636)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".car").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 486.1211)
                .attr("y", 201.7524)
                .style("font-size", 64.7229)

            d3.select(".share").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 281.9586)
                .attr("y", 271.2595)
                .style("font-size", 42.6907)

            d3.select(".drivers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 185.8525)
                .attr("y", 280.1245)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".need_alias").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 407.2305)
                .attr("y", 193.9762)
                .style("font-size", 23.4522)

            d3.select(".online").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 67.0903)
                .attr("y", 115.9096)
                .style("font-size", 32.5597)

            d3.select(".market").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 163.1313)
                .attr("y", 372.7495)
                .style("font-size", 35.0056)

            d3.select(".model").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 143.9849)
                .attr("y", 376.2817)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".information").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 415.3555)
                .attr("y", 157.6299)
                .style("font-size", 20.6258)

            d3.select(".technology").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 402.5537)
                .attr("y", 380.3904)
                .style("font-size", 37.8939)

            d3.select(".access").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 48.7919)
                .attr("y", 192.9509)
                .style("font-size", 12.9511)

            d3.select(".users").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 303.2168)
                .attr("y", 113.478)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".data").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 294.5078)
                .attr("y", 133.4995)
                .style("font-size", 13.1862)

            d3.select(".local").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 102.8936)
                .attr("y", 274.795)
                .style("font-size", 13.9104)

            d3.select(".workers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 343.8481)
                .attr("y", 333.2277)
                .style("font-size", 0)

            d3.select(".home").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 19.5586)
                .attr("y", 227.4033)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".world").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 301.376)
                .attr("y", 360.0493)
                .style("font-size", 21.5866)

            d3.select(".community").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 218.3164)
                .attr("y", 78.5776)
                .style("font-size", 14.5612)

            d3.select(".city").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 435.1729)
                .attr("y", 329.8012)
                .style("font-size", 49.0156)

            d3.select(".media").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 252.0924)
                .attr("y", 217.5936)
                .style("font-size", 28.7802)

            d3.select(".goods").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 163.1316)
                .attr("y", 329.453)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".lyft").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 257.0508)
                .attr("y", 349.4387)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".bike").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 360.8071)
                .attr("y", 347.4946)
                .style("font-size", 40.6498)

            d3.select(".economic").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 32.3525)
                .attr("y", 271.8598)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".public").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 26.1008)
                .attr("y", 217.5938)
                .style("font-size", 21.5852)

            d3.select(".money").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 171.2271)
                .attr("y", 287.5681)
                .style("font-size", 23.0242)

            d3.select(".law").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 531.9443)
                .attr("y", 331.7524)
                .style("font-size", 40.6498)

            d3.select(".cars").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 185.7556)
                .attr("y", 323.839)
                .style("font-size", 16.7885)
        }

        /////// FUNCTION 2012
        function f2012() {

            d3.selectAll(".tagcloud_st5_copy").classed("text_clicked", false)
            d3.selectAll(".tagcloud_st5_copy").classed("text_not_clicked", true)
            d3.selectAll(".tagcloud_st6_copy").classed("line_clicked", false)
            d3.selectAll(".tagcloud_st6_copy").classed("line_not_clicked", true)
            d3.selectAll(".tag_button").classed("clicked", false)
            d3.selectAll(".tagcloud_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#46576F")
            d3.select(this).classed("clicked", true)
            d3.select(this).select(".tagcloud_st6_copy")
                .classed("line_not_clicked", false)
                .classed("line_clicked", true)
            d3.select(this).select(".tagcloud_st5_copy")
                .classed("text_not_clicked", false)
                .classed("text_clicked", true)

            d3.select(".digital").transition()
                .duration(500)
                .attr("x", 123.4922)
                .attr("y", 335.6899)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".network").transition()
                .duration(500)
                .attr("x", 331.5258)
                .attr("y", 113.1584)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".web").transition()
                .duration(500)
                .attr("x", 400.9718)
                .attr("y", 193.7323)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".software").transition()
                .duration(500)
                .attr("x", 384.5227)
                .attr("y", 350.6826)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".learning").transition()
                .duration(500)
                .attr("x", 522.7426)
                .attr("y", 318.359)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".international").transition()
                .duration(500)
                .attr("x", 19.4092)
                .attr("y", 84.5494)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".development").transition()
                .duration(500)
                .attr("x", 25.3979)
                .attr("y", 381.4702)
                .style("font-size", 0).style("opacity", 0)


            d3.select(".management").transition()
                .duration(500)
                .attr("x", 44.5057)
                .attr("y", 350.6822)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".zipcar").transition()
                .duration(500)
                .attr("x", 515.792)
                .attr("y", 350.6822)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".university").transition()
                .duration(500)
                .attr("x", 393.2689)
                .attr("y", 81.7693)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".vehicles").transition()
                .duration(500)
                .attr("x", 509.5296)
                .attr("y", 351.1821)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".system").transition()
                .duration(500)
                .attr("x", 251.479)
                .attr("y", 337.1098)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".program").transition()
                .duration(500)
                .attr("x", 487.2288)
                .attr("y", 90.3062)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".innovation").transition()
                .duration(500)
                .attr("x", 310.8764)
                .attr("y", 154.0223)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".global").transition()
                .duration(500)
                .attr("x", 245.9164)
                .attr("y", 123.4051)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".future").transition()
                .duration(500)
                .attr("x", 410.4253)
                .attr("y", 86.084)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".economic").transition()
                .duration(500)
                .attr("x", 35.3526)
                .attr("y", 270.3336)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".design").transition()
                .duration(500)
                .attr("x", 156.6867)
                .attr("y", 280.4454)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".trust").transition()
                .duration(500)
                .attr("x", 301.4854)
                .attr("y", 177.486)
                .style("font-size", 37.4992).style("opacity", 1)

            d3.select(".uber").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 289.6758)
                .attr("y", 182.7221)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".airbnb").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 188.0776)
                .attr("y", 128.9746)
                .style("font-size", 18.4807)

            d3.select(".sharing").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 80.8624)
                .attr("y", 242.2651)
                .style("font-size", 37.7765)

            d3.select(".business").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 378.8159)
                .attr("y", 250.2612)
                .style("font-size", 47.967)

            d3.select(".people").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 267.7437)
                .attr("y", 303.5903)
                .style("font-size", 49.3411)

            d3.select(".companies").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 389.2108)
                .attr("y", 123.4049)
                .style("font-size", 33.0585)

            d3.select(".services").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 450.2793)
                .attr("y", 295.3606)
                .style("font-size", 32.7017)

            d3.select(".service").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 252.2344)
                .attr("y", 238.1792)
                .style("font-size", 30.6176)

            d3.select(".social").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 89.8027)
                .attr("y", 168.4507)
                .style("font-size", 32.5)

            d3.select(".economy").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 41.7124)
                .attr("y", 311.2173)
                .style("font-size", 34.9591)

            d3.select(".work").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 196.0336)
                .attr("y", 189.5887)
                .style("font-size", 27.1376)

            d3.select(".platforms").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 415.3557)
                .attr("y", 341.2865)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".consumers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 143.6579)
                .attr("y", 347.3636)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".car").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 487.2925)
                .attr("y", 201.7524)
                .style("font-size", 46.874)

            d3.select(".share").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 290.8599)
                .attr("y", 269.3364)
                .style("font-size", 37.0096)

            d3.select(".drivers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 290.8599)
                .attr("y", 280.1245)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".need_alias").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 406.479)
                .attr("y", 192.5346)
                .style("font-size", 23.4381)

            d3.select(".online").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 75.562)
                .attr("y", 113.2549)
                .style("font-size", 25.9752)

            d3.select(".market").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 155.7545)
                .attr("y", 376.8903)
                .style("font-size", 25.1639)

            d3.select(".model").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 143.9849)
                .attr("y", 376.2817)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".information").transition()
                .duration(500)
                .attr("x", 415.3555)
                .attr("y", 157.6299)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".technology").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 450.2793)
                .attr("y", 380.3901)
                .style("font-size", 19.243)

            d3.select(".access").transition()
                .duration(500)
                .attr("x", 48.7919)
                .attr("y", 192.9509)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".users").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 301.4854)
                .attr("y", 113.5732)
                .style("font-size", 20.6112)

            d3.select(".data").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 295.2036)
                .attr("y", 133.1367)
                .style("font-size", 12.1138)

            d3.select(".local").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 102.8935)
                .attr("y", 274.7949)
                .style("font-size", 13.3221)

            d3.select(".workers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 343.8481)
                .attr("y", 333.2277)
                .style("font-size", 0)

            d3.select(".home").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 19.5586)
                .attr("y", 227.4033)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".world").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 281.9586)
                .attr("y", 376.2817)
                .style("font-size", 35.5256)

            d3.select(".community").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 176.4061)
                .attr("y", 85.0776)
                .style("font-size", 38.9794)

            d3.select(".city").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 433.8734)
                .attr("y", 329.8012)
                .style("font-size", 39.9663)

            d3.select(".media").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 257.1479)
                .attr("y", 214.9951)
                .style("font-size", 23.4624)

            d3.select(".goods").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 163.1316)
                .attr("y", 329.453)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".lyft").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 257.0508)
                .attr("y", 349.4387)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".bike").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 377.0117)
                .attr("y", 341.0492)
                .style("font-size", 29.6046)

            d3.select(".economic").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 32.3525)
                .attr("y", 270.3335)
                .style("font-size", 13.1954).style("opacity", 1)

            d3.select(".public").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 26.1008)
                .attr("y", 217.5938)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".money").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 178.8399)
                .attr("y", 284.7436)
                .style("font-size", 19.0668)

            d3.select(".law").transition()
                .duration(500)
                .attr("x", 531.9443)
                .attr("y", 331.7524)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".cars").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 185.7556)
                .attr("y", 323.839)
                .style("font-size", 16.2826)
        }

        /////// FUNCTION 2011
        function f2011() {

            d3.selectAll(".tagcloud_st5_copy").classed("text_clicked", false)
            d3.selectAll(".tagcloud_st5_copy").classed("text_not_clicked", true)
            d3.selectAll(".tagcloud_st6_copy").classed("line_clicked", false)
            d3.selectAll(".tagcloud_st6_copy").classed("line_not_clicked", true)
            d3.selectAll(".tag_button").classed("clicked", false)
            d3.selectAll(".tagcloud_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#46576F")
            d3.select(this).classed("clicked", true)
            d3.select(this).select(".tagcloud_st6_copy")
                .classed("line_not_clicked", false)
                .classed("line_clicked", true)
            d3.select(this).select(".tagcloud_st5_copy")
                .classed("text_not_clicked", false)
                .classed("text_clicked", true)

            d3.select(".digital").transition()
                .duration(500)
                .attr("x", 123.4922)
                .attr("y", 335.6899)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".network").transition()
                .duration(500)
                .attr("x", 331.5258)
                .attr("y", 113.1584)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".web").transition()
                .duration(500)
                .attr("x", 400.9718)
                .attr("y", 193.7323)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".software").transition()
                .duration(500)
                .attr("x", 384.5227)
                .attr("y", 350.6826)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".learning").transition()
                .duration(500)
                .attr("x", 522.7426)
                .attr("y", 318.359)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".international").transition()
                .duration(500)
                .attr("x", 19.4092)
                .attr("y", 84.5494)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".development").transition()
                .duration(500)
                .attr("x", 25.3979)
                .attr("y", 381.4702)
                .style("font-size", 0).style("opacity", 0)


            d3.select(".management").transition()
                .duration(500)
                .attr("x", 44.5057)
                .attr("y", 350.6822)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".zipcar").transition()
                .duration(500)
                .attr("x", 515.792)
                .attr("y", 350.6822)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".university").transition()
                .duration(500)
                .attr("x", 393.2689)
                .attr("y", 81.7693)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".trust").transition()
                .duration(500)
                .attr("x", 301.4854)
                .attr("y", 177.486)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".vehicles").transition()
                .duration(500)
                .attr("x", 509.5296)
                .attr("y", 351.1821)
                .style("font-size", 26.8033).style("opacity", 1)

            d3.select(".system").transition()
                .duration(500)
                .attr("x", 251.479)
                .attr("y", 337.1098)
                .style("font-size", 15.03175).style("opacity", 1)

            d3.select(".program").transition()
                .duration(500)
                .attr("x", 487.2288)
                .attr("y", 90.3062)
                .style("font-size", 24.0775).style("opacity", 1)

            d3.select(".innovation").transition()
                .duration(500)
                .attr("x", 310.8764)
                .attr("y", 154.0223)
                .style("font-size", 14.9917).style("opacity", 1)

            d3.select(".global").transition()
                .duration(500)
                .attr("x", 245.9164)
                .attr("y", 123.4051)
                .style("font-size", 22.2603).style("opacity", 1)

            d3.select(".future").transition()
                .duration(500)
                .attr("x", 410.4253)
                .attr("y", 86.084)
                .style("font-size", 19.9889).style("opacity", 1)

            d3.select(".economic").transition()
                .duration(500)
                .attr("x", 35.3526)
                .attr("y", 270.3336)
                .style("font-size", 12.2659).style("opacity", 1)

            d3.select(".design").transition()
                .duration(500)
                .attr("x", 156.6867)
                .attr("y", 280.4454)
                .style("font-size", 17.7174).style("opacity", 1)

            d3.select(".uber").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 289.6758)
                .attr("y", 182.7221)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".airbnb").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 188.0776)
                .attr("y", 128.9746)
                .style("font-size", 18.4807)

            d3.select(".sharing").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 80.8628)
                .attr("y", 240.1216)
                .style("font-size", 37.8287)

            d3.select(".business").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 384.2603)
                .attr("y", 248.3149)
                .style("font-size", 45.8836)

            d3.select(".people").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 265.6479)
                .attr("y", 303.5903)
                .style("font-size", 43.6121)

            d3.select(".companies").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 403.6138)
                .attr("y", 124.29)
                .style("font-size", 28.3922)

            d3.select(".services").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 459.8837)
                .attr("y", 294.4575)
                .style("font-size", 27.7119)

            d3.select(".service").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 252.0923)
                .attr("y", 241.31)
                .style("font-size", 31.3421)

            d3.select(".social").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 89.8027)
                .attr("y", 169.0991)
                .style("font-size", 30.8755)

            d3.select(".economy").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 43.7227)
                .attr("y", 308.5669)
                .style("font-size", 33.9186)

            d3.select(".work").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 185.7549)
                .attr("y", 189.5883)
                .style("font-size", 38.6149)

            d3.select(".platforms").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 415.3557)
                .attr("y", 341.2865)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".consumers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 143.6579)
                .attr("y", 347.3636)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".car").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 482.3389)
                .attr("y", 204.1206)
                .style("font-size", 55.1407)

            d3.select(".share").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 287.8833)
                .attr("y", 271.5112)
                .style("font-size", 38.7294)

            d3.select(".drivers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 290.8599)
                .attr("y", 280.1245)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".need_alias").transition()
                .duration(500)
                .attr("x", 406.479)
                .attr("y", 192.5346)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".online").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 70.9902)
                .attr("y", 112.1596)
                .style("font-size", 27.5424)

            d3.select(".market").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 151.3585)
                .attr("y", 377.4556)
                .style("font-size", 27.0153)

            d3.select(".model").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 143.9849)
                .attr("y", 376.2817)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".information").transition()
                .duration(500)
                .attr("x", 427.6582)
                .attr("y", 157.6297)
                .style("font-size", 16.3545)
                .style("opacity", 1)

            d3.select(".technology").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 453.6875)
                .attr("y", 383.9165)
                .style("font-size", 18.4691)

            d3.select(".access").transition()
                .duration(500)
                .attr("x", 52.0679)
                .attr("y", 193.2553)
                .style("font-size", 10.77280)
                .style("opacity", 1)

            d3.select(".users").transition()
                .duration(500)
                .attr("x", 301.4854)
                .attr("y", 113.5732)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".data").transition()
                .duration(500)
                .attr("x", 295.2036)
                .attr("y", 133.1367)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".local").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 102.8935)
                .attr("y", 274.7949)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".workers").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 343.8481)
                .attr("y", 333.2277)
                .style("font-size", 0)

            d3.select(".home").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 4.63)
                .attr("y", 252.6274)
                .style("font-size", 21.3518)

            d3.select(".world").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 282.4282)
                .attr("y", 377.5268)
                .style("font-size", 34.5882)

            d3.select(".community").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 174.7423)
                .attr("y", 87.8097)
                .style("font-size", 38.1826)

            d3.select(".city").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 433.8734)
                .attr("y", 328.839)
                .style("font-size", 39.9778)

            d3.select(".media").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 249.2866)
                .attr("y", 212.8847)
                .style("font-size", 28.8557)

            d3.select(".goods").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 163.1316)
                .attr("y", 329.453)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".lyft").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 257.0508)
                .attr("y", 349.4387)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".bike").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 382.2388)
                .attr("y", 338.3276)
                .style("font-size", 24.0874)

            d3.select(".economic").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 32.3525)
                .attr("y", 270.3335)
                .style("font-size", 13.1954).style("opacity", 1)

            d3.select(".public").transition()
                .duration(500)
                .attr("x", 22.0044)
                .attr("y", 227.8232)
                .style("font-size", 18.626)
                .style("opacity", 1)

            d3.select(".money").transition()
                .duration(500)
                .attr("x", 178.8399)
                .attr("y", 284.7436)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".law").transition()
                .duration(500)
                .attr("x", 531.9443)
                .attr("y", 331.7524)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".cars").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 185.7558)
                .attr("y", 325.5717)
                .style("font-size", 16.7936)
        }

        /////// FUNCTION 2010
        function f2010() {

            d3.selectAll(".tagcloud_st5_copy").classed("text_clicked", false)
            d3.selectAll(".tagcloud_st5_copy").classed("text_not_clicked", true)
            d3.selectAll(".tagcloud_st6_copy").classed("line_clicked", false)
            d3.selectAll(".tagcloud_st6_copy").classed("line_not_clicked", true)
            d3.selectAll(".tag_button").classed("clicked", false)
            d3.selectAll(".tagcloud_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#46576F")
            d3.select(this).classed("clicked", true)
            d3.select(this).select(".tagcloud_st6_copy")
                .classed("line_not_clicked", false)
                .classed("line_clicked", true)
            d3.select(this).select(".tagcloud_st5_copy")
                .classed("text_not_clicked", false)
                .classed("text_clicked", true)

            d3.select(".digital").transition()
                .duration(500)
                .attr("x", 123.4922)
                .attr("y", 335.6899)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".network").transition()
                .duration(500)
                .attr("x", 331.5258)
                .attr("y", 113.1584)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".web").transition()
                .duration(500)
                .attr("x", 400.9718)
                .attr("y", 193.7323)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".software").transition()
                .duration(500)
                .attr("x", 384.5227)
                .attr("y", 350.6826)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".learning").transition()
                .duration(500)
                .attr("x", 522.7426)
                .attr("y", 318.359)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".international").transition()
                .duration(500)
                .attr("x", 19.4092)
                .attr("y", 84.5494)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".development").transition()
                .duration(500)
                .attr("x", 25.3979)
                .attr("y", 381.4702)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".management").transition()
                .duration(500)
                .attr("x", 44.5057)
                .attr("y", 350.6822)
                .style("font-size", 22.2607).style("opacity", 1)

            d3.select(".zipcar").transition()
                .duration(500)
                .attr("x", 515.792)
                .attr("y", 350.6822)
                .style("font-size", 20.8694).style("opacity", 1)

            d3.select(".university").transition()
                .duration(500)
                .attr("x", 393.2689)
                .attr("y", 81.7693)
                .style("font-size", 12.5217).style("opacity", 1)

            d3.select(".trust").transition()
                .duration(500)
                .attr("x", 301.4854)
                .attr("y", 177.486)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".vehicles").transition()
                .duration(500)
                .attr("x", 509.5296)
                .attr("y", 351.1821)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".system").transition()
                .duration(500)
                .attr("x", 245.4164)
                .attr("y", 337.6098)
                .style("font-size", 19.9419).style("opacity", 1)

            d3.select(".program").transition()
                .duration(500)
                .attr("x", 483.8447)
                .attr("y", 90.2075)
                .style("font-size", 25.9026).style("opacity", 1)

            d3.select(".innovation").transition()
                .duration(500)
                .attr("x", 310.8764)
                .attr("y", 154.0223)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".global").transition()
                .duration(500)
                .attr("x", 239.0465)
                .attr("y", 125.1598)
                .style("font-size", 29.4997).style("opacity", 1)

            d3.select(".future").transition()
                .duration(500)
                .attr("x", 410.4253)
                .attr("y", 86.084)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".economic").transition()
                .duration(500)
                .attr("x", 22.0046)
                .attr("y", 271.5114)
                .style("font-size", 19.9419).style("opacity", 1)

            d3.select(".design").transition()
                .duration(500)
                .attr("x", 137.0519)
                .attr("y", 284.445)
                .style("font-size", 34.7824).style("opacity", 1)

            d3.select(".uber").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 289.6758)
                .attr("y", 182.7221)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".airbnb").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 188.0776)
                .attr("y", 128.9746)
                .style("font-size", 0)

            d3.select(".sharing").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 86.4013)
                .attr("y", 238.8159)
                .style("font-size", 33.8854)

            d3.select(".business").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 389.0039)
                .attr("y", 247.7231)
                .style("font-size", 43.1643)

            d3.select(".people").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 266.6478)
                .attr("y", 304.0665)
                .style("font-size", 43.1302)

            d3.select(".companies").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 423.2842)
                .attr("y", 122.3882)
                .style("font-size", 20.4379)

            d3.select(".services").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 462.6328)
                .attr("y", 293.4311)
                .style("font-size", 27.7119)

            d3.select(".service").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 252.2343)
                .attr("y", 240.1216)
                .style("font-size", 25.9306)

            d3.select(".social").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 75.38)
                .attr("y", 174.0991)
                .style("font-size", 46.8403)

            d3.select(".economy").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 44.5059)
                .attr("y", 307.7065)
                .style("font-size", 30.5229)

            d3.select(".work").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 192.1089)
                .attr("y", 188.5615)
                .style("font-size", 32.0408)

            d3.select(".platforms").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 415.3557)
                .attr("y", 341.2865)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".consumers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 143.6579)
                .attr("y", 347.3636)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".car").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 487.2925)
                .attr("y", 202.1206)
                .style("font-size", 44.5215)

            d3.select(".share").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 289.6436)
                .attr("y", 270.0229)
                .style("font-size", 36.1815)

            d3.select(".drivers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 290.8599)
                .attr("y", 280.1245)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".need_alias").transition()
                .duration(500)
                .attr("x", 411.5338)
                .attr("y", 191.950)
                .style("font-size", 14.8405)
                .style("opacity", 1)

            d3.select(".online").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 78.8428)
                .attr("y", 109.2485)
                .style("font-size", 22.3136)

            d3.select(".market").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 166.6978)
                .attr("y", 376.3374)
                .style("font-size", 18.936)

            d3.select(".model").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 143.9849)
                .attr("y", 376.2817)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".information").transition()
                .duration(500)
                .attr("x", 403.6133)
                .attr("y", 162.1294)
                .style("font-size", 29.681)
                .style("opacity", 1)

            d3.select(".technology").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 422.2861)
                .attr("y", 390.8178)
                .style("font-size", 35.482)

            d3.select(".access").transition()
                .duration(500)
                .attr("x", 52.0679)
                .attr("y", 193.2553)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".users").transition()
                .duration(500)
                .attr("x", 301.4854)
                .attr("y", 113.5732)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".data").transition()
                .duration(500)
                .attr("x", 295.2036)
                .attr("y", 133.1367)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".local").transition()
                .duration(500)
                .attr("x", 102.8935)
                .attr("y", 274.7949)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".workers").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 343.8481)
                .attr("y", 333.2277)
                .style("font-size", 0)

            d3.select(".home").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 4.63)
                .attr("y", 252.6274)
                .style("font-size", 0)

            d3.select(".world").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 273.8198)
                .attr("y", 378.7905)
                .style("font-size", 41.7624)

            d3.select(".community").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 160.3965)
                .attr("y", 87.8432)
                .style("font-size", 41.5717)

            d3.select(".city").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 433.8734)
                .attr("y", 328.839)
                .style("font-size", 39.42)

            d3.select(".media").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 249.2866)
                .attr("y", 212.8847)
                .style("font-size", 28.8557)

            d3.select(".goods").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 163.1316)
                .attr("y", 329.453)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".lyft").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 257.0508)
                .attr("y", 349.4387)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".bike").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 384.8052)
                .attr("y", 336.3969)
                .style("font-size", 19.5361)

            d3.select(".economic").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 32.3525)
                .attr("y", 270.3335)
                .style("font-size", 13.1954).style("opacity", 1)

            d3.select(".public").transition()
                .duration(500)
                .attr("x", 25.0688)
                .attr("y", 228.3877)
                .style("font-size", 15.328)
                .style("opacity", 1)

            d3.select(".money").transition()
                .duration(500)
                .attr("x", 178.8399)
                .attr("y", 284.7436)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".law").transition()
                .duration(500)
                .attr("x", 531.9443)
                .attr("y", 331.7524)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".cars").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 185.7563)
                .attr("y", 324.6421)
                .style("font-size", 15.451)
        }

        /////// FUNCTION 2009
        function f2009() {

            d3.selectAll(".tagcloud_st5_copy").classed("text_clicked", false)
            d3.selectAll(".tagcloud_st5_copy").classed("text_not_clicked", true)
            d3.selectAll(".tagcloud_st6_copy").classed("line_clicked", false)
            d3.selectAll(".tagcloud_st6_copy").classed("line_not_clicked", true)
            d3.selectAll(".tag_button").classed("clicked", false)
            d3.selectAll(".tagcloud_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#46576F")
            d3.select(this).classed("clicked", true)
            d3.select(this).select(".tagcloud_st6_copy")
                .classed("line_not_clicked", false)
                .classed("line_clicked", true)
            d3.select(this).select(".tagcloud_st5_copy")
                .classed("text_not_clicked", false)
                .classed("text_clicked", true)

            d3.select(".digital").transition()
                .duration(500)
                .attr("x", 123.4922)
                .attr("y", 335.6899)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".network").transition()
                .duration(500)
                .attr("x", 331.5258)
                .attr("y", 113.1584)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".web").transition()
                .duration(500)
                .attr("x", 400.9718)
                .attr("y", 193.7323)
                .style("font-size", 21.4046).style("opacity", 1)

            d3.select(".software").transition()
                .duration(500)
                .attr("x", 384.5227)
                .attr("y", 350.6826)
                .style("font-size", 17.1237).style("opacity", 1)

            d3.select(".learning").transition()
                .duration(500)
                .attr("x", 522.7426)
                .attr("y", 318.359)
                .style("font-size", 18.5506).style("opacity", 1)

            d3.select(".international").transition()
                .duration(500)
                .attr("x", 19.4092)
                .attr("y", 84.5494)
                .style("font-size", 30.877).style("opacity", 1)

            d3.select(".development").transition()
                .duration(500)
                .attr("x", 25.3979)
                .attr("y", 381.4702)
                .style("font-size", 29.7929).style("opacity", 1)

            d3.select(".management").transition()
                .duration(500)
                .attr("x", 44.5057)
                .attr("y", 350.6822)
                .style("font-size", 22.2607).style("opacity", 1)

            d3.select(".zipcar").transition()
                .duration(500)
                .attr("x", 516.4707)
                .attr("y", 352.1899)
                .style("font-size", 20.2479).style("opacity", 1)

            d3.select(".university").transition()
                .duration(500)
                .attr("x", 371.4771)
                .attr("y", 86.2133)
                .style("font-size", 26.9123).style("opacity", 1)

            d3.select(".trust").transition()
                .duration(500)
                .attr("x", 301.4854)
                .attr("y", 177.486)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".vehicles").transition()
                .duration(500)
                .attr("x", 509.5296)
                .attr("y", 351.1821)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".system").transition()
                .duration(500)
                .attr("x", 229.5553)
                .attr("y", 341.2809)
                .style("font-size", 30.9177).style("opacity", 1)

            d3.select(".program").transition()
                .duration(500)
                .attr("x", 483.8447)
                .attr("y", 90.2075)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".innovation").transition()
                .duration(500)
                .attr("x", 284.8837)
                .attr("y", 158.1299)
                .style("font-size", 23.3072).style("opacity", 1)

            d3.select(".global").transition()
                .duration(500)
                .attr("x", 248.0223)
                .attr("y", 121.0469)
                .style("font-size", 18.2652).style("opacity", 1)

            d3.select(".future").transition()
                .duration(500)
                .attr("x", 410.4253)
                .attr("y", 86.084)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".economic").transition()
                .duration(500)
                .attr("x", 22.0046)
                .attr("y", 271.5114)
                .style("font-size", 19.9419).style("opacity", 1)

            d3.select(".design").transition()
                .duration(500)
                .attr("x", 121.4111)
                .attr("y", 287.8579)
                .style("font-size", 48.9519).style("opacity", 1)

            d3.select(".uber").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 289.6758)
                .attr("y", 182.7221)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".airbnb").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 188.0776)
                .attr("y", 128.9746)
                .style("font-size", 0)

            d3.select(".sharing").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 97.1021)
                .attr("y", 237.2036)
                .style("font-size", 26.2599)

            d3.select(".business").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 399.0625)
                .attr("y", 246.0815)
                .style("font-size", 34.9632)

            d3.select(".people").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 271.4682)
                .attr("y", 303.0339)
                .style("font-size", 39.4796)

            d3.select(".companies").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 428.5146)
                .attr("y", 122.3882)
                .style("font-size", 17.4322)

            d3.select(".services").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 480.846)
                .attr("y", 289.6648)
                .style("font-size", 11.8914)

            d3.select(".service").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 266.6479)
                .attr("y", 238.316)
                .style("font-size", 19.5019)

            d3.select(".social").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 46.7837)
                .attr("y", 174.128)
                .style("font-size", 52.6144)

            d3.select(".economy").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 63.9569)
                .attr("y", 308.2046)
                .style("font-size", 20.5513)

            d3.select(".work").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 191.1293)
                .attr("y", 187.9154)
                .style("font-size", 32.2971)

            d3.select(".platforms").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 415.3557)
                .attr("y", 341.2865)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".consumers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 143.6579)
                .attr("y", 347.3636)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".car").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 494.832)
                .attr("y", 200.1269)
                .style("font-size", 31.8816)

            d3.select(".share").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 297.3429)
                .attr("y", 267.8059)
                .style("font-size", 28.0638)

            d3.select(".drivers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 290.8599)
                .attr("y", 280.1245)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".need_alias").transition()
                .duration(500)
                .attr("x", 411.5338)
                .attr("y", 191.950)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".online").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 80.0667)
                .attr("y", 111.2845)
                .style("font-size", 17.7269)

            d3.select(".market").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 166.6978)
                .attr("y", 376.3374)
                .style("font-size", 0)

            d3.select(".model").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 143.9849)
                .attr("y", 376.2817)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".information").transition()
                .duration(500)
                .attr("x", 400.4717)
                .attr("y", 162.1295)
                .style("font-size", 32.8204)
                .style("opacity", 1)

            d3.select(".technology").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 412.3032)
                .attr("y", 392.7251)
                .style("font-size", 40.1136)

            d3.select(".access").transition()
                .duration(500)
                .attr("x", 52.0679)
                .attr("y", 193.2553)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".users").transition()
                .duration(500)
                .attr("x", 301.4854)
                .attr("y", 113.5732)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".data").transition()
                .duration(500)
                .attr("x", 293.7344)
                .attr("y", 136.6369)
                .style("font-size", 15.221)
                .style("opacity", 1)

            d3.select(".local").transition()
                .duration(500)
                .attr("x", 102.8935)
                .attr("y", 274.7949)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".workers").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 343.8481)
                .attr("y", 333.2277)
                .style("font-size", 0)

            d3.select(".home").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 4.63)
                .attr("y", 252.6274)
                .style("font-size", 0)

            d3.select(".world").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 280.96)
                .attr("y", 379.5475)
                .style("font-size", 37.3405)

            d3.select(".community").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 201.3656)
                .attr("y", 86.6757)
                .style("font-size", 33.2547)

            d3.select(".city").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 444.3035)
                .attr("y", 324.6422)
                .style("font-size", 22.8316)

            d3.select(".media").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 249.2866)
                .attr("y", 212.8847)
                .style("font-size", 28.8557)

            d3.select(".goods").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 163.1316)
                .attr("y", 329.453)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".lyft").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 257.0508)
                .attr("y", 349.4387)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".bike").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 384.8052)
                .attr("y", 336.3969)
                .style("font-size", 0)

            d3.select(".economic").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 32.3525)
                .attr("y", 270.3335)
                .style("font-size", 13.1954).style("opacity", 1)

            d3.select(".public").transition()
                .duration(500)
                .attr("x", 25.0688)
                .attr("y", 228.3877)
                .style("font-size", 15.328)
                .style("opacity", 1)

            d3.select(".money").transition()
                .duration(500)
                .attr("x", 178.8399)
                .attr("y", 284.7436)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".law").transition()
                .duration(500)
                .attr("x", 531.9443)
                .attr("y", 331.7524)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".cars").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 185.7563)
                .attr("y", 324.6421)
                .style("font-size", 15.451)
        }

        /////// FUNCTION 2008
        function f2008() {

            d3.selectAll(".tagcloud_st5_copy").classed("text_clicked", false)
            d3.selectAll(".tagcloud_st5_copy").classed("text_not_clicked", true)
            d3.selectAll(".tagcloud_st6_copy").classed("line_clicked", false)
            d3.selectAll(".tagcloud_st6_copy").classed("line_not_clicked", true)
            d3.selectAll(".tag_button").classed("clicked", false)
            d3.selectAll(".tagcloud_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#46576F")
            d3.select(this).classed("clicked", true)
            d3.select(this).select(".tagcloud_st6_copy")
                .classed("line_not_clicked", false)
                .classed("line_clicked", true)
            d3.select(this).select(".tagcloud_st5_copy")
                .classed("text_not_clicked", false)
                .classed("text_clicked", true)

            d3.select(".digital").transition()
                .duration(500)
                .attr("x", 123.4922)
                .attr("y", 335.6899)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".network").transition()
                .duration(500)
                .attr("x", 331.5258)
                .attr("y", 113.1584)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".web").transition()
                .duration(500)
                .attr("x", 403.7137)
                .attr("y", 193.7324)
                .style("font-size", 18.7624).style("opacity", 1)

            d3.select(".software").transition()
                .duration(500)
                .attr("x", 384.5227)
                .attr("y", 350.6826)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".learning").transition()
                .duration(500)
                .attr("x", 522.7426)
                .attr("y", 318.359)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".international").transition()
                .duration(500)
                .attr("x", 19.4092)
                .attr("y", 84.5494)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".development").transition()
                .duration(500)
                .attr("x", 25.3979)
                .attr("y", 381.4702)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".management").transition()
                .duration(500)
                .attr("x", 51.8267)
                .attr("y", 350.9497)
                .style("font-size", 20.7271).style("opacity", 1)

            d3.select(".zipcar").transition()
                .duration(500)
                .attr("x", 516.4707)
                .attr("y", 352.1899)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".university").transition()
                .duration(500)
                .attr("x", 371.4771)
                .attr("y", 86.2133)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".trust").transition()
                .duration(500)
                .attr("x", 301.4854)
                .attr("y", 177.486)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".vehicles").transition()
                .duration(500)
                .attr("x", 509.5296)
                .attr("y", 351.1821)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".system").transition()
                .duration(500)
                .attr("x", 229.5553)
                .attr("y", 341.2809)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".program").transition()
                .duration(500)
                .attr("x", 506.3799)
                .attr("y", 87.3144)
                .style("font-size", 10.9011).style("opacity", 1)

            d3.select(".innovation").transition()
                .duration(500)
                .attr("x", 284.8837)
                .attr("y", 158.1299)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".global").transition()
                .duration(500)
                .attr("x", 250.0223)
                .attr("y", 120.9393)
                .style("font-size", 16.4171).style("opacity", 1)

            d3.select(".future").transition()
                .duration(500)
                .attr("x", 410.4253)
                .attr("y", 86.084)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".economic").transition()
                .duration(500)
                .attr("x", 26.1528)
                .attr("y", 270.5591)
                .style("font-size", 14.1809).style("opacity", 1)

            d3.select(".design").transition()
                .duration(500)
                .attr("x", 150.6827)
                .attr("y", 278.6665)
                .style("font-size", 29.9874).style("opacity", 1)

            d3.select(".uber").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 289.6758)
                .attr("y", 182.7221)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".airbnb").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 188.0776)
                .attr("y", 128.9746)
                .style("font-size", 0)

            d3.select(".sharing").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 94.54)
                .attr("y", 243.4712)
                .style("font-size", 28.3539)

            d3.select(".business").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 387.0068)
                .attr("y", 248.1186)
                .style("font-size", 43.3237)

            d3.select(".people").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 283.7277)
                .attr("y", 298.6452)
                .style("font-size", 27.5371)

            d3.select(".companies").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 433.8734)
                .attr("y", 120.2875)
                .style("font-size", 15.0099)

            d3.select(".services").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 475.5898)
                .attr("y", 285.3432)
                .style("font-size", 14.1333)

            d3.select(".service").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 267.5635)
                .attr("y", 237.8169)
                .style("font-size", 19.4437)

            d3.select(".social").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 52.2378)
                .attr("y", 169.0312)
                .style("font-size", 47.1222)

            d3.select(".economy").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 63.9569)
                .attr("y", 310.3256)
                .style("font-size", 20.1696)

            d3.select(".work").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 190.2881)
                .attr("y", 190.8364)
                .style("font-size", 32.241)

            d3.select(".platforms").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 415.3557)
                .attr("y", 341.2865)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".consumers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 143.6579)
                .attr("y", 347.3636)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".car").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 488.1191)
                .attr("y", 203.9477)
                .style("font-size", 41.6082)

            d3.select(".share").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 298.2202)
                .attr("y", 266.8579)
                .style("font-size", 27.8503)

            d3.select(".drivers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 290.8599)
                .attr("y", 280.1245)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".need_alias").transition()
                .duration(500)
                .attr("x", 336.9219)
                .attr("y", 177.7119)
                .style("font-size", 22.5909)
                .style("opacity", 1)

            d3.select(".online").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 80.0667)
                .attr("y", 115.0747)
                .style("font-size", 28.1436)

            d3.select(".market").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 166.6978)
                .attr("y", 376.3374)
                .style("font-size", 0)

            d3.select(".model").transition()
                .duration(500)
                .attr("x", 143.9849)
                .attr("y", 376.2817)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".information").transition()
                .duration(500)
                .attr("x", 408.6777)
                .attr("y", 159.334)
                .style("font-size", 29.2435)
                .style("opacity", 1)

            d3.select(".technology").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 466.0342)
                .attr("y", 384.0288)
                .style("font-size", 13.6027)

            d3.select(".access").transition()
                .duration(500)
                .attr("x", 52.0679)
                .attr("y", 193.2553)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".users").transition()
                .duration(500)
                .attr("x", 301.4854)
                .attr("y", 113.5732)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".data").transition()
                .duration(500)
                .attr("x", 293.7344)
                .attr("y", 136.6369)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".local").transition()
                .duration(500)
                .attr("x", 94.5396)
                .attr("y", 282.7143)
                .style("font-size", 26.539)
                .style("opacity", 1)

            d3.select(".workers").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 343.8481)
                .attr("y", 333.2277)
                .style("font-size", 0)

            d3.select(".home").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 9.3584)
                .attr("y", 252.6276)
                .style("font-size", 18.1894)

            d3.select(".world").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 269.8392)
                .attr("y", 384.0287)
                .style("font-size", 43.1535)

            d3.select(".community").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 197.187)
                .attr("y", 85.6699)
                .style("font-size", 34.5022)

            d3.select(".city").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 439.0195)
                .attr("y", 326.7798)
                .style("font-size", 28.2538)

            d3.select(".media").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 245.6016)
                .attr("y", 214.0551)
                .style("font-size", 33.2664)

            d3.select(".goods").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 163.1316)
                .attr("y", 329.453)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".lyft").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 257.0508)
                .attr("y", 349.4387)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".bike").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 384.8052)
                .attr("y", 336.3969)
                .style("font-size", 0)

            d3.select(".economic").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 32.3525)
                .attr("y", 270.3335)
                .style("font-size", 13.1954).style("opacity", 1)

            d3.select(".public").transition()
                .duration(500)
                .attr("x", 13.9375)
                .attr("y", 225.8676)
                .style("font-size", 27.2497)
                .style("opacity", 1)

            d3.select(".money").transition()
                .duration(500)
                .attr("x", 178.8398)
                .attr("y", 308.09)
                .style("font-size", 30.4889).style("opacity", 1)

            d3.select(".law").transition()
                .duration(500)
                .attr("x", 531.9443)
                .attr("y", 331.7524)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".cars").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 181.6898)
                .attr("y", 327.8021)
                .style("font-size", 17.5904)
        }

        /////// FUNCTION 2007
        function f2007() {

            d3.selectAll(".tagcloud_st5_copy").classed("text_clicked", false)
            d3.selectAll(".tagcloud_st5_copy").classed("text_not_clicked", true)
            d3.selectAll(".tagcloud_st6_copy").classed("line_clicked", false)
            d3.selectAll(".tagcloud_st6_copy").classed("line_not_clicked", true)
            d3.selectAll(".tag_button").classed("clicked", false)
            d3.selectAll(".tagcloud_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#46576F")
            d3.select(this).classed("clicked", true)
            d3.select(this).select(".tagcloud_st6_copy")
                .classed("line_not_clicked", false)
                .classed("line_clicked", true)
            d3.select(this).select(".tagcloud_st5_copy")
                .classed("text_not_clicked", false)
                .classed("text_clicked", true)

            d3.select(".digital").transition()
                .duration(500)
                .attr("x", 123.4922)
                .attr("y", 335.6899)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".network").transition()
                .duration(500)
                .attr("x", 331.5258)
                .attr("y", 113.1584)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".web").transition()
                .duration(500)
                .attr("x", 393.5988)
                .attr("y", 196.6322)
                .style("font-size", 25.7333).style("opacity", 1)

            d3.select(".software").transition()
                .duration(500)
                .attr("x", 384.5227)
                .attr("y", 350.6826)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".learning").transition()
                .duration(500)
                .attr("x", 522.7426)
                .attr("y", 318.359)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".international").transition()
                .duration(500)
                .attr("x", 19.4092)
                .attr("y", 84.5494)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".development").transition()
                .duration(500)
                .attr("x", 25.3979)
                .attr("y", 381.4702)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".management").transition()
                .duration(500)
                .attr("x", 31.668)
                .attr("y", 351.6695)
                .style("font-size", 26.894).style("opacity", 1)

            d3.select(".zipcar").transition()
                .duration(500)
                .attr("x", 516.4707)
                .attr("y", 352.1899)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".university").transition()
                .duration(500)
                .attr("x", 371.4771)
                .attr("y", 86.2133)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".trust").transition()
                .duration(500)
                .attr("x", 301.4854)
                .attr("y", 177.486)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".vehicles").transition()
                .duration(500)
                .attr("x", 509.5296)
                .attr("y", 351.1821)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".system").transition()
                .duration(500)
                .attr("x", 262.0063)
                .attr("y", 339.102)
                .style("font-size", 17.6798).style("opacity", 1)

            d3.select(".program").transition()
                .duration(500)
                .attr("x", 506.3799)
                .attr("y", 87.3144)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".innovation").transition()
                .duration(500)
                .attr("x", 284.8837)
                .attr("y", 158.1299)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".global").transition()
                .duration(500)
                .attr("x", 248.7344)
                .attr("y", 120.2878)
                .style("font-size", 16.8675).style("opacity", 1)

            d3.select(".future").transition()
                .duration(500)
                .attr("x", 410.4253)
                .attr("y", 86.084)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".economic").transition()
                .duration(500)
                .attr("x", 26.1528)
                .attr("y", 270.5591)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".design").transition()
                .duration(500)
                .attr("x", 168.8779)
                .attr("y", 275.4653)
                .style("font-size", 14.3416).style("opacity", 1)

            d3.select(".uber").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 289.6758)
                .attr("y", 182.7221)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".airbnb").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 188.0776)
                .attr("y", 128.9746)
                .style("font-size", 0)

            d3.select(".sharing").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 98.8257)
                .attr("y", 248.1186)
                .style("font-size", 29.1762)

            d3.select(".business").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 391.7915)
                .attr("y", 247.7993)
                .style("font-size", 38.6827)

            d3.select(".people").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 282.7942)
                .attr("y", 294.3246)
                .style("font-size", 27.5648)

            d3.select(".companies").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 428.7361)
                .attr("y", 116.4799)
                .style("font-size", 16.2672)

            d3.select(".services").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 470.8888)
                .attr("y", 285.5796)
                .style("font-size", 16.1383)

            d3.select(".service").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 265.4707)
                .attr("y", 240.1255)
                .style("font-size", 21.645)

            d3.select(".social").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 46.8701)
                .attr("y", 170.2993)
                .style("font-size", 50.2695)

            d3.select(".economy").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 80.0667)
                .attr("y", 308.3256)
                .style("font-size", 12.3087)

            d3.select(".work").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 192.7236)
                .attr("y", 188.2821)
                .style("font-size", 29.5258)

            d3.select(".platforms").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 415.3557)
                .attr("y", 341.2865)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".consumers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 143.6579)
                .attr("y", 347.3636)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".car").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 488.5333)
                .attr("y", 204.547)
                .style("font-size", 35.7026)

            d3.select(".share").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 307.0687)
                .attr("y", 263.8725)
                .style("font-size", 16.5157)

            d3.select(".drivers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 290.8599)
                .attr("y", 280.1245)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".need_alias").transition()
                .duration(500)
                .attr("x", 336.9219)
                .attr("y", 177.7119)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".online").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 79.9176)
                .attr("y", 113.1582)
                .style("font-size", 25.6353)

            d3.select(".market").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 166.6978)
                .attr("y", 376.3374)
                .style("font-size", 19.6028)

            d3.select(".model").transition()
                .duration(500)
                .attr("x", 143.9849)
                .attr("y", 376.2817)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".information").transition()
                .duration(500)
                .attr("x", 399.2168)
                .attr("y", 160.2397)
                .style("font-size", 35.1944)
                .style("opacity", 1)

            d3.select(".technology").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 444.0196)
                .attr("y", 386.8697)
                .style("font-size", 22.7586)

            d3.select(".access").transition()
                .duration(500)
                .attr("x", 52.0679)
                .attr("y", 193.2553)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".users").transition()
                .duration(500)
                .attr("x", 301.4854)
                .attr("y", 113.5732)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".data").transition()
                .duration(500)
                .attr("x", 291.4927)
                .attr("y", 143.5962)
                .style("font-size", 21.3048)
                .style("opacity", 1)

            d3.select(".local").transition()
                .duration(500)
                .attr("x", 94.5396)
                .attr("y", 282.7143)
                .style("font-size", 26.539)
                .style("opacity", 1)

            d3.select(".workers").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 343.8481)
                .attr("y", 333.2277)
                .style("font-size", 0)

            d3.select(".home").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 9.3586)
                .attr("y", 252.6273)
                .style("font-size", 18.2351)

            d3.select(".world").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 287.3821)
                .attr("y", 382.8531)
                .style("font-size", 27.8085)

            d3.select(".community").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 219.3262)
                .attr("y", 83.5323)
                .style("font-size", 25.9934)

            d3.select(".city").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 443.6308)
                .attr("y", 325.8765)
                .style("font-size", 22.6114)

            d3.select(".media").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 245.6016)
                .attr("y", 214.0551)
                .style("font-size", 33.2664)

            d3.select(".goods").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 163.1316)
                .attr("y", 329.453)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".lyft").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 257.0508)
                .attr("y", 349.4387)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".bike").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 384.8052)
                .attr("y", 336.3969)
                .style("font-size", 0)

            d3.select(".economic").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 32.3525)
                .attr("y", 270.3335)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".public").transition()
                .duration(500)
                .attr("x", 13.9375)
                .attr("y", 225.8676)
                .style("font-size", 27.2497)
                .style("opacity", 1)

            d3.select(".money").transition()
                .duration(500)
                .attr("x", 178.8398)
                .attr("y", 308.09)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".law").transition()
                .duration(500)
                .attr("x", 536.7402)
                .attr("y", 331.7612)
                .style("font-size", 14.1219)
                .style("opacity", 1)

            d3.select(".cars").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 184.6207)
                .attr("y", 323.6782)
                .style("font-size", 9.6418)
        }

        ////// FUNCTION 2006
        function f2006() {

            d3.selectAll(".tagcloud_st5_copy").classed("text_clicked", false)
            d3.selectAll(".tagcloud_st5_copy").classed("text_not_clicked", true)
            d3.selectAll(".tagcloud_st6_copy").classed("line_clicked", false)
            d3.selectAll(".tagcloud_st6_copy").classed("line_not_clicked", true)
            d3.selectAll(".tag_button").classed("clicked", false)
            d3.selectAll(".tagcloud_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#46576F")
            d3.select(this).classed("clicked", true)
            d3.select(this).select(".tagcloud_st6_copy")
                .classed("line_not_clicked", false)
                .classed("line_clicked", true)
            d3.select(this).select(".tagcloud_st5_copy")
                .classed("text_not_clicked", false)
                .classed("text_clicked", true)

            d3.select(".digital").transition()
                .duration(500)
                .attr("x", 123.4922)
                .attr("y", 335.6899)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".network").transition()
                .duration(500)
                .attr("x", 331.5258)
                .attr("y", 113.1584)
                .style("font-size", 18.6111).style("opacity", 1)

            d3.select(".web").transition()
                .duration(500)
                .attr("x", 384.9165)
                .attr("y", 197.5581)
                .style("font-size", 31.7914).style("opacity", 1)

            d3.select(".software").transition()
                .duration(500)
                .attr("x", 384.5227)
                .attr("y", 350.6826)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".learning").transition()
                .duration(500)
                .attr("x", 522.7426)
                .attr("y", 318.359)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".international").transition()
                .duration(500)
                .attr("x", 19.4092)
                .attr("y", 84.5494)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".development").transition()
                .duration(500)
                .attr("x", 58.3728)
                .attr("y", 385.3531)
                .style("font-size", 15.8876).style("opacity", 1)

            d3.select(".management").transition()
                .duration(500)
                .attr("x", 22.1494)
                .attr("y", 353.2875)
                .style("font-size", 29.1281).style("opacity", 1)

            d3.select(".zipcar").transition()
                .duration(500)
                .attr("x", 530.2654)
                .attr("y", 347.9792)
                .style("font-size", 13.164).style("opacity", 1)

            d3.select(".university").transition()
                .duration(500)
                .attr("x", 371.4771)
                .attr("y", 86.2133)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".trust").transition()
                .duration(500)
                .attr("x", 301.4854)
                .attr("y", 177.486)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".vehicles").transition()
                .duration(500)
                .attr("x", 509.5296)
                .attr("y", 351.1821)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".system").transition()
                .duration(500)
                .attr("x", 262.0063)
                .attr("y", 339.102)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".program").transition()
                .duration(500)
                .attr("x", 506.3799)
                .attr("y", 87.3144)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".innovation").transition()
                .duration(500)
                .attr("x", 284.8837)
                .attr("y", 158.1299)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".global").transition()
                .duration(500)
                .attr("x", 240.8983)
                .attr("y", 122.3529)
                .style("font-size", 24.5673).style("opacity", 1)

            d3.select(".future").transition()
                .duration(500)
                .attr("x", 410.4253)
                .attr("y", 86.084)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".economic").transition()
                .duration(500)
                .attr("x", 23.0215)
                .attr("y", 291.7269)
                .style("font-size", 13.5827).style("opacity", 1)

            d3.select(".design").transition()
                .duration(500)
                .attr("x", 168.8779)
                .attr("y", 275.4653)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".uber").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 289.6758)
                .attr("y", 182.7221)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".airbnb").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 188.0776)
                .attr("y", 128.9746)
                .style("font-size", 0)

            d3.select(".sharing").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 93.4341)
                .attr("y", 251.1958)
                .style("font-size", 36.9907)

            d3.select(".business").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 378.8652)
                .attr("y", 252.6276)
                .style("font-size", 46.7548)

            d3.select(".people").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 273.9102)
                .attr("y", 296.0443)
                .style("font-size", 34.1545)

            d3.select(".companies").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 427.8506)
                .attr("y", 117.7705)
                .style("font-size", 16.5761)

            d3.select(".services").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 465.749)
                .attr("y", 284.685)
                .style("font-size", 22.8914)

            d3.select(".service").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 269.8389)
                .attr("y", 239.438)
                .style("font-size", 21.3131)

            d3.select(".social").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 51.4812)
                .attr("y", 170.2993)
                .style("font-size", 45.393)

            d3.select(".economy").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 65.8252)
                .attr("y", 311.8707)
                .style("font-size", 21.0401)

            d3.select(".work").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 191.6516)
                .attr("y", 188.2822)
                .style("font-size", 31.3212)

            d3.select(".platforms").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 415.3557)
                .attr("y", 341.2865)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".consumers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 488.5332)
                .attr("y", 202.3891)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".car").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 488.5333)
                .attr("y", 204.547)
                .style("font-size", 35.9267)

            d3.select(".share").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 298.2842)
                .attr("y", 263.8852)
                .style("font-size", 21.3756)

            d3.select(".drivers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 290.8599)
                .attr("y", 280.1245)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".need_alias").transition()
                .duration(500)
                .attr("x", 336.9219)
                .attr("y", 177.7119)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".online").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 93.129)
                .attr("y", 110.735)
                .style("font-size", 16.595)

            d3.select(".market").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 166.6978)
                .attr("y", 382.8531)
                .style("font-size", 29.0515)

            d3.select(".model").transition()
                .duration(500)
                .attr("x", 143.9849)
                .attr("y", 376.2817)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".information").transition()
                .duration(500)
                .attr("x", 433.8731)
                .attr("y", 156.7397)
                .style("font-size", 19.9729)
                .style("opacity", 1)

            d3.select(".technology").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 434.8652)
                .attr("y", 386.2407)
                .style("font-size", 25.5951)

            d3.select(".access").transition()
                .duration(500)
                .attr("x", 52.0679)
                .attr("y", 193.2553)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".users").transition()
                .duration(500)
                .attr("x", 301.4854)
                .attr("y", 113.5732)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".data").transition()
                .duration(500)
                .attr("x", 291.4927)
                .attr("y", 143.5962)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".local").transition()
                .duration(500)
                .attr("x", 94.5396)
                .attr("y", 282.7143)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".workers").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 343.8481)
                .attr("y", 333.2277)
                .style("font-size", 0)

            d3.select(".home").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 8.7325)
                .attr("y", 251.8208)
                .style("font-size", 17.8403)

            d3.select(".world").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 277.375)
                .attr("y", 384.2163)
                .style("font-size", 27.8085)

            d3.select(".community").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 213.82422)
                .attr("y", 83.650)
                .style("font-size", 28.6792)

            d3.select(".city").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 443.6308)
                .attr("y", 325.8765)
                .style("font-size", 0)

            d3.select(".media").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 248.7347)
                .attr("y", 214.6537)
                .style("font-size", 30.0896)

            d3.select(".goods").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 163.1316)
                .attr("y", 329.453)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".lyft").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 257.0508)
                .attr("y", 349.4387)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".bike").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 384.8052)
                .attr("y", 336.3969)
                .style("font-size", 0)

            d3.select(".economic").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 32.3525)
                .attr("y", 270.3335)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".public").transition()
                .duration(500)
                .attr("x", 16.9561)
                .attr("y", 222.6808)
                .style("font-size", 26.9219)
                .style("opacity", 1)

            d3.select(".money").transition()
                .duration(500)
                .attr("x", 178.8398)
                .attr("y", 308.09)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".law").transition()
                .duration(500)
                .attr("x", 531.9443)
                .attr("y", 331.7524)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".cars").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 182.2681)
                .attr("y", 324.9018)
                .style("font-size", 13.5485)
        }

        ////// FUNCTION 2005
        function f2005() {

            d3.selectAll(".tagcloud_st5_copy").classed("text_clicked", false)
            d3.selectAll(".tagcloud_st5_copy").classed("text_not_clicked", true)
            d3.selectAll(".tagcloud_st6_copy").classed("line_clicked", false)
            d3.selectAll(".tagcloud_st6_copy").classed("line_not_clicked", true)
            d3.selectAll(".tag_button").classed("clicked", false)
            d3.selectAll(".tagcloud_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#46576F")
            d3.select(this).classed("clicked", true)
            d3.select(this).select(".tagcloud_st6_copy")
                .classed("line_not_clicked", false)
                .classed("line_clicked", true)
            d3.select(this).select(".tagcloud_st5_copy")
                .classed("text_not_clicked", false)
                .classed("text_clicked", true)

            d3.select(".digital").transition()
                .duration(500)
                .attr("x", 123.4922)
                .attr("y", 335.6899)
                .style("font-size", 17.5225).style("opacity", 1)

            d3.select(".network").transition()
                .duration(500)
                .attr("x", 334.5258)
                .attr("y", 113.1583)
                .style("font-size", 16.8794).style("opacity", 1)

            d3.select(".web").transition()
                .duration(500)
                .attr("x", 384.9165)
                .attr("y", 197.5581)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".software").transition()
                .duration(500)
                .attr("x", 397.3798)
                .attr("y", 342.9897)
                .style("font-size", 28.5155).style("opacity", 1)

            d3.select(".learning").transition()
                .duration(500)
                .attr("x", 522.7426)
                .attr("y", 318.359)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".international").transition()
                .duration(500)
                .attr("x", 19.4092)
                .attr("y", 84.5494)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".development").transition()
                .duration(500)
                .attr("x", 55.2421)
                .attr("y", 377.8529)
                .style("font-size", 15.4877).style("opacity", 1)

            d3.select(".management").transition()
                .duration(500)
                .attr("x", 22.1494)
                .attr("y", 353.2875)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".zipcar").transition()
                .duration(500)
                .attr("x", 530.2654)
                .attr("y", 347.9792)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".university").transition()
                .duration(500)
                .attr("x", 371.4771)
                .attr("y", 86.2133)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".trust").transition()
                .duration(500)
                .attr("x", 301.4854)
                .attr("y", 177.486)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".vehicles").transition()
                .duration(500)
                .attr("x", 509.5296)
                .attr("y", 351.1821)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".system").transition()
                .duration(500)
                .attr("x", 249.1626)
                .attr("y", 344.5473)
                .style("font-size", 25.4981).style("opacity", 1)

            d3.select(".program").transition()
                .duration(500)
                .attr("x", 506.3799)
                .attr("y", 87.3144)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".innovation").transition()
                .duration(500)
                .attr("x", 284.8837)
                .attr("y", 158.1299)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".global").transition()
                .duration(500)
                .attr("x", 240.8983)
                .attr("y", 122.3529)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".future").transition()
                .duration(500)
                .attr("x", 403.6141)
                .attr("y", 86.084)
                .style("font-size", 20.0728).style("opacity", 1)

            d3.select(".economic").transition()
                .duration(500)
                .attr("x", 35.224)
                .attr("y", 295.1353)
                .style("font-size", 10.8415).style("opacity", 1)

            d3.select(".design").transition()
                .duration(500)
                .attr("x", 162.7227)
                .attr("y", 285.311)
                .style("font-size", 23.0303).style("opacity", 1)

            d3.select(".uber").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 289.6758)
                .attr("y", 182.7221)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".airbnb").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 188.0776)
                .attr("y", 128.9746)
                .style("font-size", 0)

            d3.select(".sharing").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 141.9113)
                .attr("y", 243.7752)
                .style("font-size", 12.3174)

            d3.select(".business").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 375.3535)
                .attr("y", 255.5853)
                .style("font-size", 46.9887)

            d3.select(".people").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 280.3307)
                .attr("y", 295.1353)
                .style("font-size", 29.9177)

            d3.select(".companies").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 427.8506)
                .attr("y", 116.2348)
                .style("font-size", 14.5984)

            d3.select(".services").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 467.0195)
                .attr("y", 283.688)
                .style("font-size", 21.7668)

            d3.select(".service").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 274.064)
                .attr("y", 238.5688)
                .style("font-size", 18.5448)

            d3.select(".social").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 68.291)
                .attr("y", 166.9952)
                .style("font-size", 33.2384)

            d3.select(".economy").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 65.8252)
                .attr("y", 311.8707)
                .style("font-size", 0)

            d3.select(".work").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 190.0644)
                .attr("y", 186.3066)
                .style("font-size", 31.7348)

            d3.select(".platforms").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 415.3557)
                .attr("y", 341.2865)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".consumers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 488.5332)
                .attr("y", 202.3891)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".car").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 494.4539)
                .attr("y", 198.9344)
                .style("font-size", 21.3317)

            d3.select(".share").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 304.7725)
                .attr("y", 261.2944)
                .style("font-size", 15.7012)

            d3.select(".drivers").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 290.8599)
                .attr("y", 280.1245)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".need_alias").transition()
                .duration(500)
                .attr("x", 336.9219)
                .attr("y", 177.7119)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".online").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 96.3009)
                .attr("y", 109.4263)
                .style("font-size", 14.537)

            d3.select(".market").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 184.5644)
                .attr("y", 377.853)
                .style("font-size", 18.7042)

            d3.select(".model").transition()
                .duration(500)
                .attr("x", 143.9849)
                .attr("y", 376.2817)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".information").transition()
                .duration(500)
                .attr("x", 411.875)
                .attr("y", 156.8501)
                .style("font-size", 29.302)
                .style("opacity", 1)

            d3.select(".technology").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 413.1001)
                .attr("y", 384.6987)
                .style("font-size", 32.2431)

            d3.select(".access").transition()
                .duration(500)
                .attr("x", 132.1182)
                .attr("y", 196.6928)
                .style("font-size", 10.208)
                .style("opacity", 1)

            d3.select(".users").transition()
                .duration(500)
                .attr("x", 301.4854)
                .attr("y", 113.5732)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".data").transition()
                .duration(500)
                .attr("x", 289.2275)
                .attr("y", 155.7773)
                .style("font-size", 13.9741)
                .style("opacity", 1)

            d3.select(".local").transition()
                .duration(500)
                .attr("x", 94.5396)
                .attr("y", 282.7143)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".workers").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 343.8481)
                .attr("y", 333.2277)
                .style("font-size", 0)

            d3.select(".home").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 21.456)
                .attr("y", 269.0898)
                .style("font-size", 35.4882)

            d3.select(".world").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 280.4507)
                .attr("y", 385.4673)
                .style("font-size", 32.550)

            d3.select(".community").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 230.9419)
                .attr("y", 82.7202)
                .style("font-size", 28.6792)

            d3.select(".city").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 443.6308)
                .attr("y", 325.8765)
                .style("font-size", 0)

            d3.select(".media").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 234.8437)
                .attr("y", 218.6806)
                .style("font-size", 36.496)

            d3.select(".goods").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 163.1316)
                .attr("y", 329.453)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".lyft").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 257.0508)
                .attr("y", 349.4387)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".bike").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 384.8052)
                .attr("y", 336.3969)
                .style("font-size", 0)

            d3.select(".economic").transition()
                .duration(500).style("opacity", 1)
                .attr("x", 32.3525)
                .attr("y", 270.3335)
                .style("font-size", 0).style("opacity", 0)

            d3.select(".public").transition()
                .duration(500)
                .attr("x", 21.4561)
                .attr("y", 221.7353)
                .style("font-size", 24.6773)
                .style("opacity", 1)

            d3.select(".money").transition()
                .duration(500)
                .attr("x", 197.1872)
                .attr("y", 308.0898)
                .style("font-size", 13.2298).style("opacity", 1)

            d3.select(".law").transition()
                .duration(500)
                .attr("x", 531.9443)
                .attr("y", 331.7524)
                .style("font-size", 0)
                .style("opacity", 0)

            d3.select(".cars").transition()
                .duration(500).style("opacity", 0)
                .attr("x", 182.2681)
                .attr("y", 324.9018)
                .style("font-size", 0)
        }


////////////////////////////////////////////////////////////////////////////
// FUNCTIONS FOR BUTTONS and TOOLTIP//
////////////////////////////////////////////////////////////////////////////
        
        $(document).ready(function() {



            console.log("...Intanto il js viene letto");

            // GROUP ANIMATION
            $(".group").on("mouseenter", function() {
                d3.select(this).classed("group", false);
                d3.selectAll(".group").transition().duration(300).style("opacity", 0.2);
            }).on("mouseleave", function() {
                d3.selectAll(".group").transition().duration(300).style("opacity", 1);
                d3.select(this).classed("group", true);
            })

            // BUTTON 2015
            d3.select("#button_x5F_2015").on("click", f2015)
                .on("mouseenter", function() {
                    d3.select(this).select(".tagcloud_st6")
                        .transition()
                        .attr("x2", 620)
                    d3.select(this).select(".tagcloud_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#0C4181")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("clicked")) {
                        d3.select(this).select(".tagcloud_st6")
                            .transition()
                            .attr("x2", 590.03)

                    } else {
                        d3.select(this).select(".tagcloud_st6")
                            .transition()
                            .attr("x2", 590.03)
                        d3.select(this).select(".tagcloud_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#46576F")
                    }
                });


            // BUTTON 2014 
            d3.select("#button_x5F_2014").on("click", f2014)
                .on("mouseenter", function() {
                    d3.select(this).select(".tagcloud_st6")
                        .transition()
                        .attr("x2", 560.65)
                    d3.select(this).select(".tagcloud_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#0C4181")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("clicked")) {
                        d3.select(this).select(".tagcloud_st6")
                            .transition()
                            .attr("x2", 532.13)

                    } else {
                        d3.select(this).select(".tagcloud_st6")
                            .transition()
                            .attr("x2", 532.13)
                        d3.select(this).select(".tagcloud_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#46576F")
                    }
                });


            // BUTTON 2013
            d3.select("#button_x5F_2013").on("click", f2013)
                .on("mouseenter", function() {
                    d3.select(this).select(".tagcloud_st6")
                        .transition()
                        .attr("x2", 501.67)
                    d3.select(this).select(".tagcloud_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#0C4181")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("clicked")) {
                        d3.select(this).select(".tagcloud_st6")
                            .transition()
                            .attr("x2", 473.15)
                    } else {
                        d3.select(this).select(".tagcloud_st6")
                            .transition()
                            .attr("x2", 473.15)
                        d3.select(this).select(".tagcloud_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#46576F")
                    }
                });

            // BUTTON 2012
            d3.select("#button_x5F_2012").on("click", f2012)
                .on("mouseenter", function() {
                    d3.select(this).select(".tagcloud_st6")
                        .transition()
                        .attr("x2", 442.2)
                    d3.select(this).select(".tagcloud_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#0C4181")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("clicked")) {
                        d3.select(this).select(".tagcloud_st6")
                            .transition()
                            .attr("x2", 413.67)
                    } else {
                        d3.select(this).select(".tagcloud_st6")
                            .transition()
                            .attr("x2", 413.67)
                        d3.select(this).select(".tagcloud_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#46576F")
                    }
                });

            // BUTTON 2011
            d3.select("#button_x5F_2011").on("click", f2011)
                .on("mouseenter", function() {
                    d3.select(this).select(".tagcloud_st6")
                        .transition()
                        .attr("x2", 382.58)
                    d3.select(this).select(".tagcloud_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#0C4181")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("clicked")) {
                        d3.select(this).select(".tagcloud_st6")
                            .transition()
                            .attr("x2", 354.05)
                    } else {
                        d3.select(this).select(".tagcloud_st6")
                            .transition()
                            .attr("x2", 354.05)
                        d3.select(this).select(".tagcloud_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#46576F")
                    }
                });

            // BUTTON 2010
            d3.select("#button_x5F_2010").on("click", f2010)
                .on("mouseenter", function() {
                    d3.select(this).select(".tagcloud_st6")
                        .transition()
                        .attr("x2", 324.95)
                    d3.select(this).select(".tagcloud_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#0C4181")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("clicked")) {
                        d3.select(this).select(".tagcloud_st6")
                            .transition()
                            .attr("x2", 296.42)
                    } else {
                        d3.select(this).select(".tagcloud_st6")
                            .transition()
                            .attr("x2", 296.42)
                        d3.select(this).select(".tagcloud_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#46576F")
                    }
                });

            // BUTTON 2009
            d3.select("#button_x5F_2009").on("click", f2009)
                .on("mouseenter", function() {
                    d3.select(this).select(".tagcloud_st6")
                        .transition()
                        .attr("x2", 266.54)
                    d3.select(this).select(".tagcloud_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#0C4181")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("clicked")) {
                        d3.select(this).select(".tagcloud_st6")
                            .transition()
                            .attr("x2", 238.01)
                    } else {
                        d3.select(this).select(".tagcloud_st6")
                            .transition()
                            .attr("x2", 238.01)
                        d3.select(this).select(".tagcloud_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#46576F")
                    }
                });

            // BUTTON 2008
            d3.select("#button_x5F_2008").on("click", f2008)
                .on("mouseenter", function() {
                    d3.select(this).select(".tagcloud_st6")
                        .transition()
                        .attr("x2", 208.12)
                    d3.select(this).select(".tagcloud_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#0C4181")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("clicked")) {
                        d3.select(this).select(".tagcloud_st6")
                            .transition()
                            .attr("x2", 179.59)
                    } else {
                        d3.select(this).select(".tagcloud_st6")
                            .transition()
                            .attr("x2", 179.59)
                        d3.select(this).select(".tagcloud_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#46576F")
                    }
                });

            // BUTTON 2007
            d3.select("#button_x5F_2007").on("click", f2007)
                .on("mouseenter", function() {
                    d3.select(this).select(".tagcloud_st6")
                        .transition()
                        .attr("x2", 148.97)
                    d3.select(this).select(".tagcloud_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#0C4181")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("clicked")) {
                        d3.select(this).select(".tagcloud_st6")
                            .transition()
                            .attr("x2", 120.45)
                    } else {
                        d3.select(this).select(".tagcloud_st6")
                            .transition()
                            .attr("x2", 120.45)
                        d3.select(this).select(".tagcloud_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#46576F")
                    }
                });

            // BUTTON 2006
            d3.select("#button_x5F_2006").on("click", f2006)
                .on("mouseenter", function() {
                    d3.select(this).select(".tagcloud_st6")
                        .transition()
                        .attr("x2", 89.7)
                    d3.select(this).select(".tagcloud_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#0C4181")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("clicked")) {
                        d3.select(this).select(".tagcloud_st6")
                            .transition()
                            .attr("x2", 61.18)
                    } else {
                        d3.select(this).select(".tagcloud_st6")
                            .transition()
                            .attr("x2", 61.18)
                        d3.select(this).select(".tagcloud_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#46576F")
                    }
                });

            // BUTTON 2005
            d3.select("#button_x5F_2005").on("click", f2005)
                .on("mouseenter", function() {
                    d3.select(this).select(".tagcloud_st6")
                        .transition()
                        .attr("x2", 33.62)
                    d3.select(this).select(".tagcloud_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#0C4181")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("clicked")) {
                        d3.select(this).select(".tagcloud_st6")
                            .transition()
                            .attr("x2", 2.01)
                    } else {
                        d3.select(this).select(".tagcloud_st6")
                            .transition()
                            .attr("x2", 2.01)
                        d3.select(this).select(".tagcloud_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#46576F")
                    }
                });

            // TOOLTIP companies
            var tooltip_companies = d3.select("body")
                .append("div")
                .style("position", "absolute")
                .style("z-index", "10")
                .style("background-color", "rgba(70, 87, 111, 0.6)")
                .style("visibility", "hidden")
                .style("padding", "5px")
                .style("font-family", "Cabin-Regular")
                .text("Companies")
                .style("color", "#ffffff")
                .style("font-size", "12px");

            d3.select("#Companies")
                .on("mouseover", function() {
                    return tooltip_companies.style("visibility", "visible");
                })
                .on("mousemove", function() {
                    return tooltip_companies.style("top", (event.pageY - 40) + "px").style("left", (event.pageX + 15) + "px");
                })
                .on("mouseout", function() {
                    return tooltip_companies.style("visibility", "hidden");
                });

            // TOOLTIP business 
            var tooltip_business = d3.select("body")
                .append("div")
                .style("position", "absolute")
                .style("z-index", "10")
                .style("background-color", "rgba(70, 87, 111, 0.6)")
                .style("visibility", "hidden")
                .style("padding", "5px")
                .style("font-family", "Cabin-Regular")
                .text("Business and law")
                .style("color", "#ffffff")
            .style("font-size", "12px");

            d3.select("#Business")
                .on("mouseover", function() {
                    return tooltip_business.style("visibility", "visible");
                })
                .on("mousemove", function() {
                    return tooltip_business.style("top", (event.pageY - 40) + "px").style("left", (event.pageX + 15) + "px");
                })
                .on("mouseout", function() {
                    return tooltip_business.style("visibility", "hidden");
                });
            
            // TOOLTIP tech
            var tooltip_tech = d3.select("body")
                .append("div")
                .style("position", "absolute")
                .style("z-index", "10")
                .style("background-color", "rgba(70, 87, 111, 0.6)")
                .style("visibility", "hidden")
                .style("padding", "5px")
                .style("font-family", "Cabin-Regular")
                .text("Tech")
                .style("color", "#ffffff")
            .style("font-size", "12px");

            d3.select("#Tech")
                .on("mouseover", function() {
                    return tooltip_tech.style("visibility", "visible");
                })
                .on("mousemove", function() {
                    return tooltip_tech.style("top", (event.pageY - 40) + "px").style("left", (event.pageX + 15) + "px");
                })
                .on("mouseout", function() {
                    return tooltip_tech.style("visibility", "hidden");
                });
            
            // TOOLTIP assets
            var tooltip_assets = d3.select("body")
                .append("div")
                .style("position", "absolute")
                .style("z-index", "10")
                .style("background-color", "rgba(70, 87, 111, 0.6)")
                .style("visibility", "hidden")
                .style("padding", "5px")
                .style("font-family", "Cabin-Regular")
                .text("Assets")
                .style("color", "#ffffff")
            .style("font-size", "12px");

            d3.select("#Assets")
                .on("mouseover", function() {
                    return tooltip_assets.style("visibility", "visible");
                })
                .on("mousemove", function() {
                    return tooltip_assets.style("top", (event.pageY - 40) + "px").style("left", (event.pageX + 15) + "px");
                })
                .on("mouseout", function() {
                    return tooltip_assets.style("visibility", "hidden");
                });
            // TOOLTIP theory 
            var tooltip_theory = d3.select("body")
                .append("div")
                .style("position", "absolute")
                .style("z-index", "10")
                .style("background-color", "rgba(70, 87, 111, 0.6)")
                .style("visibility", "hidden")
                .style("padding", "5px")
                .style("font-family", "Cabin-Regular")
                .text("Theory and concept")
                .style("color", "#ffffff")
            .style("font-size", "12px");

            d3.select("#Concept")
                .on("mouseover", function() {
                    return tooltip_theory.style("visibility", "visible");
                })
                .on("mousemove", function() {
                    return tooltip_theory.style("top", (event.pageY - 40) + "px").style("left", (event.pageX + 15) + "px");
                })
                .on("mouseout", function() {
                    return tooltip_theory.style("visibility", "hidden");
                });

        });


//////////// VIZ 12 categories ///////////////////////////////////////////////


function cat_2015() {
        
            // CLICK BUTTON
            d3.selectAll(".cat_st5_copy").classed("cat_text_clicked", false)
            d3.selectAll(".cat_st5_copy").classed("cat_text_not_clicked", true)
            d3.selectAll(".cat_st9_copy").classed("cat_line_clicked", false)
            d3.selectAll(".cat_st9_copy").classed("cat_line_not_clicked", true)
            d3.selectAll(".cat_button").classed("cat_clicked", false)
            d3.selectAll(".cat_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#FBF7F3")
            d3.select(this).classed("cat_clicked", true)
            d3.select(this).select(".cat_st9_copy")
                .classed("cat_line_not_clicked", false)
                .classed("cat_line_clicked", true)
            d3.select(this).select(".cat_st5_copy")
                .classed("cat_text_not_clicked", false)
                .classed("cat_text_clicked", true)
            
            // ON TREEMAP
            d3.selectAll(".cat_treemap").classed("cat_st15", true)
            d3.select("#_x32_015").classed("cat_st15", false)
    }
        
    function cat_2014() {
        
            // CLICK BUTTON
            d3.selectAll(".cat_st5_copy").classed("cat_text_clicked", false)
            d3.selectAll(".cat_st5_copy").classed("cat_text_not_clicked", true)
            d3.selectAll(".cat_st9_copy").classed("cat_line_clicked", false)
            d3.selectAll(".cat_st9_copy").classed("cat_line_not_clicked", true)
            d3.selectAll(".cat_button").classed("cat_clicked", false)
            d3.selectAll(".cat_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#FBF7F3")
            d3.select(this).classed("cat_clicked", true)
            d3.select(this).select(".cat_st9_copy")
                .classed("cat_line_not_clicked", false)
                .classed("cat_line_clicked", true)
            d3.select(this).select(".cat_st5_copy")
                .classed("cat_text_not_clicked", false)
                .classed("cat_text_clicked", true)
            
            // ON TREEMAP
            d3.selectAll(".cat_treemap").classed("cat_st15", true)
            d3.select("#_x32_014").classed("cat_st15", false)
    }
        
    function cat_2013() {
        
            // CLICK BUTTON
            d3.selectAll(".cat_st5_copy").classed("cat_text_clicked", false)
            d3.selectAll(".cat_st5_copy").classed("cat_text_not_clicked", true)
            d3.selectAll(".cat_st9_copy").classed("cat_line_clicked", false)
            d3.selectAll(".cat_st9_copy").classed("cat_line_not_clicked", true)
            d3.selectAll(".cat_button").classed("cat_clicked", false)
            d3.selectAll(".cat_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#FBF7F3")
            d3.select(this).classed("cat_clicked", true)
            d3.select(this).select(".cat_st9_copy")
                .classed("cat_line_not_clicked", false)
                .classed("cat_line_clicked", true)
            d3.select(this).select(".cat_st5_copy")
                .classed("cat_text_not_clicked", false)
                .classed("cat_text_clicked", true)
            
            // ON TREEMAP
            d3.selectAll(".cat_treemap").classed("cat_st15", true)
            d3.select("#_x32_013").classed("cat_st15", false)
    }
        
    function cat_2012() {
        
            // CLICK BUTTON
            d3.selectAll(".cat_st5_copy").classed("cat_text_clicked", false)
            d3.selectAll(".cat_st5_copy").classed("cat_text_not_clicked", true)
            d3.selectAll(".cat_st9_copy").classed("cat_line_clicked", false)
            d3.selectAll(".cat_st9_copy").classed("cat_line_not_clicked", true)
            d3.selectAll(".cat_button").classed("cat_clicked", false)
            d3.selectAll(".cat_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#FBF7F3")
            d3.select(this).classed("cat_clicked", true)
            d3.select(this).select(".cat_st9_copy")
                .classed("cat_line_not_clicked", false)
                .classed("cat_line_clicked", true)
            d3.select(this).select(".cat_st5_copy")
                .classed("cat_text_not_clicked", false)
                .classed("cat_text_clicked", true)
            
            // ON TREEMAP
            d3.selectAll(".cat_treemap").classed("cat_st15", true)
            d3.select("#_x32_012").classed("cat_st15", false)
    }
        
    function cat_2011() {
        
            // CLICK BUTTON
            d3.selectAll(".cat_st5_copy").classed("cat_text_clicked", false)
            d3.selectAll(".cat_st5_copy").classed("cat_text_not_clicked", true)
            d3.selectAll(".cat_st9_copy").classed("cat_line_clicked", false)
            d3.selectAll(".cat_st9_copy").classed("cat_line_not_clicked", true)
            d3.selectAll(".cat_button").classed("cat_clicked", false)
            d3.selectAll(".cat_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#FBF7F3")
            d3.select(this).classed("cat_clicked", true)
            d3.select(this).select(".cat_st9_copy")
                .classed("cat_line_not_clicked", false)
                .classed("cat_line_clicked", true)
            d3.select(this).select(".cat_st5_copy")
                .classed("cat_text_not_clicked", false)
                .classed("cat_text_clicked", true)
            
            // ON TREEMAP
            d3.selectAll(".cat_treemap").classed("cat_st15", true)
            d3.select("#_x32_011").classed("cat_st15", false)
    }
        
    function cat_2010() {
            d3.selectAll(".cat_st5_copy").classed("cat_text_clicked", false)
            d3.selectAll(".cat_st5_copy").classed("cat_text_not_clicked", true)
            d3.selectAll(".cat_st9_copy").classed("cat_line_clicked", false)
            d3.selectAll(".cat_st9_copy").classed("cat_line_not_clicked", true)
            d3.selectAll(".cat_button").classed("cat_clicked", false)
            d3.selectAll(".cat_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#FBF7F3")
            d3.select(this).classed("cat_clicked", true)
            d3.select(this).select(".cat_st9_copy")
                .classed("cat_line_not_clicked", false)
                .classed("cat_line_clicked", true)
            d3.select(this).select(".cat_st5_copy")
                .classed("cat_text_not_clicked", false)
                .classed("cat_text_clicked", true)
            
            // ON TREEMAP
            d3.selectAll(".cat_treemap").classed("cat_st15", true)
            d3.select("#_x32_010").classed("cat_st15", false)
    }
        
    function cat_2009() {
            d3.selectAll(".cat_st5_copy").classed("cat_text_clicked", false)
            d3.selectAll(".cat_st5_copy").classed("cat_text_not_clicked", true)
            d3.selectAll(".cat_st9_copy").classed("cat_line_clicked", false)
            d3.selectAll(".cat_st9_copy").classed("cat_line_not_clicked", true)
            d3.selectAll(".cat_button").classed("cat_clicked", false)
            d3.selectAll(".cat_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#FBF7F3")
            d3.select(this).classed("cat_clicked", true)
            d3.select(this).select(".cat_st9_copy")
                .classed("cat_line_not_clicked", false)
                .classed("cat_line_clicked", true)
            d3.select(this).select(".cat_st5_copy")
                .classed("cat_text_not_clicked", false)
                .classed("cat_text_clicked", true)
            
            // ON TREEMAP
            d3.selectAll(".cat_treemap").classed("cat_st15", true)
            d3.select("#_x32_009").classed("cat_st15", false)
    }
    
    function cat_2008() {
            d3.selectAll(".cat_st5_copy").classed("cat_text_clicked", false)
            d3.selectAll(".cat_st5_copy").classed("cat_text_not_clicked", true)
            d3.selectAll(".cat_st9_copy").classed("cat_line_clicked", false)
            d3.selectAll(".cat_st9_copy").classed("cat_line_not_clicked", true)
            d3.selectAll(".cat_button").classed("cat_clicked", false)
            d3.selectAll(".cat_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#FBF7F3")
            d3.select(this).classed("cat_clicked", true)
            d3.select(this).select(".cat_st9_copy")
                .classed("cat_line_not_clicked", false)
                .classed("cat_line_clicked", true)
            d3.select(this).select(".cat_st5_copy")
                .classed("cat_text_not_clicked", false)
                .classed("cat_text_clicked", true)
            
            // ON TREEMAP
            d3.selectAll(".cat_treemap").classed("cat_st15", true)
            d3.select("#_x32_008").classed("cat_st15", false)
    }
        
    function cat_2007() {
            d3.selectAll(".cat_st5_copy").classed("cat_text_clicked", false)
            d3.selectAll(".cat_st5_copy").classed("cat_text_not_clicked", true)
            d3.selectAll(".cat_st9_copy").classed("cat_line_clicked", false)
            d3.selectAll(".cat_st9_copy").classed("cat_line_not_clicked", true)
            d3.selectAll(".cat_button").classed("cat_clicked", false)
            d3.selectAll(".cat_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#FBF7F3")
            d3.select(this).classed("cat_clicked", true)
            d3.select(this).select(".cat_st9_copy")
                .classed("cat_line_not_clicked", false)
                .classed("cat_line_clicked", true)
            d3.select(this).select(".cat_st5_copy")
                .classed("cat_text_not_clicked", false)
                .classed("cat_text_clicked", true)
            
            // ON TREEMAP
            d3.selectAll(".cat_treemap").classed("cat_st15", true)
            d3.select("#_x32_007").classed("cat_st15", false)
    }
        
    function cat_2006() {
            d3.selectAll(".cat_st5_copy").classed("cat_text_clicked", false)
            d3.selectAll(".cat_st5_copy").classed("cat_text_not_clicked", true)
            d3.selectAll(".cat_st9_copy").classed("cat_line_clicked", false)
            d3.selectAll(".cat_st9_copy").classed("cat_line_not_clicked", true)
            d3.selectAll(".cat_button").classed("cat_clicked", false)
            d3.selectAll(".cat_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#FBF7F3")
            d3.select(this).classed("cat_clicked", true)
            d3.select(this).select(".cat_st9_copy")
                .classed("cat_line_not_clicked", false)
                .classed("cat_line_clicked", true)
            d3.select(this).select(".cat_st5_copy")
                .classed("cat_text_not_clicked", false)
                .classed("cat_text_clicked", true)
            
            // ON TREEMAP
            d3.selectAll(".cat_treemap").classed("cat_st15", true)
            d3.select("#_x32_006").classed("cat_st15", false)
    }
        
    function cat_2005() {
            d3.selectAll(".cat_st5_copy").classed("cat_text_clicked", false)
            d3.selectAll(".cat_st5_copy").classed("cat_text_not_clicked", true)
            d3.selectAll(".cat_st9_copy").classed("cat_line_clicked", false)
            d3.selectAll(".cat_st9_copy").classed("cat_line_not_clicked", true)
            d3.selectAll(".cat_button").classed("cat_clicked", false)
            d3.selectAll(".cat_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#FBF7F3")
            d3.select(this).classed("cat_clicked", true)
            d3.select(this).select(".cat_st9_copy")
                .classed("cat_line_not_clicked", false)
                .classed("cat_line_clicked", true)
            d3.select(this).select(".cat_st5_copy")
                .classed("cat_text_not_clicked", false)
                .classed("cat_text_clicked", true)
            
            // ON TREEMAP
            d3.selectAll(".cat_treemap").classed("cat_st15", true)
            d3.select("#_x32_005").classed("cat_st15", false)
    }
        
    function cat_2004() {
            d3.selectAll(".cat_st5_copy").classed("cat_text_clicked", false)
            d3.selectAll(".cat_st5_copy").classed("cat_text_not_clicked", true)
            d3.selectAll(".cat_st9_copy").classed("cat_line_clicked", false)
            d3.selectAll(".cat_st9_copy").classed("cat_line_not_clicked", true)
            d3.selectAll(".cat_button").classed("cat_clicked", false)
            d3.selectAll(".cat_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#FBF7F3")
            d3.select(this).classed("cat_clicked", true)
            d3.select(this).select(".cat_st9_copy")
                .classed("cat_line_not_clicked", false)
                .classed("cat_line_clicked", true)
            d3.select(this).select(".cat_st5_copy")
                .classed("cat_text_not_clicked", false)
                .classed("cat_text_clicked", true)
            // ON TREEMAP
            d3.selectAll(".cat_treemap").classed("cat_st15", true)
            d3.select("#_x32_004").classed("cat_st15", false)
    }
        
    function cat_2003() {
            d3.selectAll(".cat_st5_copy").classed("cat_text_clicked", false)
            d3.selectAll(".cat_st5_copy").classed("cat_text_not_clicked", true)
            d3.selectAll(".cat_st9_copy").classed("cat_line_clicked", false)
            d3.selectAll(".cat_st9_copy").classed("cat_line_not_clicked", true)
            d3.selectAll(".cat_button").classed("cat_clicked", false)
            d3.selectAll(".cat_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#FBF7F3")
            d3.select(this).classed("cat_clicked", true)
            d3.select(this).select(".cat_st9_copy")
                .classed("cat_line_not_clicked", false)
                .classed("cat_line_clicked", true)
            d3.select(this).select(".cat_st5_copy")
                .classed("cat_text_not_clicked", false)
                .classed("cat_text_clicked", true)
            
            // ON TREEMAP
            d3.selectAll(".cat_treemap").classed("cat_st15", true)
            d3.select("#_x32_003").classed("cat_st15", false)
    }
        
    function cat_2002() {
            d3.selectAll(".cat_st5_copy").classed("cat_text_clicked", false)
            d3.selectAll(".cat_st5_copy").classed("cat_text_not_clicked", true)
            d3.selectAll(".cat_st9_copy").classed("cat_line_clicked", false)
            d3.selectAll(".cat_st9_copy").classed("cat_line_not_clicked", true)
            d3.selectAll(".cat_button").classed("cat_clicked", false)
            d3.selectAll(".cat_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#FBF7F3")
            d3.select(this).classed("cat_clicked", true)
            d3.select(this).select(".cat_st9_copy")
                .classed("cat_line_not_clicked", false)
                .classed("cat_line_clicked", true)
            d3.select(this).select(".cat_st5_copy")
                .classed("cat_text_not_clicked", false)
                .classed("cat_text_clicked", true)
            
            // ON TREEMAP
            d3.selectAll(".cat_treemap").classed("cat_st15", true)
            d3.select("#_x32_002").classed("cat_st15", false)
    }
        
    function cat_2001() {
            d3.selectAll(".cat_st5_copy").classed("cat_text_clicked", false)
            d3.selectAll(".cat_st5_copy").classed("cat_text_not_clicked", true)
            d3.selectAll(".cat_st9_copy").classed("cat_line_clicked", false)
            d3.selectAll(".cat_st9_copy").classed("cat_line_not_clicked", true)
            d3.selectAll(".cat_button").classed("cat_clicked", false)
            d3.selectAll(".cat_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#FBF7F3")
            d3.select(this).classed("cat_clicked", true)
            d3.select(this).select(".cat_st9_copy")
                .classed("cat_line_not_clicked", false)
                .classed("cat_line_clicked", true)
            d3.select(this).select(".cat_st5_copy")
                .classed("cat_text_not_clicked", false)
                .classed("cat_text_clicked", true)
            
            // ON TREEMAP
            d3.selectAll(".cat_treemap").classed("cat_st15", true)
            d3.select("#_x32_001").classed("cat_st15", false)
    }
        
    function cat_2000() {
            d3.selectAll(".cat_st5_copy").classed("cat_text_clicked", false)
            d3.selectAll(".cat_st5_copy").classed("cat_text_not_clicked", true)
            d3.selectAll(".cat_st9_copy").classed("cat_line_clicked", false)
            d3.selectAll(".cat_st9_copy").classed("cat_line_not_clicked", true)
            d3.selectAll(".cat_button").classed("cat_clicked", false)
            d3.selectAll(".cat_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#FBF7F3")
            d3.select(this).classed("cat_clicked", true)
            d3.select(this).select(".cat_st9_copy")
                .classed("cat_line_not_clicked", false)
                .classed("cat_line_clicked", true)
            d3.select(this).select(".cat_st5_copy")
                .classed("cat_text_not_clicked", false)
                .classed("cat_text_clicked", true)
            
            // ON TREEMAP
            d3.selectAll(".cat_treemap").classed("cat_st15", true)
            d3.select("#_x32_000").classed("cat_st15", false)
    }
        
    function cat_1999() {
            d3.selectAll(".cat_st5_copy").classed("cat_text_clicked", false)
            d3.selectAll(".cat_st5_copy").classed("cat_text_not_clicked", true)
            d3.selectAll(".cat_st9_copy").classed("cat_line_clicked", false)
            d3.selectAll(".cat_st9_copy").classed("cat_line_not_clicked", true)
            d3.selectAll(".cat_button").classed("cat_clicked", false)
            d3.selectAll(".cat_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#FBF7F3")
            d3.select(this).classed("cat_clicked", true)
            d3.select(this).select(".cat_st9_copy")
                .classed("cat_line_not_clicked", false)
                .classed("cat_line_clicked", true)
            d3.select(this).select(".cat_st5_copy")
                .classed("cat_text_not_clicked", false)
                .classed("cat_text_clicked", true)
            
            // ON TREEMAP
            d3.selectAll(".cat_treemap").classed("cat_st15", true)
            d3.select("#_x31_999").classed("cat_st15", false)
    }
        
    function cat_1998() {
            d3.selectAll(".cat_st5_copy").classed("cat_text_clicked", false)
            d3.selectAll(".cat_st5_copy").classed("cat_text_not_clicked", true)
            d3.selectAll(".cat_st9_copy").classed("cat_line_clicked", false)
            d3.selectAll(".cat_st9_copy").classed("cat_line_not_clicked", true)
            d3.selectAll(".cat_button").classed("cat_clicked", false)
            d3.selectAll(".cat_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#FBF7F3")
            d3.select(this).classed("cat_clicked", true)
            d3.select(this).select(".cat_st9_copy")
                .classed("cat_line_not_clicked", false)
                .classed("cat_line_clicked", true)
            d3.select(this).select(".cat_st5_copy")
                .classed("cat_text_not_clicked", false)
                .classed("cat_text_clicked", true)
            
             // ON TREEMAP
            d3.selectAll(".cat_treemap").classed("cat_st15", true)
            d3.select("#_x31_998").classed("cat_st15", false)
    }
        
    function cat_1997() {
            d3.selectAll(".cat_st5_copy").classed("cat_text_clicked", false)
            d3.selectAll(".cat_st5_copy").classed("cat_text_not_clicked", true)
            d3.selectAll(".cat_st9_copy").classed("cat_line_clicked", false)
            d3.selectAll(".cat_st9_copy").classed("cat_line_not_clicked", true)
            d3.selectAll(".cat_button").classed("cat_clicked", false)
            d3.selectAll(".cat_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#FBF7F3")
            d3.select(this).classed("cat_clicked", true)
            d3.select(this).select(".cat_st9_copy")
                .classed("cat_line_not_clicked", false)
                .classed("cat_line_clicked", true)
            d3.select(this).select(".cat_st5_copy")
                .classed("cat_text_not_clicked", false)
                .classed("cat_text_clicked", true)
            
             // ON TREEMAP
            d3.selectAll(".cat_treemap").classed("cat_st15", true)
            d3.select("#_x31_997").classed("cat_st15", false)
    }
        
    function cat_1996() {
            d3.selectAll(".cat_st5_copy").classed("cat_text_clicked", false)
            d3.selectAll(".cat_st5_copy").classed("cat_text_not_clicked", true)
            d3.selectAll(".cat_st9_copy").classed("cat_line_clicked", false)
            d3.selectAll(".cat_st9_copy").classed("cat_line_not_clicked", true)
            d3.selectAll(".cat_button").classed("cat_clicked", false)
            d3.selectAll(".cat_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#FBF7F3")
            d3.select(this).classed("cat_clicked", true)
            d3.select(this).select(".cat_st9_copy")
                .classed("cat_line_not_clicked", false)
                .classed("cat_line_clicked", true)
            d3.select(this).select(".cat_st5_copy")
                .classed("cat_text_not_clicked", false)
                .classed("cat_text_clicked", true)
            
             // ON TREEMAP
            d3.selectAll(".cat_treemap").classed("cat_st15", true)
            d3.select("#_x31_996").classed("cat_st15", false)
    }
        
    function cat_1995() {
            d3.selectAll(".cat_st5_copy").classed("cat_text_clicked", false)
            d3.selectAll(".cat_st5_copy").classed("cat_text_not_clicked", true)
            d3.selectAll(".cat_st9_copy").classed("cat_line_clicked", false)
            d3.selectAll(".cat_st9_copy").classed("cat_line_not_clicked", true)
            d3.selectAll(".cat_button").classed("cat_clicked", false)
            d3.selectAll(".cat_st5")
                .style("font-family", "Cabin-Regular")
                .style("fill", "#FBF7F3")
            d3.select(this).classed("cat_clicked", true)
            d3.select(this).select(".cat_st9_copy")
                .classed("cat_line_not_clicked", false)
                .classed("cat_line_clicked", true)
            d3.select(this).select(".cat_st5_copy")
                .classed("cat_text_not_clicked", false)
                .classed("cat_text_clicked", true)
            
             // ON TREEMAP
            d3.selectAll(".cat_treemap").classed("cat_st15", true)
            d3.select("#_x31_995").classed("cat_st15", false)
    }
        
    $(document).ready(function() {
            console.log("...Intanto il js viene letto");
       
        // BUTTON 2015
            d3.select("#Cat_x5F_Button_x5F_2015")
                .on("click", cat_2015)
                .on("mouseenter", function() {
                    d3.select(this).select(".cat_st9")
                        .transition()
                        .attr("x2", 937.27)
                    d3.select(this).select(".cat_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#ffffff")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("cat_clicked")) {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 908.51)

                    } else {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 908.51)
                        d3.select(this).select(".cat_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#FBF7F3")
                    }
                });
        
        // BUTTON 2014
            d3.select("#Cat_x5F_Button_x5F_2014")
                .on("click", cat_2014)
                .on("mouseenter", function() {
                    d3.select(this).select(".cat_st9")
                        .transition()
                        .attr("x2", 893.97)
                    d3.select(this).select(".cat_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#ffffff")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("cat_clicked")) {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 865.22)

                    } else {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 865.22)
                        d3.select(this).select(".cat_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#FBF7F3")
                    }
                });
        
        // BUTTON 2013
            d3.select("#Cat_x5F_Button_x5F_2013")
                .on("click", cat_2013)
                .on("mouseenter", function() {
                    d3.select(this).select(".cat_st9")
                        .transition()
                        .attr("x2", 848.05)
                    d3.select(this).select(".cat_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#ffffff")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("cat_clicked")) {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 819.3)

                    } else {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 819.3)
                        d3.select(this).select(".cat_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#FBF7F3")
                    }
                });
        
        // BUTTON 2012
            d3.select("#Cat_x5F_Button_x5F_2012")
                .on("click", cat_2012)
                .on("mouseenter", function() {
                    d3.select(this).select(".cat_st9")
                        .transition()
                        .attr("x2", 802.9)
                    d3.select(this).select(".cat_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#ffffff")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("cat_clicked")) {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 774.14)

                    } else {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 774.14)
                        d3.select(this).select(".cat_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#FBF7F3")
                    }
                });
        
        // BUTTON 2011
            d3.select("#Cat_x5F_Button_x5F_2011")
                .on("click", cat_2011)
                .on("mouseenter", function() {
                    d3.select(this).select(".cat_st9")
                        .transition()
                        .attr("x2", 756.74)
                    d3.select(this).select(".cat_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#ffffff")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("cat_clicked")) {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 727.99)

                    } else {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 727.99)
                        d3.select(this).select(".cat_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#FBF7F3")
                    }
                });
        
        // BUTTON 2010
            d3.select("#Cat_x5F_Button_x5F_2010")
                .on("click", cat_2010)
                .on("mouseenter", function() {
                    d3.select(this).select(".cat_st9")
                        .transition()
                        .attr("x2", 712.57)
                    d3.select(this).select(".cat_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#ffffff")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("cat_clicked")) {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 683.81)

                    } else {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 683.81)
                        d3.select(this).select(".cat_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#FBF7F3")
                    }
                });
        
        // BUTTON 2009
            d3.select("#Cat_x5F_Button_x5F_2009")
                .on("click", cat_2009)
                .on("mouseenter", function() {
                    d3.select(this).select(".cat_st9")
                        .transition()
                        .attr("x2", 667.44)
                    d3.select(this).select(".cat_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#ffffff")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("cat_clicked")) {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 638.68)

                    } else {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 638.68)
                        d3.select(this).select(".cat_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#FBF7F3")
                    }
                });
        
        // BUTTON 2008
            d3.select("#Cat_x5F_Button_x5F_2008")
                .on("click", cat_2008)
                .on("mouseenter", function() {
                    d3.select(this).select(".cat_st9")
                        .transition()
                        .attr("x2", 625.38)
                    d3.select(this).select(".cat_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#ffffff")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("cat_clicked")) {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 590.44)

                    } else {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 590.44)
                        d3.select(this).select(".cat_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#FBF7F3")
                    }
                });
        
        // BUTTON 2007
            d3.select("#Cat_x5F_Button_x5F_2007")
                .on("click", cat_2007)
                .on("mouseenter", function() {
                    d3.select(this).select(".cat_st9")
                        .transition()
                        .attr("x2", 578.84)
                    d3.select(this).select(".cat_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#ffffff")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("cat_clicked")) {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 546.68)

                    } else {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 546.68)
                        d3.select(this).select(".cat_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#FBF7F3")
                    }
                });
        
        // BUTTON 2006
            d3.select("#Cat_x5F_Button_x5F_2006")
                .on("click", cat_2006)
                .on("mouseenter", function() {
                    d3.select(this).select(".cat_st9")
                        .transition()
                        .attr("x2", 535.28)
                    d3.select(this).select(".cat_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#ffffff")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("cat_clicked")) {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 503.12)

                    } else {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 503.12)
                        d3.select(this).select(".cat_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#FBF7F3")
                    }
                });
        
        
        // BUTTON 2005
            d3.select("#Cat_x5F_Button_x5F_2005")
                .on("click", cat_2005)
                .on("mouseenter", function() {
                    d3.select(this).select(".cat_st9")
                        .transition()
                        .attr("x2", 489.11)
                    d3.select(this).select(".cat_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#ffffff")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("cat_clicked")) {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 456.95)

                    } else {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 456.95)
                        d3.select(this).select(".cat_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#FBF7F3")
                    }
                });
        
        // BUTTON 2004
            d3.select("#Cat_x5F_Button_x5F_2004")
                .on("click", cat_2004)
                .on("mouseenter", function() {
                    d3.select(this).select(".cat_st9")
                        .transition()
                        .attr("x2", 444.45)
                    d3.select(this).select(".cat_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#ffffff")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("cat_clicked")) {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 412.29)

                    } else {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 412.29)
                        d3.select(this).select(".cat_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#FBF7F3")
                    }
                });
        
        // BUTTON 2003
            d3.select("#Cat_x5F_Button_x5F_2003")
                .on("click", cat_2003)
                .on("mouseenter", function() {
                    d3.select(this).select(".cat_st9")
                        .transition()
                        .attr("x2", 400.23)
                    d3.select(this).select(".cat_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#ffffff")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("cat_clicked")) {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 368.07)

                    } else {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 368.07)
                        d3.select(this).select(".cat_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#FBF7F3")
                    }
                });
        
        // BUTTON 2002
            d3.select("#Cat_x5F_Button_x5F_2002")
                .on("click", cat_2002)
                .on("mouseenter", function() {
                    d3.select(this).select(".cat_st9")
                        .transition()
                        .attr("x2", 354)
                    d3.select(this).select(".cat_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#ffffff")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("cat_clicked")) {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 321.84)

                    } else {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 321.84)
                        d3.select(this).select(".cat_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#FBF7F3")
                    }
                });
        
        // BUTTON 2001
            d3.select("#Cat_x5F_Button_x5F_2001")
                .on("click", cat_2001)
                .on("mouseenter", function() {
                    d3.select(this).select(".cat_st9")
                        .transition()
                        .attr("x2", 309.93)
                    d3.select(this).select(".cat_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#ffffff")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("cat_clicked")) {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 277.77)

                    } else {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 277.77)
                        d3.select(this).select(".cat_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#FBF7F3")
                    }
                });
        
        // BUTTON 2000
            d3.select("#Cat_x5F_Button_x5F_2000")
                .on("click", cat_2000)
                .on("mouseenter", function() {
                    d3.select(this).select(".cat_st9")
                        .transition()
                        .attr("x2", 266.78)
                    d3.select(this).select(".cat_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#ffffff")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("cat_clicked")) {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 230.61)

                    } else {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 230.61)
                        d3.select(this).select(".cat_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#FBF7F3")
                    }
                });
        
        // BUTTON 1999
            d3.select("#Cat_x5F_Button_x5F_1999")
                .on("click", cat_1999)
                .on("mouseenter", function() {
                    d3.select(this).select(".cat_st9")
                        .transition()
                        .attr("x2", 218.04)
                    d3.select(this).select(".cat_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#ffffff")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("cat_clicked")) {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 189.05)

                    } else {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 189.05)
                        d3.select(this).select(".cat_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#FBF7F3")
                    }
                });
        
        // BUTTON 1998
            d3.select("#Cat_x5F_Button_x5F_1998")
                .on("click", cat_1998)
                .on("mouseenter", function() {
                    d3.select(this).select(".cat_st9")
                        .transition()
                        .attr("x2", 172.88)
                    d3.select(this).select(".cat_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#ffffff")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("cat_clicked")) {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 143.89)

                    } else {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 143.89)
                        d3.select(this).select(".cat_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#FBF7F3")
                    }
                });
        
        // BUTTON 1997
            d3.select("#Cat_x5F_Button_x5F_1997")
                .on("click", cat_1997)
                .on("mouseenter", function() {
                    d3.select(this).select(".cat_st9")
                        .transition()
                        .attr("x2", 127.73)
                    d3.select(this).select(".cat_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#ffffff")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("cat_clicked")) {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 98.74)

                    } else {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 98.74)
                        d3.select(this).select(".cat_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#FBF7F3")
                    }
                });
        
        // BUTTON 1996
            d3.select("#Cat_x5F_Button_x5F_1996")
                .on("click", cat_1996)
                .on("mouseenter", function() {
                    d3.select(this).select(".cat_st9")
                        .transition()
                        .attr("x2", 82.17)
                    d3.select(this).select(".cat_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#ffffff")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("cat_clicked")) {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 53.18)

                    } else {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 53.18)
                        d3.select(this).select(".cat_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#FBF7F3")
                    }
                });
        
        // BUTTON 1995
            d3.select("#Cat_x5F_Button_x5F_1995")
                .on("click", cat_1995)
                .on("mouseenter", function() {
                    d3.select(this).select(".cat_st9")
                        .transition()
                        .attr("x2", 37.81)
                    d3.select(this).select(".cat_st5")
                        .transition()
                        .style("font-family", "Cabin-Medium")
                        .style("fill", "#ffffff")
                })
                .on("mouseleave", function() {
                    if ($(this).hasClass("cat_clicked")) {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 8.81)

                    } else {
                        d3.select(this).select(".cat_st9")
                            .transition()
                            .attr("x2", 8.81)
                        d3.select(this).select(".cat_st5")
                            .transition()
                            .style("font-family", "Cabin-Regular")
                            .style("fill", "#FBF7F3")
                    }
                });
        
        // HOVER
        d3.selectAll(".cat_st19")
            .on("mouseenter", function(){
                d3.select(this)
                .transition()
                .style("opacity", 1)
        }).on("mouseleave", function(){
                d3.select(this)
                .transition()
                .style("opacity", 0)
        })
    });
 
 