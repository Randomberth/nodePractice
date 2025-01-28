let infoCurso = {
    "titulo": "Aprendiendo nodeJS",
    "numVistas": "45642",
    "numLikes": "21123",
    "temas": [
        "Javascript",
        "Node.js"
    ],
    "esPublico": "true"
};

let infoCursoString = JSON.stringify(infoCurso);

console.log(infoCursoString);
console.log(typeof infoCursoString);

let infoCursoJson = JSON.parse(infoCursoString);

console.log(infoCursoJson);
console.log(typeof infoCursoJson);
console.log(infoCursoJson.titulo);
