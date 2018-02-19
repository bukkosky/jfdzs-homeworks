 var secondSection = document.getElementById('second');


 var sectionSelect = function () {
     console.log(secondSection);

     var secondSection_2 = document.getElementsByTagName('section')[1];
     console.log(secondSection_2);

     var secondSection_3 = document.querySelector('#second');
     console.log(secondSection_3);

 };

 window.addEventListener('load', sectionSelect);

 //===================================================================================

 var button = document.createElement('button');
 var buttonText = document.createTextNode('Kliknij tu');
 button.appendChild(buttonText);

 document.body.appendChild(button);
 button.classList.add('btn');


 function changeSectionText() {
     var firstParagraph = document.getElementById('first-paragraph');
     firstParagraph.innerHTML = "to już jest inny tekst w tym akapicie";

     var extraParagraph = document.createElement('p');
     var extraParagraphText = document.createTextNode('to jest nowy dodatkowy akapit')
     extraParagraph.appendChild(extraParagraphText);
     document.body.insertBefore(extraParagraph, secondSection);

 };

 button.addEventListener('click', changeSectionText);

 //=====================================================================================

 var header = document.getElementById('head');
 header.classList.add('header');

 var newButton = document.createElement('button');
 newButton.textContent = 'Zmień kolor';

 document.body.appendChild(newButton);
 newButton.classList.add('btn');

 function changeClass() {
     secondSection.classList.add('onButtonClick')
     header.classList.add('header-active')
 };

 newButton.addEventListener('click', changeClass);
