# Zadanie 8
*Termin:* 13.01.2018

Zadanie polega na zrealizowaniu następujących zadań:

1. Zadanie wykonujemy w folderze *homework_8* na branchu {imie-nazwisko}
1. W odpowiednim katalogu powinny zostać wykonane poniższe rozwiązania zadań, analogicznie do zajęć z *Programowanie JS cz.3*.
1. Zadanie polega na przebudowaniu kodu z zadania [*homework_4*](../homework_4/homework_4.md), który będzie służył jako aplikacja do generowania listy 20 filmów:
    + Każdy film na liście powinien być zapisany w tablicy jako obiekt i posiadać:

        ###### Tytuł - *name*
        ###### Waszą ocenę filmu w postaci odpowiedniej ilości gwiazdek (1-5) - *rating*
        ###### Miniaturkę zdjęcia (może być zlinkowana z internetu lub pobrana lokalnie) - *thumbnail*
        ###### Button linkujący do tego filmu w jednym z serwisów typu filmweb - *movie_link*
        ###### Najlepsze wg Was trzy filmy powinny być oznaczone (np. zielony label z napisem „najlepsze”, zielony wiersz w tabeli, label lub dowolna inna forma oznaczenia) - *best_movie*
        ###### Najgorsze wg Was trzy filmy z tej listy powinny być oznaczone (np. czerwony label z napisem „najgorsze”, czerwony wiersz w tabeli, label lub dowolna inna forma oznaczenia) - *worst_movie*

    + Na stronie powinny zostać wszytskie wcześniej utworzone elementy (karuzela, nawigacja, stopka, etc), ale przy pierwszym wczytaniu strony nie powinno być stworznej listy 20 filmów. Zamiast listy powinien być duży nagłówek, który będzie informować, `Nic nie zostało jeszcze utworzone` i posiadał przycisk umożliwiający wczytanie listy 20 filmów.
    + Po kliknięciu przycisku do wczytywania filmów, powinna zostać wyświetlona lista filmów, strona powinna zostać przeładowana, a lista zapisana w localStorage,
    + Po wczytaniu filmów powinien pojawiać się przycisk w nawigacji służący do czyszczenia listy z localStorage, jeśli lista zostanie wyczyszczona to powinien być widoczny tylko przycisk do wczytywania listy filmów.

    **Dodatkowo**:
    + Filmy, które mają parametr `best_movie`, mają się pojawiać na samej górze listy, a `worst_movie` na samym dole listy.
    + Dodać modal, w którym będzie wyświetlany trailer (*trailer_link*) każdego filmu, pod nim musi zostać dodany opis filmu (*description*). Oba parametry mają być pobierane z obiektu danego filmu.
    Modal na stronie powinien być tylko jeden i za pomocą JS należy przekazać do niego wybrane dane do wyświetlenia.

1. **Ważne:** Pamiętajcie o zmergowaniu `mastera` do swojego brancha {imie-nazwisko}.
1. **Ważne:** Pamiętajcie o dobrych praktykach, pliki powinny być w odpowiednio nazwanych katalogach, a kod dobrze uporządkowany.

1. **Ważne:** Link do zadań, które robiliście na zajęciach *Programowanie JS* znajdziecie [tutaj](https://github.com/infoshareacademy/jfdzs1-materialy-programowanie-js).
1. **Ważne:** W razie problemów, wątpliwości możecie się kontaktować ze mną na slacku (@aslowikowska) lub z Łukaszem (@bodurkalukasz).

# Oczekiwany rezultat
W repozytorium homeworks, na branchu {imie-nazwisko} w katalogu {homework_8} zostanie poprawnie rozbudowane zadanie z homework_4 z wykorzystanie języka programowania JS.

# Punktacja
Za zadanie można otrzymać 3 punkty i 2 dodatkowe punkty za wykonanie zadań dodatkowych.
