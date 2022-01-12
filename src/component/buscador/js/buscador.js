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
}
