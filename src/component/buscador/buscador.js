import buscadorTemplate from './buscador.html';
import buscadorStyle from './scss/buscador.scss';
import * as buscadorFn from './js/buscador';

class Buscador extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode:"open"})
        console.log("hola");
    }
    render() {
        var style = document.createElement("style");
        style.textContent = buscadorStyle.toString();
        this.shadowRoot.appendChild(style)
        this.shadowRoot.innerHTML += buscadorTemplate;
    }
    handleEvent(event) {
        if (event.type === "click") {
          const MessageEvent = new CustomEvent("message", {
            detail: { from: "Manz", message: "Hello!" },
            bubbles: true,
            composed: true
          });
          this.dispatchEvent(MessageEvent);
        }
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
        this.shadowRoot.addEventListener("click", this);
    }
}

window.customElements.define('busca-dor', Buscador);

export default Buscador
