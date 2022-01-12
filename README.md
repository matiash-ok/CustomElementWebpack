# Custom Element  

## Como crear un Custom Element usando initComponent

    import initComponent from "./" 
    function ejemplo(){
            ejemplostyle=`
                            .ejemplo{
                                background:red;
                            }
                            .ejemplo__h1{
                                font-size:2rem;
                            }
                        `
            ejemplotemplate=`
                            <div class="ejemplo">
                                <h1 id="ejemplo" class="ejemplo__h1">Ejemplo de componente</h1>
                            </div>
                            `
        return [ejemplotemplate,ejemplostyle]
    }
    initComponent(ejemplo)

### De esta forma se crea el customElement y se lo llama usando app+(el nombre de la funcion , en este caso ejemplo)**

    <app-ejemplo></app-ejemplo>

## Funciones 

## Solo una Funcion
### Si se quiere agregar una funcion es necesario que reciba como parametro "componente" del cual se va a usar el shadowRoot para acceder a sus elementos, y mandar como parametro en initComponent
### La funcion en cuestion se realizara cuando se renderize el documento (connectedCallback()).

    funcion darEjemplo(componente){
        componente.shadowRoot.querySelector("#ejemplo").innerText=" Ejemplo de componente 2 "
    }
     initComponent(ejemplo,darEjemplo)

## Varias Funciones y Ciclo de Vida
**connectedCallback**
### Es la funcion que sucede cuando se renderiza el componente 

**disconnectedCallback**
### Es la funcion que sucede cuando se desconecta el componente 

**attributeChangedCallback**
### Es la funcion que sucede cuando se cambia un atributo del componente 
### envia el valor anterior , el actual y el attributo que cambio 
## Si se desea que las funciones se activen en algunos de los ciclos de vida se debe enviar un objeto 

    funcion saludar(componente){
        console.log("saludar")
    }
    funcion saludar(componente){
        console.log("despedir")
    }
    function preguntar(name,old,new){
        console.log(`cambiaste el [${name}] de ${old} por ${new} `)
    }
    const funciones={
        "connectedCallback":saludar
        "disconnectedCallback":despedir
        "attributeChangedCallback":preguntar
    }
    initComponent(ejemplo,funciones)

## Atributos observables

### Para comunicarse los padres con los hijos se usan los atributos observables.
### Estos son los atributos del tag comunes , pero con la especialidad que si se declaran en la funcion init , el componente va a estar pendiente de algun cambio en dicho atributo mediante la funcion attributeChangedCallback 

     initComponent(ejemplo,funciones,["fecha"])

    <app-ejemplo fecha="julio"></app-ejemplo>



## SLOTS 

### Si desea incluir el Hijo dentro del custom element se necesita incluir el tag <slot> donde se quiera que este 

            ejemplotemplate=`
                            <div class="ejemplo">
                                <h1 id="ejemplo" class="ejemplo__h1">Ejemplo de componente</h1>
                                <p><slot></slot></p>
                            </div>
                            `
            
**html**

            <app-ejemplo>"esto va a ir al slot"</app-ejemplo>

**renderizado**

        <app-ejemplo>
            #shadow-root (open)
                <div class="ejemplo">
                        <h1 id="ejemplo" class="ejemplo__h1">Ejemplo de componente</h1>
                        <p> "esto va a ir al slot"</p>
                </div>
               
        </app-ejemplo>



# -----------------------------------------------------------------------------------------------------------------------------
### Datazo
#### Usar doble %% para que webpack no compile la linea del ejs 
**Input**:

    `<%%= algo %%>`
**output**:

    `<%= algo %>`
