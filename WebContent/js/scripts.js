'use strict';
	$.scrollify({
		section : ".box",
		scrollbars:"false",
		interstitialSection : "#header,#footer",
		easing: "swing", 
		scrollSpeed: 500, 
	
	
		before:function(i,panels) {
			var ref = panels[i].attr("data-section-name");
			$(".pagination .active").removeClass("active");
			$(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
		},
		afterRender:function() {
			var pagination = "<ul class=\"pagination\">";
			var activeClass = "";
			$(".box").each(function(i) {
				activeClass = "";
				if(i===$.scrollify.currentIndex()) {
					activeClass = "active";
				}
				pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
			});
			pagination += "</ul>";
	
			$("#box1").append(pagination);
			$(".pagination a").on("click",$.scrollify.move);
		}
	
	});
	
	$('#page-top').click(function () {
	    	$('body,html').animate({
	        scrollTop: 0
	    }, 500);
	    return false;
	});
	
