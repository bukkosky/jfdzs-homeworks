'use strict'

const movieListController = {
    start: function (movieList) {
        let view;
        view = new MovieListView (movieList);
        view.show();
    },
    add: function (movieList) {
        let addedMovie;
        addedMovie = new MovieCreateForm (movieList);
        addedMovie.addMovieList();
    },
    edit: function (movieList) {
        let editedMovie;
        editedMovie = new MovieListEditForm (movieList);
        editedMovie.editMovieList();
    },
    remove: function (movieList) {
        let removedMovie;
        removedMovie = new MovieListRemoveForm(movieList);
        removedMovie.removeMovieList();
    }
};


//---------------------------------------url get action----------------------------------------
function getActionFromUrl(action) {
    var pageUrl = window.location.href,
        name = action,
        regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(pageUrl);

    if (!results || !results[2]) return;
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//---------------------------------------------------------------------------
function start () {
    var requestedAction = getActionFromUrl("action");
    
    switch (requestedAction) {
        case "addMovie":
            movieStore.LoadFromLocalStorage();
            movieListController.add(movieStore.getMovieList());
            break;
        case "removeMovie": 
            movieStore.LoadFromLocalStorage();
            movieListController.remove(movieStore.getMovieList());
            break;
        case "editMovie":
            movieStore.LoadFromLocalStorage();
            movieListController.edit(movieStore.getMovieList());
            break;
        default:
            movieStore.LoadFromLocalStorage();
            movieListController.start(movieStore.getMovieList());
    }
};

let movieStore = new Store();

start();
