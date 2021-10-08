class DayBrick extends HTMLElement{


  static get observedAttributes(){
    return ['year', 'month', 'day', 'dayOfWeek'];
  }

  constructor(){
    super();
  }

  connectedCallback(){

    // debugger;
    let year = this.attributes[0].value;
    let month = this.attributes[1].value;
    let day = this.attributes[2].value;
    let dayOfWeek = this.attributes[3].value;

    const idOfCurrentDay = `${year}-${month}-${day}`;

    this.innerHTML = `
      <div class="day-every">
        <div class="day-info">
          ${day} <span class="day-name">${dayOfWeek}</span>
        </div>
        <div class="day-nawyki" id="${idOfCurrentDay}"></div>
      </div>
    `;

    document.getElementById(idOfCurrentDay).addEventListener('click', () => {this.onChange(event)});
  }

  attributeChangedCallback(attributes, oldValue, newValue){
    // console.log(arguments);
  }

  onChange(event){
    console.log('clicked');
    console.log(event);
  }

}

window.customElements.define('day-brick', DayBrick);