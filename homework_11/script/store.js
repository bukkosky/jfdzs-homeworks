function Store () {

    let movieList = {};

    this.createNewMovie = createNewMovie,
    this.getMovieList = getMovieList,
    this.SaveToLocalStorage = SaveToLocalStorage,
    this.LoadFromLocalStorage = LoadFromLocalStorage,
    this.ClearThumbnails = ClearThumbnails,
    this.loadDemo = _createMockData,
    this.addNewMovieListener = addNewMovieListener,
    this.AttachedChangeEditMovie = AttachedChangeEditMovie,
    this.InsertMovieOptions = InsertMovieOptions,
    this.removeMovieListener = removeMovieListener


    function removeMovieListener () {
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
    
            var form = document.forms[0],
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

    function addNewMovieListener() {
        let addButton = document.getElementById("movieAddButton");
        addButton.addEventListener("click", function () {
            var form = document.forms[0],
            newMovie = {
                title: form.title.value,
                photo: form.photo.value,
                rating: form.rating.value,
                desc: form.desc.value
            };

        if(!newMovie.title) return alert('Podaj nazwę filmu, który chcesz dodać');
        movieList[newMovie.title] = newMovie;
     
        SaveToLocalStorage();
        })
    }


    function createNewMovie(title, photo, rating, desc) {
        movieList[title] = new Movie(title, photo, rating, desc);
        SaveToLocalStorage();
    }


    function getMovieList () {
        return movieList;
    }
   
    function SaveToLocalStorage () {
        var thumbToString = JSON.stringify(movieList);
        localStorage.setItem("thumbList", thumbToString);
    }

    function LoadFromLocalStorage () {
        var thumbList = localStorage.getItem("thumbList"),
            stringToObject = JSON.parse(thumbList);

        if(!stringToObject) return {};    

        movieList = stringToObject;
    }


    function ClearThumbnails () {
        
        var userDecision = confirm("czy usunąć?");

        if (userDecision) {
            localStorage.removeItem("thumbList");
            _reloadPage();
        }
    }

    function _createMockData () {
        createNewMovie("Fight Club", "Fight_club_th.jpg", "5/5", "Lorem Ipsum..." );
        createNewMovie("Pulp Fiction", "Pulp-Fiction1th.png", "4/5", "Lorem Ipsum..");
        createNewMovie("Requiem for Dream", "requiem_for_a_dream-174867645-th.jpg", "4/5", "Lorem Ipsum..");
        createNewMovie("Snatch", "snatch-poster1th.jpg", "4/5", "Lorem Ipsum..");

        _reloadPage();
    }

    function _reloadPage () {
        window.location.href = "index.html";
    }

    function Movie (title, photo, rating, desc) {
        this.title = title;
        this.photo = photo;
        this.rating = rating;
        this.desc = desc;
    }

};

