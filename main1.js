const alumnos = [
    {
        nombre: "Maria",
        grado: "4",
        grupo: "A",
        hobbies: [
            "Jugar",
            "Cantar",
            "Bailar"
        ]
    },
    {
        nombre: "Gabriela",
        grado: "5",
        grupo: "C",
        hobbies: [
            "Jugar"
        ]
    },
    {
        nombre: "Antonio",
        grado: "2", 
        grupo: "C",
        hobbies: [
            "Cantar",
            "Bailar"
        ]    
    },
    {
        nombre: "Maria",
        grado: "3",
        grupo: "B",
        hobbies: [
            "Jugar",
            "Cantar",
            "Bailar"
        ]    
    },
    {
        nombre: "Pedro",
        grado: "6",
        grupo: "C",
        hobbies: [
            "Jugar",
            "Bailar"
        ]    
    }
];

// Alumnos del grupo C
const filtradoAlumnos = alumnos.filter((current) => current.grupo === "C");
// Alumnos del grupo C y que esten en grados mayor de 3
const filtradoAlumnos1 = alumnos.filter((current) => current.grupo === "C" && current.grado > 3);
//Obtener a todos los alumnos de un grado superior a 2
const filtradoAlumnos2 = alumnos.filter((current) => current.grado > 2 && current.hobbies.length > 1);
//De esos alumnos obtener aquellos que tengan mas de 1 hobbie
//const filtradoAlumnos3 = filtradoAlumnos2.filter((current) => current.hobbies.length > 1);
//Obtener a todos los alumnos que su nombre tenga la letra e y que tengan 3 hobbies
const filtradoAlumnos4 = alumnos.filter((current) => current.nombre.includes("e") && current.hobbies.length === 3);