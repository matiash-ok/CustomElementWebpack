import {initComponent} from '../createcomponent/createcomponent.js';

import buscadorTemplate from './buscador.html';
import buscadorStyle from './scss/buscador.scss';

import {agregarEventListeners} from './js/buscador';
import {cambiaNombre} from './js/buscador';


function buscador(){
  return [buscadorTemplate,buscadorStyle]
}

const funciones = {
  "connectedCallback":[agregarEventListeners],
  "attributeChangedCallback":[cambiaNombre]
}
initComponent(buscador,funciones,["nombre"])


  