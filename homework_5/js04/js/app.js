function jestWPrzedziale(wartosc, min, max) {
    if(isNaN(wartosc)) {
        return 'zla wartosc'
    } else if(isNaN(min)) {
        return 'zly min'
    } else if(isNaN(max)) {
        return 'zla max'
    } else if (wartosc>min && wartosc<max) {
        return true
    } else if (min>=max) {
        return 'zly przedzial'
    } else {
        return false
    }
}



  // TODO: zwróć 'zla wartosc' jeśli nie podano wartości


  /*
    TODO: zwróć 'zla wartosc' jeśli wartość nie jest liczbą
    lub nie jest ciągien znaków reprezentującym liczbę
  */
  // TODO: zwróć 'zly min' jeśli min nie jest liczbą
  // TODO: zwróć 'zla max' jeśli max nie jest liczbą
  // TODO: zwróć 'zly przedzial' jeśli przedzial nie jest poprawny
  // TODO: zwróć true jeśli wartość jest w przedziale min .. max  


function jestPozaPrzedzialem(wartosc, min, max) {
    if (wartosc < min || wartosc > max) {
        return true
    } else {
        return false
    }
}
  // TODO: zwroc true jesli wartosc jest poza przedzialem min .. max



function jestPozaPrzedzialemAND(wartosc, min, max) {
    if (wartosc >= min && wartosc <= max) {
        return false
    } else {
        return true
    }
}
  /*
    TODO: zwroc true jesli wartosc jest poza przedzialem min .. max
    użyj '&&'
  */

