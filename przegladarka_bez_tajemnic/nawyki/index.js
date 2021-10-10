document.addEventListener('DOMContentLoaded', () => {

  //objects
  const storage = new AppStorage();
  const repository = new AppRepository(storage);


  //selectors
  const formSelector = document.forms[0];
  const formSectionSelector = _elem('#form');
  const modalOKSelector = _elem('#modal-ok');
  const modalCancelSelector = _elem('#modal-cancel');
  

  const calendarSelector = _elem('#calendar');
  const nawykTitleSelector = _elem('.nawyk_title');
  const nawykTitleCloseSelector = _elem('.nawyk_title + i');

  const previousSelector = _elem('#previous');
  const nextSelector = _elem('#next');
  
  const  month1ColumnSelector = _elem('#month1-column');
  const  month2ColumnSelector = _elem('#month2-column');
  const  month3ColumnSelector = _elem('#month3-column');



  //vars
  let nawykName = '';
  const startingDate = new Date();
  const dayOfWeek = ['nd', 'pon', 'wt', 'śr', 'czw', 'pt', 'sob'];
  const monthOfYear = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
  let allIdsForListeners = [];
  let globalColumnsAmount = 3;



  //events
  formSelector.addEventListener('submit', event => {

    event.preventDefault();
    nawykName = event.target[0].value;

    if(nawykName !== '') {
      repository.addName(nawykName);
      formSectionSelector.classList.add('hidden');
      calendarSelector.style.display = 'flex';
      nawykTitleSelector.textContent = repository.getName();
      formSelector.reset();
    }


    
  })

  nawykTitleCloseSelector.addEventListener('click', () => {
    modal('modal1');
  })

  modalOKSelector.addEventListener('click', () => {
    console.log('OK');
    modalOff('modal1');
    repository.clearName();
    formSectionSelector.classList.remove('hidden');
    calendarSelector.style.display = 'none';
  })

  modalCancelSelector.addEventListener('click', () => {
    modalOff('modal1');
  })

  previousSelector.addEventListener('click', () => {
    startingDate.setMonth(startingDate.getMonth() -1);
    refresh();
  })

  nextSelector.addEventListener('click', () => {
    startingDate.setMonth(startingDate.getMonth() + 1);
    refresh();
  })

  window.addEventListener('resize', changeColumnsIfNeeded);













  //logic
  refresh();





  //utils
  function changeColumnsIfNeeded(event){

    const windowWidth = event.currentTarget.innerWidth;
    let desiredColumnsAmount = 0;

    if (windowWidth >= 850) desiredColumnsAmount = 3;
    if (windowWidth < 850 && windowWidth >= 550) desiredColumnsAmount = 2;
    if (windowWidth < 550) desiredColumnsAmount = 1;


    // debugger;
    if (desiredColumnsAmount !== globalColumnsAmount){
      globalColumnsAmount = desiredColumnsAmount;
      refresh();
    }

  }

  function refresh(){

    let dateForFirstColumn = new Date(startingDate);
    // const day = currentDate.getDate();
  
    const columnSelectors = [month1ColumnSelector, month2ColumnSelector, month3ColumnSelector];
    columnSelectors.forEach(element => {
      element.classList.add('hidden');
    })

      for (let i = 0; i < globalColumnsAmount; i++){
        if (i === 0) createColumn(dateForFirstColumn.getFullYear(), dateForFirstColumn.getMonth(), columnSelectors[i]);
        else {
          // debugger;
          dateForFirstColumn.setMonth(dateForFirstColumn.getMonth() + 1);
          createColumn(dateForFirstColumn.getFullYear(), dateForFirstColumn.getMonth(), columnSelectors[i]);
        }
      }

    createAllSelectors();
  }

  function createColumn(year, month, selector){

    selector.innerHTML = '';
    selector.classList.remove('hidden');


    //vars
    const numberOfDaysWithInfo = 0; //TODO: count the number finaly
    const numberOfDaysInGivenMonth = specifyNumberOfDaysInMonth(month + 1, year);
    

    //first element-> month title
    const monthBrick = document.createElement('month-brick');
    monthBrick.setAttribute('monthName', monthOfYear[month]);
    monthBrick.setAttribute('year', year);
    monthBrick.setAttribute('numberOfDaysWithInfo', numberOfDaysWithInfo);
    monthBrick.setAttribute('numberOfDaysInGivenMonth', numberOfDaysInGivenMonth);
    selector.appendChild(monthBrick);


    //all the elements for days
    //container
    const allDaysContainer = document.createElement('div');
    allDaysContainer.classList.add('all-days');
    selector.appendChild(allDaysContainer);

    //days
    for(let i = 1; i <= numberOfDaysInGivenMonth; i++){

      const currentDay = new Date(year, month, i).getDay();
      const idOfCurrentDay = `${year}-${month}-${i}`;

      const dayBrick = document.createElement('day-brick');
      dayBrick.setAttribute('year', year);
      dayBrick.setAttribute('month', month);
      dayBrick.setAttribute('day', i);
      dayBrick.setAttribute('dayOfWeek', dayOfWeek[currentDay]);
      allDaysContainer.appendChild(dayBrick);
    }
  }

  function _elem(el) {
    return document.querySelector(el);
  }

  function specifyNumberOfDaysInMonth(month, year){
    return new Date(year, month, 0).getDate();
  }

  function createAllSelectors(){
    allIdsForListeners.forEach(id => {
      document.getElementById(id).addEventListener('click', handleDaysNawykiSelectors);
    })
  }

  function handleDaysNawykiSelectors(event) {
    console.log(event);
  }

  function modal(id){

    const modalSelector = document.getElementById(id);
    modalSelector.classList.add('on')
    
    //modal background
    const body = document.querySelector('body');
    const background = document.createElement('div');
    background.className = 'modal-js-overlay'
    body.appendChild(background);

    //close
    const close = document.createElement('span');
    close.className = 'modal-js-close';
    close.innerHTML = 'x';
    close.addEventListener('click', () => {
      const overlay = body.querySelector('.modal-js-overlay');
      const closeBtn = body.querySelector('.modal-js-close');

      body.removeChild('overlay');

      modalSelector.classList.remove('on');
      modalSelector.removeChild(closeBtn);

    })
  }

  function modalOff(id){
    const body = document.querySelector('body');
    const el = document.getElementById(id);
    const overlay = document.querySelector('.modal-js-overlay');

    el.classList.remove('on');
    body.removeChild(overlay);

  }

})