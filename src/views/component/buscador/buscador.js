import buscadorTemplate from './buscador.html';
import buscadorStyle from './scss/buscador.scss';
import * as buscadorFn from './js/buscador';

class Buscador extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode:"open"})
        console.log("hola")

    }
    render() {
        var style = document.createElement("style");
        style.textContent = buscadorStyle.toString();
        this.shadowRoot.appendChild(style)
        this.shadowRoot.innerHTML = buscadorTemplate;

    }
    byebye(){
        console.log("chaupa")
        let lupa = this.shadowRoot.getElementById("lupa");
        lupa.innerHTML="QUEONDAPA"
    }
    connectedCallback(){
        this.render()
        buscadorFn.saludar();
        this.byebye();
    }
}

window.customElements.define('busca-dor', Buscador);

export default Buscador
