class MonthBrick extends HTMLElement{


    static get observedAttributes(){
      return ['monthName', 'year', 'numberOfDaysWithInfo', 'numberOfDaysInGivenMonth'];
    }
  
    constructor(){
      super();
    }


    connectedCallback(){

        const monthName = this.attributes[0].value;
        const year = this.attributes[1].value;
        const numberOfDaysWithInfo = this.attributes[2].value;
        const numberOfDaysInGivenMonth = this.attributes[3].value;

        this.innerHTML = `
            <div class="month-name">
                <div class="month-title">${monthName} '${year}</div>
                <div class="month-numbers">${numberOfDaysWithInfo}/${numberOfDaysInGivenMonth}</div>
            </div>
        `;

    }









  
    // connectedCallback(){
  
    //   const dayOfWeek = ['nd', 'pon', 'wt', 'śr', 'czw', 'pt', 'sob'];
  
    //   let year = this.attributes[0].value;
    //   let month = this.attributes[1].value;
    //   let day = this.attributes[2].value;
  
    //   const currentDay = new Date(year, month, day).getDay();
    //   const idOfCurrentDay = `${year}-${month}-${day}`;
  
    //   this.innerHTML = `
    //     <div class="day-every">
    //       <div class="day-info">
    //         ${day} <span class="day-name">${dayOfWeek[currentDay]}</span>
    //       </div>
    //       <div class="day-nawyki" id="${idOfCurrentDay}"></div>
    //     </div>
    //   `;
    // }
  
    // attributeChangedCallback(attributes, oldValue, newValue){
    //   // console.log(arguments);
    // }
  
  }
  
  window.customElements.define('month-brick', MonthBrick);


//    html += `<div class="month-name">`;
//   html += `<div class="month-title">${monthOfYear[month]} '${year}</div>`;
//   html += `<div class="month-numbers">${numberOfDaysWithInfo}/${numberOfDaysInGivenMonth}</div>`;
//   html += `</div>`;