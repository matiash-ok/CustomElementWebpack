export function initComponent(componente,funciones={},attrArray=[]){
    
    const InitAttrs = (SuperClass) => class extends SuperClass{
      
        static get observedAttributes(){
            return attrArray
         }
    }

    window.customElements.define(`app-${componente.name}`,
            class extends InitAttrs(HTMLElement){
                constructor(){
                super();
                this.element = new componente();
                this.attachShadow({mode:"open"})
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
                    console.log(name, oldValue, newValue)
                    if(funciones.attributeChangedCallback){
                        funciones.attributeChangedCallback.map(funcion => funcion(this))
                    }
                }
              
            }
    )
  }
  
  
  