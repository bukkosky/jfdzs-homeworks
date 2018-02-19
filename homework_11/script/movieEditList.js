function MovieListEditForm (movieList) {

    this.editMovieList = function () {
    var container = document.getElementById('thumbnails-list-edit'),
        newElement = document.createElement('div'),
        template;

       movieStore.LoadFromLocalStorage();

        template = ''
          + '<div class="form-container">'
          + '  <form>'
          + '   <h2 class="text-center">Edytuj Film</h2>'
          + '   <div class="form-group">'
          + '   <select name="title" class="form-control" id="editSelect">'
          + '   <option>--- WYBIERZ ---</option>'
          + '   </select>'
          + '   <label class="col-sm-12 control-label" for="select">Wybierz Film</label>'
          + '   </div>'
          + '   <div class="form-group">'
          + '    <input type="text" name="photo" class="form-control" id="photoSelect>'
          + '    <label class="col-sm-12 control-label" for="photo">Adres/nazwa zdjęcia</label>'
          + '   </div>'
          + '   <div class="form-group">'
          + '    <input type="text" name="rating" class="form-control" id="ratingSelect">'
          + '    <label class="col-sm-12 control-label" for="rating">Ocena</label>'
          + '   </div>'
          + '   <div class="form-group">'
          + '    <textarea name="desc" class="form-control"></textarea>'
          + '    <label class="col-sm-12 control-label" for="textarea">Twoja Recenzja</label>'
          + '   </div>'
          + '  </form>'
          + '   <div class="button-container">'
          + '   <button class="btn btn-success" type="button" id="movieEditButton"><span>Zapisz</span></button>'
          + '   </div>'
          + '</div>';
        

          newElement.innerHTML = template;
          container.appendChild(newElement);
          movieStore. InsertMovieOptions('editSelect');
          movieStore.AttachedChangeEditMovie();
        }
       
};
