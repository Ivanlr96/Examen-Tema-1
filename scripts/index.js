/* Autor: Iván Lorenzo Ruiz
   Link Git Hub: 
*/

// Evento con DOM para que lo primero que se cargue y vea el usuario sea todo el contenido visual//
document.addEventListener('DOMContentLoaded', () => {

    // Creamos una variable para con el botón para identificarle por su ID e inicializamos las variables para los resultados//
    const button = document.getElementById("btn");
    let area, perimetro, diagonal;

    // Capturamos el evento del click en el botón //
    button.addEventListener('click', () => {

        // Recogemos los valores del input en variables con const, haciendo el parse para transformar las strings del input //
        const longitud = parseFloat(document.getElementById("long").value);
        const anchura = parseFloat(document.getElementById("ancho").value);

        // Hacemos un if para que compruebe si las variables son números, en el caso que lo sean, se calculan los 3 elementos //
        if (!isNaN(longitud) && !isNaN(anchura)) {
            area = longitud * anchura;
            perimetro = 2 * (longitud + anchura);
            diagonal = Math.sqrt(Math.pow(longitud, 2) + Math.pow(anchura, 2));


            // En caso de que entre por el if, mostrará los resultados en el span correspondiente, redondeando los resultados//
            document.getElementById("area").textContent = `Área del rectángulo:  ${area.toFixed(2)}`; // En las 3 variables de los resultados, uso aqui el .toFIxed y no antes, para que en las operaciones utilice la cifra completa //
            document.getElementById("perimetro").textContent = `Perímetro del rectángulo: ${perimetro.toFixed(2)}`;
            document.getElementById("diagonal").textContent = `Diagonal del rectángulo: ${diagonal.toFixed(2)}`;

        }
        // En caso de que no se introduzcan valores o no sean números (se puede introducir e) mostrará el mensaje //
        else {
            document.getElementById("area").textContent = "Por favor ingrese valores válidos."
        }

    })
})