class DayBrick extends HTMLElement{

  static get observedAttributes(){
    return ['year', 'month', 'day', 'dayOfWeek'];
  }

  constructor(){
    super();
  }


  connectedCallback(){

    debugger;
    const storage = new AppStorage();
    const repository = new AppRepository();
    const mapper = new AppMapper();



    let year = this.attributes[0].value;
    let month = this.attributes[1].value;
    let day = this.attributes[2].value;
    let dayOfWeek = this.attributes[3].value;

    const idOfCurrentDay = `${year}-${month}-${day}`;
    const dayNawykProperClass = 'day-nawyki-neutral';

    this.innerHTML = `
      <div class="day-every">
        <div class="day-info">
          ${day} <span class="day-name">${dayOfWeek}</span>
        </div>
        <div class="${dayNawykProperClass}" id="${idOfCurrentDay}"></div>
      </div>
    `;

    document.getElementById(idOfCurrentDay).addEventListener('click', () => {this.onChange(event)});




  }

  onChange(event){

    const nawykStates = {
      ON: 'ON',
      OFF: 'OFF'
    }
      console.log(event);
  
      const id = event.target.id;
      const nawykState = ''
      console.log(id);
      console.log(nawykStates.ON);

      
      const nawyk = {
        id: id,
        nawykState: nawykStates.ON
      }
  
      repository.addNawykInfo(nawyk);
  }

  attributeChangedCallback(attributes, oldValue, newValue){
  }



}

window.customElements.define('day-brick', DayBrick);