let form = document.getElementById("form")
let texto = document.getElementById("tarea")
let addTarea = document.getElementById("add")
let removeTarea = document.getElementById("remove")
let addRan = document.getElementById("addRan")
let removeRan = document.getElementById("removeRan")
let quitar = document.getElementById("agg")
let primero = document.getElementById("primero")
let tabla = document.getElementById("tabla")
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")
let con = 0
let textoV
let tareas = []

function sinTareas(){

    if (tareas.length == 0){

        tabla.style.display = "none"
        p1.style.display = "flex"
        setTimeout(() => {
            p1.style.fontSize = "20px"
        }, 100);

    } else {

        tabla.style.display = "flex"
        p1.style.fontSize = "0px"
        setTimeout(() => {
            p1.style.display = "none"
        }, 300);

    }

}

function maximoTareas(){

    if (con == 5){

        p2.style.display = "flex"
        setTimeout(() => {
            p2.classList.add("ocupa")
        }, 100);

    } else {

        p2.classList.remove("ocupa")
        setTimeout(() => {
            p2.style.display = "none"
        }, 1000);

    }

}

addTarea.addEventListener("click", () => {

    if (con <= 4){

        textoV = texto.value

        if (textoV != ""){

            tareas.push(textoV);
            texto.value = ""
            con++
            texto.focus()
            maximoTareas()
            sinTareas()
            acomodarTotal()

        }

    }

})

removeTarea.addEventListener("click", () => {

    tareas.pop()
    con--
    acomodarTotal()
    maximoTareas()
    sinTareas()
    
})

primero.addEventListener("click", () =>{
    
    tareas.shift()
    con--
    maximoTareas()
    sinTareas()
    acomodarTotal();
})

addRan.addEventListener("click", () => {

        if(con <= 4){

            let posicion = Number(prompt("Ingresa la posición en la que deseas agregarlo."))
            textoV = texto.value
            
            if (textoV != ""){           

                if (posicion <= 0 || posicion >= 6){

                    p3.style.display = "flex"
                    setTimeout(() => {
                        p3.classList.add("ocupa")
                    }, 100);
                    texto.value = ""
                    texto.focus()

                } else {

                    p3.style.display = "none"
                    tareas.splice(posicion - 1, 0, textoV);
                    texto.value = ""
                    con++
                    texto.focus()
                    sinTareas()
                    maximoTareas()
                    acomodarTotal()

                }

            }

        }

})

removeRan.addEventListener("click", () => {

    let aBorrar = Number(prompt("Ingresa la posición de la tarea que deseas eliminar."))

    if (con > 0 && con < 6){

        if (aBorrar > 0 && aBorrar < 6){

            tareas.splice((aBorrar - 1), 1)
            con--
            sinTareas()
            maximoTareas()
            acomodarTotal()

        }

    }

})

texto.addEventListener("keydown", () => {

    p3.classList.remove("ocupa")

})

function acomodarTotal(){

    document.getElementById("tbody").innerHTML = ""
        
    for(let i = 0; i < tareas.length; i++){
        document.getElementById("tbody").innerHTML += `<tr id='t${i + 1}' > <td>${i + 1}</td> <td> ${tareas[i]} </td> </tr>`
    }

}