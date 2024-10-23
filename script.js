/*
const csv = await fetch('listaCursosEPesos.csv').then(response => response.text())
console.log(csv)



const csvString = csv



const parseArray = (string) => {
    return string.split('\r\n').map(row => row.split(';'))
}


const csvArray = parseArray(csvString)


const select = document.getElementById('listaCursos')
const nomeDosCursos = csvArray.map((value, index) => value[0]).slice(1)
console.log(nomeDosCursos.length)
for (var i = 0; i < nomeDosCursos.length; i++ ) {
    var opt  = nomeDosCursos[i];
    var el = document.createElement('option');
    el.textContent = opt
    el.value = opt;
    select.add(el);
}
*/
/*
export function mediaPesos() {
    const pesoRed = parseFloat(csvArray[select.value][1])
    console.log(pesoRed)
    const pesoHum = parseFloat(csvArray[select.value][3])
    const pesoNat = parseFloat(csvArray[select.value][2])
    const pesoLin = parseFloat(csvArray[select.value][4])
    const pesoMat = parseFloat(csvArray[select.value][5])
    
    const notaRed = parseFloat(document.getElementById('redacaoNota').value)
    const notaHum = parseFloat(document.getElementById('humanasNota').value)
    const notaNat = parseFloat(document.getElementById('naturezaNota').value)
    const notaLin = parseFloat(document.getElementById('linguagensNota').value)
    const notaMat = parseFloat(document.getElementById('matematicaNota').value)

    const numerador = pesoRed * notaRed + pesoHum * notaHum + pesoNat * notaNat + pesoLin * notaLin + pesoMat * notaMat
    const denominador = pesoHum + pesoLin + pesoMat + pesoNat + pesoRed

    document.getElementById('CampoDeResultado').innerHTML = numerador/denominador;
}
*/

import { mediaPesos } from "./mediaPesos.js"
import { mudaPeso } from "./mediaPesos.js";
window.mediaPesos=mediaPesos;
window.mudaPeso=mudaPeso;

