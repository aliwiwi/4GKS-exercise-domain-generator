//vamos a crear una funcion que cree las URL
function NewURL() {
    //Se definen los arreglos para la creacion de URL
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];
    let dot = [".com", ".es", ".net", ".us", ".io"];

    //   Con los siguientes ciclo anidado se crean las diferentes URL que se pueden obtener
    for (let pIndx = 0; pIndx < pronoun.length; pIndx++) {
        for (let adjIndx = 0; adjIndx < adj.length; adjIndx++) {
            for (let nounIndx = 0; nounIndx < noun.length; nounIndx++) {
                for (let dotIndx = 0; dotIndx < dot.length; dotIndx++) {
                    //Se imprimen las URL
                    console.log(
                        pronoun[pIndx] + adj[adjIndx] + noun[nounIndx] + dot[dotIndx]
                    );
                }
            }
        }
    }
}
//Se llama a la funcion para que se impriman las URL.
console.log(NewURL());