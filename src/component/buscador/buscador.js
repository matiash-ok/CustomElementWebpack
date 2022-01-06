import {initComponent} from '../createcomponent/createcomponent.js';

import buscadorTemplate from './buscador.html';
import buscadorStyle from './scss/buscador.scss';
import * as buscadorFn from './js/buscador';


function agregarEventListeners(componente){
  var input = componente.shadowRoot.getElementById("input")
  input.addEventListener("input", (e)=>{
    const MessageEvent = new CustomEvent("message", {
      detail: { title: e.target.value, message: "Hello!" },
      bubbles: true,
      composed: true
    });
    componente.dispatchEvent(MessageEvent);
  });
}


function buscador(){
  return [buscadorTemplate,buscadorStyle]
}

const funciones = {
  "connectedCallback":[agregarEventListeners],
}
initComponent(buscador,agregarEventListeners)


  