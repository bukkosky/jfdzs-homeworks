function MovieListRemoveForm() {

    this.removeMovieList = function () {
    var container = document.getElementById('thumbnails-list-delete'),
        newElement = document.createElement('div'),
        template;

        movieStore.LoadFromLocalStorage();

        template = ''
          + '<div class="form-container">'
          + '  <form>'
          + '   <h2 class="text-center">Usuń Film</h2>'
          + '   <div class="form-group">'
          + '   <select name="movie" id="movie-select" class="form-control">'
          + '   <option>--- WYBIERZ ---</option>'
          + '   </select>'
          + '   <label class="col-sm-12 control-label" for="select">Wybierz Film</label>'
          + '   </div>'
          + '  </form>'
          + '   <div class="button-container">'
          + '   <button class="btn btn-danger" type="button" id="movieDeleteButton"><span>Usuń</span></button>'
          + '   </div>'
          + '</div>';

          newElement.innerHTML = template;
          container.appendChild(newElement);
          movieStore.InsertMovieOptions('movie-select');
          movieStore.removeMovieListener();
    }
};
