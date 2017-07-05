
$.noConflict();

jQuery(document).ready(function($){

    var search = [];

    function creatPhoto(i) {

        if (!photos[i].hide) {
            var html = '<div class="item">';
            html += '<a href="photos/' + (i + 1) + '.jpg"';
            html += ' data-lightbox="image-group"'
            html += ' data-title="' + photos[i].title + ' - ' + photos[i].description + '"">';
            html += '<img src="photos/thumbnails/' + (i + 1) + '.jpg">';
            html += '<div class="overlay">';
            html += '<h2 class="title">' + photos[i].title + '</h2>';
            html += '<p class="description">' + photos[i].description;
            html += '</p></div></a></div>'
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

    
});