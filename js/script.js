//Guardamos en esta variable el botón para generar la contraseña obteniendo su id
let generar = document.getElementById('generar');
//Guardamos en esta variable el botón para copiar la contraseña obteniendo su id
let copiar = document.getElementById('copiar');

//Creamos un eventListener para generar la contraseña al hacer click
generar.addEventListener('click', function(){
    //Guardamos en una variable todas las letras mayúsculas
    let mayusculas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    //Guardamos en una variable todas las letras minúsculas
    let minusculas = 'abcdefghijklmnñopqrstuvwxyz';
    //Guardamos en una variable todas los números 
    let numeros = '1234567890';
    //Guardamos en una variable todas los sínbolos 
    let simbolos = '!@#$%^&*()-_=+[]{}<>?,.'

    //Creamos variables que devolverán true por cada tipo de caracter que active el usuario
    let incluirMayusculas = document.getElementById("mayusculas").checked;
    let incluirMinusculas = document.getElementById("minusculas").checked;
    let incluirNumeros = document.getElementById("numeros").checked;
    let incluirSimbolos = document.getElementById("simbolos").checked;

    //Creamos una variable donde se guardaran todos los caracteres que la contraseña podrá contener
    let caracteresPermitidos = '';

    //Por cada tipo de carácter que haya activado el usuario, se le añadiran los caracteres disponibles a la variable caracteresPermitidos
    if(incluirMayusculas) caracteresPermitidos += mayusculas;
    if(incluirMinusculas) caracteresPermitidos += minusculas;
    if(incluirNumeros) caracteresPermitidos += numeros;
    if(incluirSimbolos) caracteresPermitidos += simbolos;

    //Si el usuario no selecciona ningún tipo de caracter, se mostrará una alerta con el siguiente mensaje:
    if(caracteresPermitidos === ''){
        alert('Selecciona al menos un tipo de caracter');
    }

    //En esta variable se almacenará la contraseña generada
    let contraseña = '';
    let longitud = 12;


    for(let i=0;i<longitud;i++){
        /**
         * Generamos un número entre 0 y 1 que será multiplicado por el número de caracteres disponibles. Ese número será redondeado a la baja
         * y será el caracter que utilicemos.
         */
        let randomIndex = Math.floor(Math.random() * caracteresPermitidos.length);
        contraseña += caracteresPermitidos[randomIndex];
    }

    document.getElementById("contraseña").value = contraseña;

});

//Creamos un addEventListener para que el usuario pueda copiar la contraseña generada
copiar.addEventListener('click', function(){
    //Seleccionamos la contraseña generada
    navigator.clipboard.writeText(contraseña.value);
    //Mostramos mensaje de éxito
    alert('¡Contraseña copiada en el portapapeles!')
});