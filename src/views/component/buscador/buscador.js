import {initComponent} from '../createcomponent/createcomponent.js';

import buscadorTemplate from './buscador.html';
import buscadorStyle from './scss/buscador.scss';
import {agregarEventListeners} from './js/buscador';




function buscador(){
  return [buscadorTemplate,buscadorStyle]
}

const funciones = {
  "connectedCallback":[agregarEventListeners],
}

initComponent(buscador,agregarEventListeners,["hola"])

