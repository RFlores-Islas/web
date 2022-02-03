let ubicacionPrincipal = window.pageYOffset; //0

AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; //180
    if(ubicacionPrincipal >= desplazamientoActual){ // 200 > 180
      document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
     //document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual; //200

})

// Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color ="#009688";
        semaforo= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#009688";
        semaforo= true;
    }
    enlacesHeader.classList.toggle("menudos")
})


enlacesHeader.addEventListener('click', ()=>{
   enlacesHeader.classList.toggle("menudos")
   document.querySelectorAll(".hamburguer")[0].style.color ="#009688";
})

/*window.addEventListener('click', e =>{
    if(enlacesHeader.classList.contains('spread') 
        && e.target != enlacesHeader && e.target != hamburguer){
        console.log('cerrar')
        enlacesHeader.classList.toggle("spread")
    }
})*/

