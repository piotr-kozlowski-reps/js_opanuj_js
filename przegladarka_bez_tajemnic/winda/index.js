// # Przeprogramowani.pl - Opanuj JavaScript

// Moduł II. - Przeglądarka bez tajemnic

// ## Ćwiczenie nr. 4 - Winda

// ### Jak zacząć

// Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

// ### Cel ćwiczenia

// Winda napędzana scrollem użytkownika porusza się w górę i w dół (zgodnie z kierunkiem scrollowania). 

// Spraw, aby pole nad windą, informujące o kierunku poruszania się, było aktualizowane na bieżąco.

// ### Punkty bonusowe

// 1. Spraw, aby na polu z informacjami pokazywało się również aktualne piętro

////--------------------------------------------------------------------------------------------

// import './style.css'

const directions = {
  top: '🔼',
  bottom: '🔽'
}




document.addEventListener('DOMContentLoaded', () => {
  
  const directorSignSelector = document.querySelector('.direction');
  const elevatorSelector = document.querySelector('div.elevator');
  
  elevatorSelector.addEventListener('scroll', (event) => {
    const scrolled = elevatorSelector.scrollY;
    
    console.log(event);
    console.log(scrolled);
  })

})
