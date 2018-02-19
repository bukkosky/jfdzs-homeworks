function jestWPrzedziale (wartosc, min, max) {
  if (!wartosc || isNaN(wartosc) || parseInt(wartosc) === NaN) return "zla wartosc";
  if (isNaN(min)) return "zly min";
  if (isNaN(max)) return "zla max";

  if (jestPozaPrzedzialem() || min > max || max < min) return "zly przedzial";

  if (wartosc > max || wartosc < min) return false;
  return true;

//  //brzydsze rozwiązanie (ale może bardziej czytelne na początek :
//   if (!wartosc || isNaN(wartosc) || parseInt(wartosc) === NaN) {
//    return "zla wartosc";
//   } else if (isNaN(min)) {
//    return "zly min";
//   } else if (isNaN(max)) {
//    return "zla max";
//   } else if (jestPozaPrzedzialem() || min > max || max < min) {
//    return "zly przedzial";
//   } else if (wartosc > max || wartosc < min) {
//    return false;
//   } else {
//    return true;  
//   }
}


function jestPozaPrzedzialem(wartosc, min, max) {
  return (wartosc > max || wartosc < min) ? true : false;

  // // bez ternary operatora (ale właśnie do takich rzeczy go się używa)
  // if  (wartosc > max || wartosc < min) {
  //  return true;
  // } else {
  //  return false;
  // }
}

function jestPozaPrzedzialemAND(wartosc, min, max) {
  return (wartosc < max && wartosc < min) || (wartosc > max && wartosc > min);
}


/* uwagi:
1. wartości graniczne - braliście pod uwagę czy nie?
2. kolejność warunków jest wazna (czasami inny spełniający warunek jest po następnym i użytkownik nie zobaczy wiadomości)
3. testy można było łatwo oszukać
4.
*/