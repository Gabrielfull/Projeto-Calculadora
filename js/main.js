function meuForm () {
    const form = document.querySelector('.formulario')
    const resultado = document.querySelector('.resultado')

    const dados = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        dados.push ({
            peso: peso.value,
            altura: altura.value,
    });

    console.log(dados)

    if (peso.value / (altura.value * altura.value) > 0 && peso.value / (altura.value * altura.value) < 18.5){

        resultado.innerHTML = `<p style="background-color: #F7E318;">Abaixo do peso</p>`

    } else if (peso.value / (altura.value * altura.value) > 18.6 && peso.value / (altura.value * altura.value) < 24.9){

        resultado.innerHTML = `<p>Peso normal</p>`

    }else if (peso.value / (altura.value * altura.value) > 25 && peso.value / (altura.value * altura.value) < 29.9){

        resultado.innerHTML = `<p>Sobre peso</p>`
        
    }else if (peso.value / (altura.value * altura.value) > 30 && peso.value / (altura.value * altura.value) < 34.9) {

        resultado.innerHTML = `<p style="background-color: brown;">Obesidade grau 1</p>`

    }else if (peso.value / (altura.value * altura.value) > 35 && peso.value / (altura.value * altura.value) < 39.9) {

        resultado.innerHTML = `<p style="background-color: brown;">Obesidade grau 2<strong>(CUIDADO)</strong></p>`

    }else if (peso.value / (altura.value * altura.value) > 40) {

        resultado.innerHTML = `<p style="background-color: brown;">Obesidade grau 3 <strong>(URGENTE)</strong></p>`

    }else {
        resultado.innerHTML = `<p style="background-color: red;">Valor invalido</p>`
    }

};

form.addEventListener('submit', recebeEventoForm);

}
meuForm()