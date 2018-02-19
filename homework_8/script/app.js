'use strict'




var btn = document.querySelector("#movie-generator");

var clrBtn = document.querySelector("#clear");

var movieList = {};

function createThumbnails(){
    
        
    movieList["FightClub"] = {
        title: "Fight Club",
        photo: "Fight_club_th.jpg",
        rating: "5/5"
    }
    
    movieList["Seven"] = {
        title: "Seven",
        photo: "seven_t.jpg",
        rating: "5/5"
    }
    
    movieList["ForrestGump"] = {
        title: "Forrest Gump",
        photo: "fgth.jpg",
        rating: "5/5"
    }
    
    movieList["AmericanHistoryX"] = {
        title: "American History X",
        photo: "amxth.jpg",
        rating: "4/5"
    }
    
      movieList["EndOfWatch"] = {
        title: "End of Watch",
        photo: "end_of_watch_posterth.jpg",
        rating: "4/5"
    }
        
    movieList["GoneGirl"] = {
        title: "Gone Girl",
        photo: "gonegirlth.jpg",
        rating: "4/5"
    }
    
    movieList["Inception"] = {
        title: "Inception",
        photo: "inceptionth.jpg",
        rating: "4/5"
    }
    movieList["Intouchables"] = {
        title: "Intouchables",
        photo: "intouchablesth.jpg",
        rating: "4/5"
    }
    
    movieList["LockStock"] = {
        title: "Lock, Stock...",
        photo: "lockth.jpg",
        rating: "4/5"
    }
    
    movieList["Poklosie"] = {
        title: "Pokłosie",
        photo: "poklosieth.jpg",
        rating: "4/5"
    }
    
    movieList["Prisoners"] = {
        title: "Prisoners",
        photo: "prisonersth.jpg",
        rating: "4/5"
    }
    
    movieList["PulpFiction"] = {
        title: "Pulp Fiction",
        photo: "Pulp-Fiction1th.png",
        rating: "4/5"
    }
    
    movieList["Requiem"] = {
        title: "Requiem For Dream",
        photo: "requiem_for_a_dream-174867645-th.jpg",
        rating: "4/5"
    }
    
    movieList["ShutterIsland"] = {
        title: "Shutter Island",
        photo: "Shutter-Island-th.jpg",
        rating: "4/5"
    }
    
    movieList["Snatch"] = {
        title: "Snatch",
        photo: "snatch-poster1th.jpg",
        rating: "4/5"
    }
    
    movieList["Tgwdt"] = {
        title: "The Girl With Dragon Tatoo",
        photo: "tgwdt_th.jpg",
        rating: "4/5"
    }
    
    movieList["TheDoors"] = {
        title: "The Doors",
        photo: "the-doorsth.jpg",
        rating: "4/5"
    }
    
    movieList["Tpoh"] = {
        title: "The Pursit of Happiness",
        photo: "The-pursuit-of-happinessth.jpg",
        rating: "3/5"
    }
    
    movieList["Zło"] = {
        title: "Zło",
        photo: "zlo_thumb.jpg",
        rating: "3/5"
    }
    
     movieList["Room"] = {
        title: "Room",
        photo: "room_thumb.jpg",
        rating: "3/5"
    }
    SaveToLocalStorage();
    window.location.href = "index.html";
};



function thumbnailsViewList() {
    var i;
    var container = document.getElementById("thumbnails-list");
    var movieKeys;
    
    LoadFromLocalStorage();

    if(!movieList) {
        movieList = {};
    };
    
    movieKeys = Object.keys(movieList);
    // console.log(movieKeys);
    
    for(i = 0; i < movieKeys.length; i++) {
        var div = document.createElement("div"),
            newThumbnail = movieList[movieKeys[i]],
            template;
            
        template = ''
            + '  <div class="col-xs-6 col-md-3">'
            + '   <div class="movieList">'
            + '     <a href="#" class="thumb">' 
            + '     <img src="images/' + newThumbnail.photo + '" class="img-responsive">'
            + '     <p class="subtitle">' + '"Zobacz Wiecej"' + '</p>' + '</a>'
            + '     <span>' + newThumbnail.title + '</span>'
            + '     <span>' + newThumbnail.rating + '</span>'     
            + '    </div>'
            + '  </div>'
        
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
    console.log(movieList);
};


function ClearThumbnails () {
    
    var userDecision = confirm("czy usunąć?");

    if (userDecision) {
        localStorage.setItem("thumbList", "{}");
        window.location.href = "index.html";
    }
};

thumbnailsViewList()


btn.addEventListener("click", createThumbnails);
clrBtn.addEventListener("click", ClearThumbnails);
