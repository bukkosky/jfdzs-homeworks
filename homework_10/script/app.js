'use strict'

var myNav = document.getElementById('myNav');

window.addEventListener('scroll', function() {
    navScroll()
});

function navScroll() {
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) { 
        document.getElementById('myNav').className = "navbar navbar-fixed-top navbar-default-on-scroll";
    } else {
        document.getElementById('myNav').className = "navbar navbar-default navbar-fixed-top";
    }
}


var btn = document.querySelector("#movie-generator");

var clrBtn = document.querySelector("#clear");

var movieList = {};

function createThumbnails(){
    
        
    movieList["FightClub"] = {
        title: "Fight Club",
        photo: "Fight_club_th.jpg",
        rating: "5/5",
        desc: "lorem Ipsum"
    }
    
    movieList["Seven"] = {
        title: "Seven",
        photo: "seven_t.jpg",
        rating: "5/5",
        desc: "lorem Ipsum"
    }
    
    movieList["ForrestGump"] = {
        title: "Forrest Gump",
        photo: "fgth.jpg",
        rating: "5/5",
        desc: "lorem Ipsum"
    }
    
    movieList["AmericanHistoryX"] = {
        title: "American History X",
        photo: "amxth.jpg",
        rating: "4/5",
        desc: "lorem Ipsum"
    }
    
      movieList["EndOfWatch"] = {
        title: "End of Watch",
        photo: "end_of_watch_posterth.jpg",
        rating: "4/5",
        desc: "lorem Ipsum"
    }
        
    movieList["GoneGirl"] = {
        title: "Gone Girl",
        photo: "gonegirlth.jpg",
        rating: "4/5",
        desc: "lorem Ipsum"
    }
    
    movieList["Inception"] = {
        title: "Inception",
        photo: "inceptionth.jpg",
        rating: "4/5",
        desc: "lorem Ipsum"
    }
    movieList["Intouchables"] = {
        title: "Intouchables",
        photo: "intouchablesth.jpg",
        rating: "4/5",
        desc: "lorem Ipsum"
    }
    
    movieList["LockStock"] = {
        title: "Lock, Stock...",
        photo: "lockth.jpg",
        rating: "4/5",
        desc: "lorem Ipsum"
    }
    
    movieList["Poklosie"] = {
        title: "Pokłosie",
        photo: "poklosieth.jpg",
        rating: "4/5",
        desc: "lorem Ipsum"
    }
    
    movieList["Prisoners"] = {
        title: "Prisoners",
        photo: "prisonersth.jpg",
        rating: "4/5",
        desc: "lorem Ipsum"
    }
    
    movieList["PulpFiction"] = {
        title: "Pulp Fiction",
        photo: "Pulp-Fiction1th.png",
        rating: "4/5",
        desc: "lorem Ipsum"
    }
    
    movieList["Requiem"] = {
        title: "Requiem For Dream",
        photo: "requiem_for_a_dream-174867645-th.jpg",
        rating: "4/5",
        desc: "lorem Ipsum"
    }
    
    movieList["ShutterIsland"] = {
        title: "Shutter Island",
        photo: "Shutter-Island-th.jpg",
        rating: "4/5",
        desc: "lorem Ipsum"
    }
    
    movieList["Snatch"] = {
        title: "Snatch",
        photo: "snatch-poster1th.jpg",
        rating: "4/5",
        desc: "lorem Ipsum"
    }
    
    movieList["Tgwdt"] = {
        title: "The Girl With Dragon Tatoo",
        photo: "tgwdt_th.jpg",
        rating: "4/5",
        desc: "lorem Ipsum"
    }
    
    movieList["TheDoors"] = {
        title: "The Doors",
        photo: "the-doorsth.jpg",
        rating: "4/5",
        desc: "lorem Ipsum"
    }
    
    movieList["Tpoh"] = {
        title: "The Pursit of Happiness",
        photo: "The-pursuit-of-happinessth.jpg",
        rating: "3/5",
        desc: "lorem Ipsum"
    }
    
    movieList["Zło"] = {
        title: "Zło",
        photo: "zlo_thumb.jpg",
        rating: "3/5",
        desc: "lorem Ipsum"
    }
    
     movieList["Room"] = {
        title: "Room",
        photo: "room_thumb.jpg",
        rating: "3/5",
        desc: "lorem Ipsum"
    }
    SaveToLocalStorage();
    window.location.href = "index.html";
};

function addTime(id) {
    var dataContainer = document.getElementById(id),
        date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth()+1,
        day = date.getDate(),
        addDate = "Data dodania filmu " + day +"-"+ month + "-"+ year + " rok";

    dataContainer.innerHTML = addDate;
};


function MovieListViewList() {
    var i;
    var container = document.getElementById("thumbnails-list");
    var movieKeys;
    
    LoadFromLocalStorage();

    if(!movieList) {
        movieList = {};
    };
    
    movieKeys = Object.keys(movieList);
    
    for(i = 0; i < movieKeys.length; i++) {
        var div = document.createElement("div"),
            newThumbnail = movieList[movieKeys[i]],
            
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
        
        div.innerHTML = template;

        container.appendChild(div);
    }
};


function SaveToLocalStorage () {
    var thumbToString = JSON.stringify(movieList);
    localStorage.setItem("thumbList", thumbToString);
};

function LoadFromLocalStorage () {
    var thumbList = localStorage.getItem("thumbList"),
        stringToObject = JSON.parse(thumbList);

    movieList = stringToObject;
};


function ClearThumbnails () {
    
    var userDecision = confirm("czy usunąć?");

    if (userDecision) {
        localStorage.setItem("thumbList", "{}");
        window.location.href = "index.html";
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

//------------------------------------------------------------------------------


function AttachedChangeEditMovie() {
    var select = document.getElementById('editSelect');

    select.addEventListener('change', function(){
         var selectMovie = movieList[select.value],
        
            form = document.forms[0];

             form.photo.value = selectMovie.photo;

             form.rating.value = selectMovie.rating;

             form.desc.value = selectMovie.desc;
    });

    var movieEditButton = document.getElementById("movieEditButton");


    movieEditButton.addEventListener("click", function(){
        var selectMovie = movieList[select.value];

        console.log(selectMovie)

        var newDate = new Date(),
            fullDate = newDate.getDate()+ "-" + (newDate.getMonth()+1) + "-" + newDate.getFullYear().toString(),
            form = document.forms[0],
            newMovie = {
                title: form.title.value,
                photo: form.photo.value,
                rating: form.rating.value,
                desc: form.desc.value,
                date: fullDate
        };
        movieList[selectMovie.value] = newMovie;
        SaveToLocalStorage();
        window.location.href = "index.html";

    })
};


function MovieListEditForm() {
    var container = document.getElementById('thumbnails-list-edit'),
        newElement = document.createElement('div'),
        template;

        LoadFromLocalStorage();

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
    
        InsertMovieOptions('editSelect');

        AttachedChangeEditMovie();

};





function addButtonListener() {
    var addButton = document.getElementById("movieAddButton");

        addButton.addEventListener('click', function(){
            var form = document.forms[0],
                newMovie = {
                    title: form.title.value,
                    photo: form.photo.value,
                    rating: form.rating.value,
                    desc: form.desc.value
                };

            if(!newMovie.title) return alert('Podaj nazwę filmu, który chcesz dodać');
            movieList[newMovie.title] = newMovie;
         
            addTime('dataContainer');

            SaveToLocalStorage();
        })
};

function MovieCreateForm() {
    var container = document.getElementById('thumbnails-list-add'),
        newElement = document.createElement('div'),        
        template;

    LoadFromLocalStorage();

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

        addButtonListener();
};




function removeButtonListener(){
    var removeButton = document.getElementById('movieDeleteButton');

    removeButton.addEventListener('click', function(){
        var form = document.forms[0],
            movieName = form.movie.value,
            select = document.getElementById('movie-select');
        
        delete movieList[movieName];
        select.remove(select.selectedIndex);

        SaveToLocalStorage();
    })
};

function MovieListRemoveForm() {
    var container = document.getElementById('thumbnails-list-delete'),
        newElement = document.createElement('div'),
        template;

        LoadFromLocalStorage();

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


    InsertMovieOptions('movie-select');

    removeButtonListener();
};

function InsertMovieOptions(id) {
    var movieKeys = Object.keys(movieList),
        optionContainer = document.getElementById(id);
  
        
    for (var i = 0; i < movieKeys.length; i++) {
        var optionElement = document.createElement("option"),
            movie = movieList[movieKeys[i]];
            

        optionElement.text = movie.title;


        optionElement.value = movieKeys[i];

        optionContainer.appendChild(optionElement);
    }
};

function start () {
    var requestedAction = getActionFromUrl("action");

    switch (requestedAction) {
        case "addMovie":
            MovieCreateForm();
            break;
        case "removeMovie": 
            MovieListRemoveForm();
            break;
        case "editMovie":
            MovieListEditForm();
            break;
        default:
            MovieListViewList();
    }
};


btn.addEventListener("click", createThumbnails);
clrBtn.addEventListener("click", ClearThumbnails);

start();
