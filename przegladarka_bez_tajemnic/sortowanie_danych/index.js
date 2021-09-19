// # Przeprogramowani.pl - Opanuj JavaScript

// Moduł II. - Przeglądarka bez tajemnic

// ## Ćwiczenie nr. 8 - Sortowanie danych

// ### Jak zacząć

// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

// ### Cel ćwiczenia

// W tabeli znajdują się informacje o modułach kursu "Opanuj JavaScript".

// Spraw aby:
// 1. po kliknięciu na "Czas trwania" moduły sortowały się według czasu trwania
// 2. trzałka przy napisie "Czas trwania" sugerowała użytkownikowi kolejność
// 3. sekundy były wyświetlane w formacie hh:mm:ss

// ### Punkty bonusowe

// Zaimplementuj animację zamiany kolejności wykorzystując animacje CSS.


document.addEventListener('DOMContentLoaded', () => {

    const tbodySelector = document.querySelector('tbody');
    const allTRsSelector = tbodySelector.querySelectorAll('tr');
    const iconCzasTrwania = document.querySelector('thead').querySelector('i');
    const aHrefCzasTrwania = document.querySelector('thead').querySelector('a');

    const dataConvertedToStringsArray = createObjectsArrayOfData(allTRsSelector);

    let isAscendingOrder = false;
    aHrefCzasTrwania.addEventListener('click', () => {

        if(isAscendingOrder) {
            dataConvertedToStringsArray.sort((a, b) => a[2] - b[2]);
            isAscendingOrder = !isAscendingOrder;
        }

        let newContentArray = [];
        for(item of dataConvertedToStringsArray){
            console.log(item);
        }



        const contentOfNewTr = create
        


    })














    // console.log(dataConvertedToStringsArray);

    // dataConvertedToStringsArray.sort((a, b) => b[2] - a[2]);

    // console.log(dataConvertedToStringsArray);










    //utils
    function createObjectsArrayOfData(allTRsArray){

        let allTRsArrayResult = [];

        for (tr of allTRsArray){
            
            const textDividedByTAB = tr.innerText.split(/\t/g);
            allTRsArrayResult.push(textDividedByTAB)
        }

        return allTRsArrayResult;
    }



})