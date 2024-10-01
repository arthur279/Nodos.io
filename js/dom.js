let  identificador, etiqueta, nombre;

//getElementById
identificador = document.getElementById("titulo");
console.log(identificador.innerText);

//getElementByTagName
seccion = document.getElementsByTagName("section");
console.log(seccion[0].innerText);

etiqueta = document.getElementsByTagName("p");
console.log(etiqueta[0].innerText);

//getElementByClassName
clase = document.getElementsByClassName("parrafo");
console.log(clase[1].innerText);

//getElementByName
nombre = document.getElementsByName("subtitulo");
console.log(nombre[0].textContent);

//Crear nodo en el DOM
let elemento, contenido;
elemento = document.createElement("p");
contenido = document.createTextNode("Nuevo Parrafo");
elemento.appendChild(contenido);
//etiqueta[2].appendChild(elemento);

seccion[1].insertBefore(elemento,etiqueta[2]);

//etiqueta[2].insertAdjacentElement("beforebegin",elemento);
//etiqueta[2].insertAdjacentElement("afterbegin",elemento);
//etiqueta[2].insertAdjacentElement("afterend",elemento);

//Reemplazar Nodo
elemento = document.createElement("p");
contenido = document.createTextNode("Reemplazo Parrafo");
elemento.setAttribute("class", "parrafo2");
elemento.appendChild(contenido);
seccion[1].replaceChild(elemento,clase[0]);

//Eliminar nodo
seccion[0].removeChild(nombre[0]);

//Crear nodo dentro de otro Nodo
elemento = document.createElement("article");
contenido = document.createTextNode("Articulo de sección");

elemento.appendChild(contenido);
//document.getElementById("nodo").appendChild(elemento);

//seccion[2].appendChild("elemento2");

//Insertar contenido en un nodo
document.getElementById("contenido").innerHTML = 'Informacion <br/> <p class="nuevo" Otro Prrafo en el Nodo>';
document.getElementById("enlace").innerHTML="Google";

//Cambiar atributos de un nodo
etiqueta[0].setAttribute("class", "parrafo nuevo");
seccion[2].setAttribute("class", "contenido");
seccion[3].setAttribute("class", "contenido");

//Estilos
document.getElementById("titulo").style.background = '#f00';
document.getElementById("contenido").style.marginTop = '10px';
document.getElementById("contenido").style.lineHeight = '50px';





const contentSection = document.getElementById('content');


const articleText = document.createElement('article');
articleText.id = 'present';
const textParagraph = document.createElement('p');
textParagraph.textContent = 'Mi foto';


articleText.appendChild(textParagraph);


const articleImage = document.createElement('article');
articleImage.id = 'imagen';
const image = document.createElement('img');
image.src = 'imagen/m.png'; 
image.alt = 'Foto de perfil';


articleImage.appendChild(image);


contentSection.appendChild(articleText);
contentSection.appendChild(articleImage);


const newArticleText = document.createElement('article');
newArticleText.id = 'present2';
const newTextParagraph = document.createElement('p');
newTextParagraph.textContent = 'Mi foto';


newArticleText.appendChild(newTextParagraph);

const newArticleImage = document.createElement('article');
newArticleImage.id = 'imagen2';
const newImage = document.createElement('img');
newImage.src = 'imagen/m.png';
newImage.alt = 'Foto de perfil';

newArticleImage.appendChild(newImage);

contentSection.appendChild(newArticleText);
contentSection.appendChild(newArticleImage);
