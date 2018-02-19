# Zadanie 10
*Termin:* 28.01.2018

Zadanie polega na zrealizowaniu następujących zadań:

1. Zadanie wykonujemy w folderze *homework_10* na branchu {imie-nazwisko}
1. W odpowiednim katalogu powinny zostać wykonane poniższe rozwiązania zadań, rozwinięcie zadania z listą filmów [*homework_8*](../homework_8/homework_8.md),

1. **Lista filmów** - polega na:
    + dodaniu do swojego kodu możliwości usuwania wybranego filmu z listy.
    + dodanie dodwania filmu z określonymi wartościami.
    + dodaniu możliwości edycji wybranego filmu z listy.
        + dodanie edycji kroki:
            1. nowy action, nowy case
            1. nowa funkcja `EditFilmFromList`
            1. wyswietlenie formularza edycji, dodanie `div` z `id` do html i odwołanie do niego.
            1. pobrać listę z `localStorage`
            1. stworzyć `option` dla `select` z listą filmów
            1. po wybraniu danego tytułu wypełnić formularz danymi z wybranego obiektu
            `selectById.addEventListner('change', function(){})`
            1. addEventListner do przycisku na submit do zmiany danych
            1. W obiekcie filmów znajdujemy wybrany film, nadpisujemy go nowymi danymi.
            1. zapisujemy do `localStorage`,
            1. czyścimy formularz.

    **ważne** do każdej funkcji należy dodać templatkę (div wyświetlający dany formularz, [analogicznie do zajęć *rent-a-hero--basic*][https://github.com/infoshareacademy/jfdzs1-materialy-js-struktury-danych/tree/master/rent-a-hero--basic-js-na-zajeciach], odpowiednią do dodwania/usuwania/edycji, a także dodać przyciski tworzenie tych widoków do nawigacji strony.

    *Możecie skorzystać z gotowych templatek z herosów, ale dostosujcie je do wyglądu swojej strony*

    **Do zaliczenia zadania potrzebne jest wykonanie jednego z niżej wymienionych podpunktów**:

    + **AD.1** użycie pętli `for ... in` przy liście filmów
    + **AD.2** dodanie do nowo utworzonego obiektu filmu, datę kiedy nowy film został dodany. Przesłanie jej w postaci `timestamp`, a następnie na stronie wyświetlenie `data dodania filmu` jako format daty (day-month-year).
    + **AD.3** zamiast używania pętli `forEach` użyjcie `reduce`.


1. **Ważne:** Pamiętajcie o zmergowaniu `mastera` do swojego brancha {imie-nazwisko}.
1. **Ważne:** Pamiętajcie o dobrych praktykach, pliki powinny być w odpowiednio nazwanych katalogach, a kod dobrze uporządkowany.

1. **Ważne:** Link do zadań, które robiliście na zajęciach z *Przetwarzania danych* znajdziecie [tutaj](https://github.com/infoshareacademy/jfdzs1-materialy-js-struktury-danych/).
1. **Ważne:** W razie problemów, wątpliwości możecie się kontaktować ze mną na slacku (@aslowikowska) lub z Łukaszem (@bodurkalukasz).

# Oczekiwany rezultat
W repozytorium homeworks, na branchu {imie-nazwisko} w katalogu {homework_10}, zostanie poprawnie wykonane zadanie, z wykorzystaniem wiedzy z przetwarzaniem danych w języku JS.

# Punktacja
Za zadanie można otrzymać 3 punkty, jeśli zostaną wykonane wszystkie trzy zadania AD.1,2,3 można uzyskać dodatkowe 2 pkty.
