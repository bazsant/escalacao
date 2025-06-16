function sortear() {
    const escalacoes = [
        '4131',
        '4141',
        '4231 fechado',
        '4231 aberto',
        '424',
        '4312',
        '4321',
        '433 em linha',
        '433 conservador',
        '433 defensivo',
        '433 ofensivo',
        '4222',
        '41212 aberto',
        '41212 fechado',
        '442 em linha',
        '442 cons',
        '4411 meio campo',
        '451 em linha',
        '451 ofensivo',
        '3142',
        '3412',
        '3421',
        '343 em linha',
        '352',
        '5212',
        '523',
        '532 conservador',
        '541 em linha',
        '4213',
    ]

    const taticas = [
        'pontas',
        'tiki',
        'pressao',
        'retranca',
        'contra-atq',
        'lig-direta',
    ]

    const sorteadoEsc = getRandomInt(0,28);
    const sorteadoTat = getRandomInt(0, 5);

    document.getElementById('escalacao').innerText = `${ escalacoes[sorteadoEsc]} : ${taticas[sorteadoTat]}`
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }