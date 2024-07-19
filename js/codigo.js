// Declaramos variables.
let entradaMaestra;
let datosEncriptados;
let codigos = ["ai","enter","imes","ober","ufat"];
let entradaDatos = document.getElementById("entrada");
let boton = document.getElementById("encrip");
let imagen = document.getElementById("muneco");
let botonDes = document.getElementsByClassName("desencriptar");
let myButton = document.querySelector(".limpiar");
let myText = document.querySelector(".salida");

//Creamos un evento que nos permita obtener en tiempo real nuestra entrada de texto.
entradaDatos.addEventListener("input", function() {
    let texto = this.value;
    console.log(texto);
    entradaMaestra = texto;
});

//Creamos el evento para hacer funcional el boton de limpiar.
function borrarTexto() {
   
    document.getElementsByClassName("salida")[0].innerHTML = "Ingrese un nuevo mensaje....";
   
}


//Creamos nuestra funcion encriptar basada en los parametros indicados
function encriptar(){
    let codigosObj = {a: codigos[0], l: codigos[1], u: codigos[2], r: codigos[3], a: codigos[4]};
    datosEncriptados = entradaMaestra.replace(/[alura]/g, function(match) {
        return codigosObj[match];
    });

    console.log(entradaMaestra + " Estos son los datos mientras se encriptan");
    console.log(datosEncriptados + " Estos son los datos encriptados");
    document.getElementsByClassName("salida")[0].innerHTML = datosEncriptados;
    entradaDatos.value = "";
    entradaDatos.focus();
}
//Ahora nuestra función desencriptar para revertir los cambios
function desencriptar() {
    console.log("hola")
    let codigosObj = {a: codigos[0], l: codigos[1], u: codigos[2], r: codigos[3], a: codigos[4]};
    let reverseCodigosObj = {};
    for (let key in codigosObj) {
        reverseCodigosObj[codigosObj[key]] = key;
    }
    let datosDesencriptados = entradaMaestra.replace(new RegExp(Object.keys(reverseCodigosObj).join('|'), 'g'), function(match) {
        return reverseCodigosObj[match];
    });

    console.log(datosEncriptados + " Estos son los datos mientras se desencriptan");
    console.log(datosDesencriptados + " Estos son los datos desencriptados");
    document.getElementsByClassName("salida")[0].innerHTML = datosDesencriptados;
    entradaDatos.value = "";
    entradaDatos.focus();
}

//Creamos nuestra función que valide las mayusculas y minusculas, retornando false o true.
var letras = "abcdefghyjklmnñopqrstuvwxyz";

function tiene_letras(texto){
   texto = texto.toLowerCase();
   for(let i=0; i<texto.length; i++){
      if (letras.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}


//Variable condición para se usada como validador, de permanecer en true, se llama a la funcion encriptar.
let condicion = true;
function validarEncriptado(){
    for (let x = 0; x < entradaMaestra.length; x++){
        if (!tiene_letras(entradaMaestra[x]) && entradaMaestra[x] !== " "){
            alert("Todas las letras deben ser mayusculas o minusculas sin caracteres especiales o numeros!");
            condicion = false;
            break;
        } 
    }

   if (condicion){
        encriptar(); 
   }

}

//Creamos el evento, al hacer un click en el boton Encriptar. 
//Se llama a la función validad encriptado, asi nos aseguramos que no tenga ni mayusculas, ni caracteres especiales.
boton.onclick = validarEncriptado;

//Para finalizar se llama a la función desencriptar y asi revertir cualquier cambio o desifrar cualquier mensaje ya encriptado.
botonDes[0].onclick = desencriptar;


