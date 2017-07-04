$.noConflict();
jQuery(document).ready(function($){

	var itemNum = $(".item").length;
	var search = "";
	var title = "";
	var description = "";

    $("#search").on("keyup", function(){

        if (search != $("#search").val()) {
        	search = $("#search").val();

        	for (var i = 0; i < itemNum; i++) {
        		title = $(".item").eq(i).find(".title").text();
        		description = $(".item").eq(i).find(".description").text();
        		
        		if (title.search(search) > -1 || description.search(search) > -1 ) {
        			
        			if ( $(".item").eq(i).css("display") === "none" ) {
        				$(".item").eq(i).removeClass("hide").fadeIn("slow");
        			}

        		} else {
					
        			$(".item").eq(i).addClass("hide").fadeOut("slow");

        		}
        	}
        }

        if ($(".item:not('.hide')").length <= 0) {
        		$("#no-result").removeClass("hide");
        	} else {
        		$("#no-result").addClass("hide");
        	}

    });
});