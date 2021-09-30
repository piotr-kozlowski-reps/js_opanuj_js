document.addEventListener('DOMContentLoaded', () => {

  //selector
  const navbarSelector = document.querySelector('.navbar');
  const hamburgerMenuSelector = document.getElementById('hamburger-menu');

  const navbarIdSelector = document.querySelector('#navbar-id');
  const navbarMenuSelector = document.querySelector('#navbar_menu');

  //vars
  let navbarOffsetTop = navbarSelector.offsetTop;
  let isHamburgerClicked = false;

 


  window.onscroll = () => {manageStickyMenu()};
  
  hamburgerMenuSelector.addEventListener('click', () => {

    console.log('ham clicked');

    if(!isHamburgerClicked) {

      navbarMenuSelector.classList.add('navbar__menu-on');


      // navbarMenuSelector.style.cssText += ' display: block; display: flex; flex-direction: column';
      // // navbarIdSelector.cssText = `height: 60px; background: #111; display: flex; justify-content: center; align-items: center; flex-direction: column; background: gray`;
      // navbarIdSelector.cssText = `height: 60px; background: #111; display: flex; justify-content: center; align-items: center; flex-direction: column`;



    }

  })








  function manageStickyMenu(){

    if(window.pageYOffset > navbarOffsetTop){
      navbarSelector.classList.add("sticky");
    } else {
      navbarSelector.classList.remove("sticky");
    }

  }

})