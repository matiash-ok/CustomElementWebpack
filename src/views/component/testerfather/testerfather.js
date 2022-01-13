import {initComponent} from '../createcomponent/createcomponent.js';




function testerfather(){
  return `
        <div id="padre">
            <h1 id="titulo">asdasd</h1>
            <div id="hijo"><slot></slot></div>
        </div>
    `
}
function locura(componente){
    let h1 = componente.shadowRoot.getElementById("titulo")
    let saludador=componente.shadowRoot.getElementById("padre")
    saludador.addEventListener("message", (event) => {
        h1.innerText = (event.detail.title+"");
        console.log(`Event received`);
    });
}
initComponent(testerfather,locura)

