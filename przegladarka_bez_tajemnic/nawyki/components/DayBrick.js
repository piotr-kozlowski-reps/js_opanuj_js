class DayBrick extends HTMLElement{

  repository = new AppRepository();
  nawykStates = {
    ON: 'ON',
    OFF: 'OFF',
    EMPTY: 'EMPTY'
  }


  static get observedAttributes(){
    return ['year', 'month', 'day', 'dayOfWeek'];
  }

  constructor(){
    super();
  }

  connectedCallback(){

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

      console.log(event);
  
      const id = event.target.id;
      const nawykState = '' // TODO: wyciągnięcie z REPO nawykStatu
      console.log(id);
      console.log(this.nawykStates.ON);

      const nawyk = {
        id: id,
        nawykState: this.nawykStates.ON
      }

      console.log(nawyk);
  
      this.repository.addNawykInfo(nawyk);
  }

  attributeChangedCallback(attributes, oldValue, newValue){
  }



}

window.customElements.define('day-brick', DayBrick);