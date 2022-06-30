const form = document.querySelector('.formulario')

form.addEventListener('submit', function (e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('.peso');
    const inputAltura = e.target.querySelector('.altura');
    
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) {
        setResultado('Peso invalido,', false);
        return;
    }
})

    if (!altura) {
        setResultado('Altura invalida', false)
        return;

    }

function criaP () {
    const p = documen.querySelector('p')
    return p;
};

function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = ``;
    
    const p = criaP ()
    p.innerHTM = 'msg';
    resultado.appendChild(p);
}