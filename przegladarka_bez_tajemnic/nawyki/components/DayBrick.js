class DayBrick extends HTMLElement{


  static get observedAttributes(){
    return ['year', 'month', 'day'];
  }

  constructor(){
    super();
  }

  attributeChangedCallback(attributes, oldValue, newValue){
    console.log(arguments);
  }

}

window.customElements.define('day-brick', DayBrick);