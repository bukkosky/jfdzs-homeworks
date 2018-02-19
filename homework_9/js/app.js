'use strict'

var heroes = {};

// towrzymy pusty obiekt o nazwie heroes

function CreateHeroesData () {
    heroes["Batman"] = {
        name: "Batman",
        photo: "batman.jpg",
        price: 200,
        desc: "Hejka, jestem batmanem dksfjsdlkfj ldjf sldkfj sdlkjf sldkjf lskdfj lksdsd fjlds lksd"
    }

    heroes["Superman"] = {
        name: "Superman",
        photo: "superman.jpg",
        price: 500,
        desc: "Lorem ipsum..."
    }

    heroes["Thor"] = {
        name: "Thor",
        photo: "thor.jpg",
        price: 1000,
        desc: "Lorem Lorem Lorem..."
    }

    // tworzymy funkcję, która dodaje właściwości obiektu heroes

    SaveToLocalStorage();//wywołanie funkcji
    window.location.href = "index.html"; // to przechodzi do adresu index.html

}


function CreateHeroesListView () {

    //definiujemy funkcję, której zadaniem jest wywołanie listy herosów
    var container = document.getElementById("heroes-list-region"), // uchwyt do diva
        heroesKeys; 

    LoadFromLocalStorage();//wywołanie funkcji 

    heroesKeys = Object.keys(heroes);// do utworzonej zmiennej przypisujemy metodę Object.keys, która zwraca tablicę właściwości obiektu heroes
    console.log(heroesKeys);

    for (var i = 0; i < heroesKeys.length; i++) { //iteracja po długości wyżej stworzonej zmiennej
        var newElement = document.createElement("div"), //pętla tworzy nowy div
            selectedHero = heroes[heroesKeys[i]],//definiujemy zmienną, dla której pętla iteruje po właściwościach tablicy z obiektu heroes
            template;

        template = '' //do zmiennej przypisujemy szkielet diva wraz z iteracją po wskazanych właściwościach 
            + '<div class="hero-item">'
            + '   <div>'
            + '      <img src="images/heroes/' + selectedHero.photo + '">'
            + '   </div>'
            + '<div>'
            + '<span>' + selectedHero.name + '</span>'
            + '<span>' + selectedHero.price + ' zł/h</span>'
            + '</div>'
            + '</div>';

        newElement.innerHTML = template; //do diva utworzonego podczas iteracji pętli dopisujemy zawartość zmiennej template
        container.appendChild(newElement); //dopisujemy diva do utworzonej zmiennej container odwołującej się do "heroes-list-region" w index.html

    }
}

function SaveToLocalStorage () { //funkcja zapisująca do local stora
    var heroesToString = JSON.stringify(heroes); //zmienna konwerrtująca właściwości obiektu w łańcuch tekstowy
    localStorage.setItem("herosList", heroesToString);//metoda setItem dodająca klucz do pamięci
}

function LoadFromLocalStorage () {
    var herosList = localStorage.getItem("herosList"),// metoda getItem zwraca wartość klucza
        stringToObject = JSON.parse(herosList); //definiujemy zmienną przypisując jej parsowanie łańcuch do obiektu JS

    heroes = stringToObject;//przypisanie zawarotości powyższej zmiennej do obiektu heroes
}

function ClearAllHeroesData () { //definiujemy funckję usuwającą listę herosów
    var userDecision = confirm("Hejka, czy serio chcesz usunac?"); // zapytanie do użytkownika 

    if (userDecision) { 
        localStorage.setItem("herosList", "{}"); //metoda zmieniająca klucz na pusty obiekt
        window.location.href = "index.html"; // to przechodzi do adresu index.html
    }


}

CreateHeroesListView();// wywołanie funkcji