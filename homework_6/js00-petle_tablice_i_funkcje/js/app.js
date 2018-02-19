(function attachListeners() {
    var wpisanyOwoc = document.getElementById("wpiszOwoc"),
        sprawdzButton = document.getElementById("sprawdzButton");

    sprawdzButton.addEventListener('click', function(event) {
        onButtonClicked(wpisanyOwoc.value);
    });
})();

function onButtonClicked (nazwaOwocu) {
    var loader = document.getElementById("loader");
    loader.style.display = "inline-block";
    setTimeout(hideLoader('nazwaOwocu'), 2000);
};
function hideLoader() {
      loader.style.display = "hidden";
      alert(czyMamWKoszyku('nazwaOwocu'));
};

function czyMamWKoszyku(owoc) {
    var iloscOwocow = Math.floor(Math.random() *10) + 1;
    if(!owoc) return "Musisz podać owoc";
    switch(owoc) {
        case "Banana":
            if(iloscOwocow == 1) {
                return "Tak, masz w koszyku " + iloscOwocow + " Banana"
            } else if (iloscOwocow >= 2 && iloscOwocow <= 4) {
                return "Tak, masz w koszyku " + iloscOwocow + " Banany"
            } else {
                return "Tak, Masz w koszyku " + iloscOwocow + " Bananów"
            };
            break;
        case "Jabłko":
            if(iloscOwocow == 1) {
                return "Tak, masz w koszyku " + iloscOwocow + " Jabłko"
            } else if (iloscOwocow >= 2 && iloscOwocow <= 4) {
                return "Tak, masz w koszyku " + iloscOwocow + " Jabłka"
            } else {
                return "Tak, Masz w koszyku " + iloscOwocow + " Jabłek"
            };
            break;
        case "Mandarynkę":
            if(iloscOwocow == 1) {
                return "Tak, masz w koszyku " + iloscOwocow + " Mandarynkę"
            } else if (iloscOwocow >= 2 && iloscOwocow <= 4) {
                return "Tak, masz w koszyku " + iloscOwocow + " Mandarynki"
            } else {
                return "Tak, Masz w koszyku " + iloscOwocow + " Mandarynek"
            };
            break;
        case "Melona":
            if(iloscOwocow == 1) {
                return "Tak, masz w koszyku " + iloscOwocow + " Melon"
            } else if (iloscOwocow >= 2 && iloscOwocow <= 4) {
                return "Tak, masz w koszyku " + iloscOwocow + " Melony"
            } else {
                return "Tak, Masz w koszyku " + iloscOwocow + " Melonów"
            };
            break;
        case "Ziemniaka":
        case "Marchewkę":
        case "Kartofle":
        case "Szpinak":
            return "Podałeś warzywo a w koszyku masz tylko owoce!"
            break;
        default:
            return "Nie masz tego w koszyku"
    }
}

function czyJestWarzywem(warzywo) {
    var listaWarzyw = ["Ziemniaka", "Marchewkę", "Buraka", "Kalafiora", "Kapustę", "Cukinię", "Ogórka", "Grzyby shiitake"];

    for (var i = 0; i < listaWarzyw.length; i++) {
        if (listaWarzyw[i] === warzywo) return true;
    }
    return false;
}
// w każdej iteracji pętli ma być sprawdzane czy pasuje ona do któregoś z warzyw.
// jesli tak, funkcja ma zwrócić TRUE w przypadku jeśli podana wartość nie jest warzywem zwracamy false
