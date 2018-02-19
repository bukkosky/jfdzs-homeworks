# Zadanie 3
*Termin:* 5.11.2017

Zadanie polega na rozwiązaniu dwóch zadań z *RWD*

1. Zadanie wykonujemy w *homework_3* na branchu {imie-nazwisko}
1. W odpowiednim katalogu powinny zostać wykonane poniższe zadania, analogicznie do zajęć z *RWD*.
1. Zadanie `ex12_page-grid` polega na zmodyfikowaniu szablonu, tak aby był kompatybilny z urządzeniami mobilnymi.
    Uwzględnij między innymi:

    + degradację kolumn zakładając, że:
        ###### portfolio załamujemy 2-etapowo:
        ###### 2 kol. - tablet,
        ###### 1 kol. - smartphone
    + footer załamujemy dwuetapowo:
        ###### 2 + 1 (tylko “Follow us”) - tablet,
        ###### 1 kol. - smartphone
    + pamiętaj o flexible image

1. Zadanie `ex13_pushleft` polega na zmodyfikowaniu szablonu, tak aby był kompatybilny z urządzeniami mobilnymi.
    Uwzględnij między innymi:
    + flexible design z maks szerokością 1200px
    + ukrywanie menu dla smartphone (< 800px)
    + **[extra]** z efektem animacji push-left

1. **Ważne:** Skrypt do zmiany klasy znajduje się poniżej, należy go umieścić przed zamknięcem znacznika `body`;
    ```
    <script type="text/javascript" src="http://code.jquery.com/jquery-2.2.1.min.js"></script>
    <script type="text/javascript">
    	jQuery('.menu-trigger a').click(function (event) {
    		jQuery('#menu').toggleClass('active');
    	});
    </script>
    ```
1. **Ważne:** Pamiętajcie o zmergowaniu mastera do swojego brancha {imie-nazwisko}.
1. **Ważne:** Link do zadań, które robiliście na zajęciach *RWD* znajdziecie [tutaj](https://github.com/infoshareacademy/jfdzs1-materialy-rwd).
1. **Ważne** W razie problemów, wątpliwości możecie się kontaktować ze mną na slacku (@aslowikowska) lub Łukaszem (@bodurkalukasz).

# Oczekiwany rezultat
W repozytorium homeworks, na branchu {imie-nazwisko} w katalogu {homework_3} zostaną poprawnie rozwiązane zadania z RWD z zastosowaniem mobile first.

# Punktacja
Za zadanie można otrzymać 3 punkty
