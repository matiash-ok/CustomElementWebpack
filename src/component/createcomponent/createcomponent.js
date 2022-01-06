export function initComponent(componente,funciones={}){
    
    class Component extends HTMLElement{
        constructor(){
          super();
          this.element = new componente();
          this.attachShadow({mode:"open"})
        }

        static get observedAttributes()
            { 
                const attributeNodeArray = [...this.attributes]
                return attributeNodeArray; 
            }

        render() {
            var style = document.createElement("style");
            style.textContent = Array.isArray(this.element)? this.element[1].toString():"";
            this.shadowRoot.appendChild(style)
            this.shadowRoot.innerHTML += Array.isArray(this.element)? this.element[0]:this.element.constructor().toString();
        }
        
        connectedCallback(){
            this.render();
            if(funciones.connectedCallback){
                funciones.connectedCallback.map(funcion => funcion(this))
            }
            if(typeof funciones === "function"){
                funciones(this)
            }
        }
        disconnectedCallback(){
            if(funciones.disconnectedCallback){
                funciones.disconnectedCallback.map(funcion => funcion(this))
            }
        }
        attributeChangedCallback(name, oldValue, newValue) {

            if(funciones.attributeChangedCallback){
                funciones.attributeChangedCallback.map(funcion => funcion(this))
            }
            
          }
  }
    window.customElements.define(`app-${componente.name}`, Component);
  }
  
  