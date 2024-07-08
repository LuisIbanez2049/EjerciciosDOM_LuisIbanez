


// Paso 1: Capturar el H1 mediante un ID en una variable llamada "titulo"
let titulo =document.getElementById("tituloH1")

// Paso 2: Crear una variable "tituloPrincipal" cuyo valor sea "Frutas"
let tituloPrincipal = "Frutas"

// Cambiar el contenido del título por el de la variable "tituloPrincipal"
titulo.textContent = tituloPrincipal

// Paso 3: Capturar el header y el footer mediante la misma clase y cambiarles el color a naranja
const headerFooterElements = document.querySelectorAll(".header-footer")

headerFooterElements.forEach (element => {
    element.classList.add("bg-orange-600")
})

// 4. Capturar y modificar el p del footer, agregarle tu nombre completo y cohort. 
let parrafo = document.querySelector("p")
parrafo.textContent = "Luis Carlos Ibañez Cortez COHORT 55"

// 5. Crear un div dentro del main y agregarle el id "contenedor". Capturar ese div por medio de su id. 
let contenedor = document.getElementById("contenedor")
contenedor.classList.add("w-full", "flex", "flex-row", "flex-wrap", "place-content-around", "p-8")

// Paso 6: Función que devuelve la estructura de una card
function crearCard(nombre, foto, descripcion)
{
    return `
           <div class="border border-black p-4 flex flex-col items-center w-56 h-[324px] mt-5 
                    rounded-3xl transition duration-300 transform hover:-translate-y-2 hover:bg-slate-300">
                <h2>${nombre}</h2>
                <img class="w-24 h-auto my-3" src="${foto}" alt="${nombre}">
                <p>${descripcion}</p>
            </div>
    `
}

// Paso 7 y 8: Bucle para crear cards con los datos de las frutas y mostrarlas en el div "#contenedor"
function mostrarCards()
{
    let cardsHTML = ""
    frutas.forEach(fruta => {
        cardsHTML += crearCard(fruta.nombre, fruta.foto, fruta.descripcion)
    })
    contenedor.innerHTML = cardsHTML
}

// Llamar a la función para mostrar las cards
mostrarCards(frutas)


// Paso 9: Capturar el div con id "lista" y agregar el título "Frutas Dulces"
const lista = document.getElementById("lista")
let tiutloLista = document.createElement("h2")
tiutloLista.textContent = "Frutas Dulces"
tiutloLista.classList.add("text-2xl", "font-bold")
lista.appendChild(tiutloLista)

// Paso 10: Función que recibe un array y devuelve una lista desordenada utilizando nodos
function crearListaDesordenada(frutas)
{
    const ul = document.createElement("ul")
    ul.classList.add("list-[ethiopic-halehame-ti-et]")
    frutas.forEach(fruta => {
        const li = document.createElement("li")
        li.textContent = fruta.nombre
        ul.appendChild(li)
    })
    return ul
}

// Paso 11: Filtrar frutas dulces y mostrar la lista en el div "#lista"
const frutaDulces = frutas.filter(fruta => fruta.esDulce)
const listaFrutasDulces = crearListaDesordenada(frutaDulces)
lista.appendChild(listaFrutasDulces)