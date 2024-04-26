let arrayImagenes = [ 'media/woman_secret.jpg', 'media/cortefiel.jpg', 'media/tous.jpg', 'media/springfield.jpg', 'media/etam.jpg', 'media/ph.jpg', 'media/zara.jpg', 'media/pull.jpg', 'media/mango.jpg','media/singularu.jpg'];
let numero = 0;

let img = document.getElementById('img');

function handlerEvents(){
   let nombres = document.getElementsByClassName('nombre__tienda');
   let nombre = document.getElementsByClassName('nombre__tienda');

   for (let i = 0; i < nombres.length; i++) {
    nombres[i].addEventListener('mouseenter', hadnlerImagenes); 
    
   }
   for (let i = 0; i < nombre.length; i++) {
    nombre[i].addEventListener('mouseenter',hadnlerTransparecia); 
    
   }
}

function hadnlerImagenes(e){
    let textoNombre = e.target;
    
    let nombres = document.getElementsByClassName('nombre__tienda');
    for (let i = 0; i < nombres.length; i++) {
        if (textoNombre == nombres[i]) {
            numero = i;
        } 
    }

    let img = document.getElementById('img');
    handlerSeleccion();
    img.src=arrayImagenes[numero];
}

function handlerSeleccion(){
    let nombres = document.getElementsByClassName('nombre__tienda');
    for (let i = 0; i < nombres.length; i++) { 
          
    }
    
    }
    function hadnlerTransparecia(){
        let nombre = document.getElementsByClassName('nombre__tienda');
        for (let i = 0; i < nombre.length; i++) { 
            nombre[i].classList.add('transparecia');    
        }
        nombre[i].classList.toggle('transparecia');
        }

        



window.onload = handlerEvents;