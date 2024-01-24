let scriptURL = "https://script.google.com/macros/s/AKfycbz9vpU09wnTo7O8c6q6ZpWtN-bvdTX1wv9M1E4xK566qaL3dfRxcEPcbeh__wt7IvoL9g/exec"   // aquí s'ha d'escriure la URL del script
let consulta = scriptURL + "?query=select&where=Tipus&is=Turisme";
    fetch(consulta)
        .then((resposta) => {    // primera "promesa"
            return resposta.json();    // retorna les dades JSON obtingudes com a llista
        })
        .then((resposta) => {    // segona "promesa". Resposta = [{"Tipus":"Turisme","Motor":"Elèctric","Any":"2022","Velocitat":"120"}]
// espai per a les instruccions que s'executen en rebre la llista
        });
console.log (resposta)
