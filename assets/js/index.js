console.log("Entro index.js");

const btnBlue = document.getElementById("btnBlue");

//btnBlue.addEventListener("click", function(){
  //  console.log("click en el boton azul");
//});

function clickBotonAzul(){
    console.log("click en el boton azul");
}

function overBotonAzul(){
    console.log("entro evento over a boton azul");
}

function changeBackGroundColorPage(color){
    document.body.style.backgroundColor = color;
}

btnBlue.addEventListener("click", changeBackGroundColorPage);


btnBlue.addEventListener("mouseover", overBotonAzul);