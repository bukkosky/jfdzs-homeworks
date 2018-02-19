function MovieCreateForm (movieList) {

    this.addMovieList = function () {
    var container = document.getElementById('thumbnails-list-add'),
        newElement = document.createElement('div'),        
        template;

    movieStore.LoadFromLocalStorage();

        template = ""
        + '<div class="form-container">'
        + '<form>'
        + '    <h2 class="text-center">Dodaj Swój Ulubiony Film</h2>'
        + '<div class="form-group">'
        + '    <input type="text" name="title" required="required" class="form-control">'
        + '    <label class="col-sm-12 control-label" for="title">Nazwa Filmu</label>'
        + '</div>'
        + '<div class="form-group">'
        + '    <input type="text" name="photo"class="form-control">'
        + '    <label class="col-sm-12 control-label" for="photo">Adres/nazwa zdjęcia</label>'
        + '</div>'
        + '<div class="form-group">'
        + '    <input type="text" name="rating" class="form-control">'
        + '    <label class="col-sm-12 control-label" for="rating">Ocena</label>'
        + '</div>'
        + '<div class="form-group">'
        + '    <textarea class="form-control" name="desc"></textarea>'
        + '    <label class="col-sm-12 control-label" for="textarea">Twoja Recenzja</label>'
        + '</div>'
        + '</form>'
        + '<div id="dataContainer"></div>'
        + '<div class="button-container">'
        + '    <button class="btn btn-primary" id="movieAddButton"><span>Zapisz</span></button>'
        + '</div>'
        + '</div>';

        newElement.innerHTML = template;
        container.appendChild(newElement);
        movieStore.addNewMovieListener();
    }
};