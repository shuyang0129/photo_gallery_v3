
$.noConflict();

jQuery(document).ready(function($){

    var search = [];

    function creatPhoto(i) {

        if (!photos[i].hide) {
            var html = '<div class="item">';
            html += '<a href="photos/' + (i + 1) + '.jpg"';
            html += ' data-lightbox="image-group"';
            html += ' data-title="' + photos[i].title + ' - ' + photos[i].description + '"">';
            html += '<img src="photos/thumbnails/' + (i + 1) + '.jpg">';
            html += '<div class="overlay">';
            html += '<h2 class="title">' + photos[i].title + '</h2>';
            html += '<p class="description">' + photos[i].description;
            html += '</p></div></a></div>';
            return html;
        }

    }//creatPhoto func

    function createGallery(fileName, placeholder) {

        $(placeholder).empty();

        for (var i = 0; i < fileName.length; i++) {
            $(placeholder).append(creatPhoto(i));
        }

    }//createGallery func

    createGallery(photos, ".grid");

    $("#search").on("keyup", function(){
        
        var userInput = $("#search").val().split(" ");

        if (search != userInput) { // Don't do anything if the input did not change
            
            search = userInput;

            if (search == "") { // If search input is empty, show entire gallery

                for (var j in photos) {

                    if (photos[j].hide) {
	                    photos[j].hide = false;
	                }

                }

                createGallery(photos, ".grid");

            } else {
                
                for (var i in photos) {

                    var check = false; //check if anything match user input
                    var content = photos[i].title + " " + photos[i].description;

                    for(var x in search) {

                        if ( content.search(search[x]) > -1 && search[x] != "" ) {
                            check = true;
                        }

                    }
                    
                    if (check === true && photos[i].hide === true) {

                        photos[i].hide = false;

                    } else if( check === false && photos[i].hide === false ) {
                        
                        photos[i].hide = true;

                    }

                }

                createGallery(photos, ".grid");

            }
        }

        // Show/Hide the text when no result found
        if ($(".item:not('.hide')").length <= 0) {
                
                $("#no-result").removeClass("hide");

            } else {
                
                $("#no-result").addClass("hide");
                
            }

    });
});