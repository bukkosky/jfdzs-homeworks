function MovieListView (movieList) {
    
    this.show = function () {
        let container = document.getElementById("thumbnails-list"),
            listKeys;

        listKeys = Object.keys(movieList);

        for(let i = 0; i < listKeys.length; i++) {

            let newElement = document.createElement("div"),
                newThumbnail = movieList[listKeys[i]],
                template;
            
        template = ''
            + '  <div class="col-xs-6 col-sm-4 col-md-3">'
            + '   <div class="movieList">'
            + '     <img src="images/' + newThumbnail.photo + '" class="img-responsive">'
            + '     <p class="subtitle">' + '"Zobacz Wiecej"' + '</p>' + '</a>'
            + '     <span class="thumbnail-title">' + newThumbnail.title + '</span>'
            + '     <p>' + newThumbnail.desc + '</p>'     
            + '     <p>' + newThumbnail.rating + '</p>'
            + '     <div id="date"></div>'
            + '    </div>'
            + '  </div>';
        
        newElement.innerHTML = template;
        container.appendChild(newElement);
        }
    }
};
