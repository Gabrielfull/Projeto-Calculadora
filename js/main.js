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

    const imc = peso.value / altura.value ** 2;

    if (imc > 0 && imc < 18.5){

        resultado.innerHTML = `<p style="background-color: #F7E318;">Seu Imc é ${imc.toFixed(1)} <strong>(Abaixo do peso)</strong></p>`

    } else if (imc > 18.6 && imc < 24.9){
        
        resultado.innerHTML = `<p>Seu Imc é ${imc.toFixed(1)} <strong>(Peso normal)</strong></p>`

    }else if (imc > 25 && imc < 29.9){

        resultado.innerHTML = `<p>Seu Imc é ${imc.toFixed(1)}<strong> (Sobre peso)</strong></p>`
        
    }else if (imc > 30 && imc < 34.9) {

        resultado.innerHTML = `<p style="background-color: brown;">Seu Imc é ${imc.toFixed(1)} <strong>(Obesidade grau 1)</strong</p>`

    }else if (imc > 35 && imc < 39.9) {

        resultado.innerHTML = `<p style="background-color: brown;">Seu Imc é ${imc.toFixed(1)} <strong>(Obesidade grau 2)</strong</p>`

    }else if (imc > 40) {

        resultado.innerHTML = `<p style="background-color: brown;">Seu Imc é ${imc.toFixed(1)} <strong>(Obesidade grau 3)</strong></p>`

    }else {
        resultado.innerHTML = `<p style="background-color: red;">Valor invalido</p>`
    }

};

form.addEventListener('submit', recebeEventoForm);

}
meuForm()