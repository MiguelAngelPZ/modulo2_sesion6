//Dado el siguiente arreglo,
//[4, 89, 23, 67, 34, 89, "hola", "true", false, [], "juan"]

//determinar y calcular:
//si el elemento es de tipo número, si es un número par dividirlo entre 2, si es impar, multiplicarlo por 3
//si el elemento es un string, si tiene un número par de caracteres, invertir el orden de los caracteres, si no solo regresamos el valor
//si elemento es booleano, regresar el su valor truthy o falsy 
//si es cualquier otro tipo de dato diferente a los antereiores, regresar un null

const datos = [4, 89, 23, 67, 34, 89, "hola", "true", false, [], "juan"];

const nuevosDatos = datos.map((dato) => {
    switch(typeof dato) {
        case "string":
        if (!(dato.length % 2)) { // 0 - false - true
            return dato.split("").reverse().join("");
        }
        return dato
        break;
        case "number":
        if (!(dato % 2)) {
            return dato / 2
        }
        return dato * 3
        break;
        case "boolean":
        return !dato
        break;
        default:
        return null
    }

});