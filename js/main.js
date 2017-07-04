
$.noConflict();
jQuery(document).ready(function($){

	var itemNum = $(".item").length;
	var search = [];
	var title = "";
	var description = "";

    $("#search").on("keyup", function(){

        if (search != $("#search").val().split(" ")) {
        	search = $("#search").val().split(" ");

        	for (var i = 0; i < itemNum; i++) {

                var filter = false;

        		title = $(".item").eq(i).find(".title").text();
        		description = $(".item").eq(i).find(".description").text();

                for(x in search) {

                    if ( (title.search(search[x]) > -1 || description.search(search[x]) > -1) && search[x] != "" ) {
                        filter = true;
                    }

                }
        		
        		if (filter) {
        			
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