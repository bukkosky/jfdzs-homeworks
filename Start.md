# Start w domu
Najprostszy sposób aby zaczać pracować:
1. Instalujesz gita w swoim systemie operacyjnym (głównie dotyczy systemów Windows)
2. Konfigurujesz tak jak w trakcie [zajęć](https://github.com/infoshareacademy/jfdzs1-materialy/blob/master/slides/2017-10-15_GIT.pdf):
  ```
  git config --global user.name "Imię i nazwisko"
  git config --global user.email "adres@email.pl"
  git config --global color.status auto
  git config --global color.branch auto
  ```
3. Klonujesz swoje repozytorium (przycisk clone or download, kopiowanie linku do repozytorium):
  ```
  git clone https://github.com/{USERNAME}/{nazwa-repozytorium}
  ```
4. Otwierasz folder `{nazwa-repozytorium}` w programie WebStorm
5. Modyfikujesz pliki
6. Dodajesz pliki do rejestru, robisz commit i pushujesz np.:
  ```
  git add .
  git commit -m 'Treść co zostało zmienione/dodane w języku angielskim'
  git push origin {nazwa-brancha}
  ```
7. Git powinen zapytać się o username i hasło
