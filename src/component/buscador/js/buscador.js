export function agregarEventListeners(componente){
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
export function cambiaNombre(componente,name,oldvalue,newvalue){
    console.log(name)
    console.log(oldvalue)
    console.log(newvalue)
    
   if(name="nombre"){
       if(newvalue =="ricardo"){
                console.log("hola Ricardo")
       }
   }
}

export function funciona(){   
    let attributeNodeArray = [...this.attributes];
    
    let attrs = attributeNodeArray.reduce((attrs, attribute) => {
      attrs[attribute.name] = attribute.value;
      return attrs;
        },{});
    attrs= Object.keys(attrs);

    return ["nombre"]
}