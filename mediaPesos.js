
const csv = await fetch('listaCursosEPesos.csv').then(response => response.text())

const parseArray = (string) => {
    return string.split('\r\n').map(row => row.split(';'))
}

const csvArray = parseArray(csv)
const select = document.getElementById('listaCursos')

const nomeDosCursos = csvArray.map((value, index) => value[0]).slice(1)

for (var i = 0; i < nomeDosCursos.length; i++ ) {
    var opt  = nomeDosCursos[i];
    var el = document.createElement('option');
    el.textContent = opt
    el.value = opt;
    select.add(el);
}


export function mudaPeso() {

    document.getElementById('pesoLing').innerHTML = csvArray[select.selectedIndex][4]
    document.getElementById('pesoHum').innerHTML = csvArray[select.selectedIndex][3]
    document.getElementById('pesoNat').innerHTML = csvArray[select.selectedIndex][2]
    document.getElementById('pesoMat').innerHTML = csvArray[select.selectedIndex][5]
    document.getElementById('pesoRed').innerHTML = csvArray[select.selectedIndex][1]

}



export function mediaPesos() {
    if (select.value == 'Selecione um curso abaixo') return alert('Selecione um Curso!')
    const pesoRed = parseFloat(csvArray[select.selectedIndex][1])
    console.log(pesoRed)
    const pesoHum = parseFloat(csvArray[select.selectedIndex][3])
    const pesoNat = parseFloat(csvArray[select.selectedIndex][2])
    const pesoLin = parseFloat(csvArray[select.selectedIndex][4])
    const pesoMat = parseFloat(csvArray[select.selectedIndex][5])
    
    const notaRed = parseFloat(document.getElementById('redacaoNota').value)
    const notaHum = parseFloat(document.getElementById('humanasNota').value)
    const notaNat = parseFloat(document.getElementById('naturezaNota').value)
    const notaLin = parseFloat(document.getElementById('linguagensNota').value)
    const notaMat = parseFloat(document.getElementById('matematicaNota').value)

    const numerador = pesoRed * notaRed + pesoHum * notaHum + pesoNat * notaNat + pesoLin * notaLin + pesoMat * notaMat
    const denominador = pesoHum + pesoLin + pesoMat + pesoNat + pesoRed

    document.getElementById('CampoDeResultado').innerHTML = `Sua média seria de ${(numerador/denominador).toFixed(2)}`;
}