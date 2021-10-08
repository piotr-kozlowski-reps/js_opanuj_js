document.addEventListener('DOMContentLoaded', () => {

  //selectors
  const formSelector = document.forms[0];
  const formSectionSelector = _elem('#form');

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
    formSectionSelector.classList.add('hidden');
    calendarSelector.style.display = 'flex';
    nawykTitleSelector.textContent = nawykName;
  })

  nawykTitleCloseSelector.addEventListener('click', () => {
    console.log('click');
    nawykName = '';
    formSectionSelector.classList.remove('hidden');
    calendarSelector.style.display = 'none';
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

    selector.classList.remove('hidden');

    //vars
    let html = '';
    const numberOfDaysWithInfo = 0; //TODO: count the number finaly
    const numberOfDaysInGivenMonth = specifyNumberOfDaysInMonth(month, year);
    
    
    //first element-> month title
    html += `<div class="month-name">`;
    html += `<div class="month-title">${monthOfYear[month]} '${year}</div>`;
    html += `<div class="month-numbers">${numberOfDaysWithInfo}/${numberOfDaysInGivenMonth}</div>`;
    html += `</div>`;


    //all days elements

    html += `<div class="all-days">`;

    for(let i = 1; i <= numberOfDaysInGivenMonth; i++){

      const currentDay = new Date(year, month, i).getDay();
      const idOfCurrentDay = `${year}-${month}-${i}`;

      html += `<div class="day-every">`
      html += `<div class="day-info">`
      html += `${i} <span class="day-name">${dayOfWeek[currentDay]}</span>`
      html += `</div>`
      html += `<div class="day-nawyki" id="${idOfCurrentDay}"></div>`
      html += `</div>`

      allIdsForListeners.push(`${idOfCurrentDay}`);

    }

    html += `</div>`;

    //finally
    selector.innerHTML = html;
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



})






// // Start
// _('#calendar').innerHTML = calendar();

// // short queySelector
// function _(s) {
//   return document.querySelector(s);
// }






// // show info
// function showInfo(event) {
//   // link 
//   var url = 'https://codepen.io/nakome/pen/EWBMzm.css';
//   // get json
//   getjson(url, function(obj) {
//     for (var key in obj) {
//       // if has envent add class
//       if(_('[data-id="' + key + '"]')){
//         _('[data-id="' + key + '"]').classList.add('event');
//       }
//       if (event === key) {
//         _('#calendar_data').classList.toggle('show_data');
//         // template info
//         var data = '<a href="#" class="hideEvent" '+
//             'onclick="return hideEvent();">&times;</a>'+
//             '<h3>' + obj[key].type + '</h3>' +
//             '<dl>' +
//             '<dt><dfn>Title:</dfn></dt><dd>' + obj[key].title + '</dd>' +
//             '<dt><dfn>Hour:</dfn></dt><dd>' + obj[key].time + '</dd>' +
//             '<dt><dfn>Venue:</dfn></dt><dd>' + obj[key].venue + '</dd>' +
//             '<dt><dfn>Location:</dfn></dt><dd>' + obj[key].location + '</dd>' +
//             '<dt><dfn>Description:</dfn></dt><dd>' + obj[key].desc + '</dd>' +
//             '<dt><dfn>More Info:</dfn></dt><dd><a href="' + obj[key].more +
//             '" title="More info">Here</a></dd>' +
//             '</dl>';
            
            
//         return _('#calendar_data').innerHTML = data;
//       }
//     }
//   });
//   return false;
// }
// // toggle event show or hide
// function hideEvent(){
//     _('#calendar_data').classList.toggle('show_data');
// }

// // simple calendar
// function calendar() {
//   // show info on init
//   showInfo();
  
//   // vars
//   var day_of_week = new Array(
//     'Sun', 'Mon', 'Tue',
//     'Wed', 'Thu', 'Fri', 'Sat'),
//       month_of_year = new Array(
//         'January', 'February', 'March',
//         'April', 'May', 'June', 'July',
//         'August', 'September', 'October',
//         'November', 'December'),
      
//       Calendar = new Date(),
//       year = Calendar.getYear(),
//       month = Calendar.getMonth(),
//       today = Calendar.getDate(),
//       weekday = Calendar.getDay(),
//       html = '';
  
//   // start in 1 and this month
//   Calendar.setDate(1);
//   Calendar.setMonth(month);
  
//   // template calendar
//   html = '<table>';
//   // head
//   html += '<thead>';
//   html += '<tr class="head_cal"><th colspan="7">' + month_of_year[month] + '</th></tr>';
//   html += '<tr class="subhead_cal"><th colspan="7">' + Calendar.getFullYear() + '</th></tr>';
//   html += '<tr class="week_cal">';
//   for (index = 0; index < 7; index++) {
//     if (weekday == index) {
//       html += '<th class="week_event">' + day_of_week[index] + '</th>';
//     } else {
//       html += '<th>' + day_of_week[index] + '</th>';
//     }
//   }
//   html += '</tr>';
//   html += '</thead>';
  
//   // body
//   html += '<tbody class="days_cal">';
//   html += '</tr>';
  
  
//   // white zone
//   for (index = 0; index < Calendar.getDay(); index++) {
//     html += '<td class="white_cal"> </td>';
//   }
  
  
  
//   for (index = 0; index < 31; index++) {
//     if (Calendar.getDate() > index) {
      
//       week_day = Calendar.getDay();
      
//       if (week_day === 0) {
//         html += '</tr>';
//       }
//       if (week_day !== 7) {
//         // this day
//         var day = Calendar.getDate();
//         var info = (Calendar.getMonth() + 1) + '/' + day + '/' + 
//         Calendar.getFullYear();
        
//         if (today === Calendar.getDate()) {
//           html += '<td><a class="today_cal" href="#" data-id="' + 
//           info + '" onclick="return showInfo(\'' + 
//           info + '\')">' +
//           day + '</a></td>';
          
//           showInfo(info);
          
//         } else {
//           html += '<td><a href="#" data-id="' + 
//           info + '" onclick="return showInfo(\'' + 
//           info + '\')">' +
//           day + '</a></td>';
//         }
        
//       }
      
      
//       if (week_day == 7) {
//         html += '</tr>';
//       }
      
      
//     }
    
    
//     Calendar.setDate(Calendar.getDate() + 1);
    
//   } // end for loop
//   return html;
// }







// //   Get Json data  
// function getjson(url, callback) {
//   var self = this,
//       ajax = new XMLHttpRequest();
//   ajax.open('GET', url, true);
//   ajax.onreadystatechange = function() {
//     if (ajax.readyState == 4) {
//       if (ajax.status == 200) {
//         var data = JSON.parse(ajax.responseText);
//         return callback(data);
//       } else {
//         console.log(ajax.status);
//       }
//     }
//   };
//   ajax.send();
// }