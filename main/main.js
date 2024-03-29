const form = document.querySelector('.form-tarefa');
const valorA = document.getElementById('valor-a');
const valorB = document.getElementById('valor-b');
let formEValido = false;

function valorTotal(valorA, valorB) {
    return valorA < valorB;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const mensagemSucesso = `1Âº numero <b>${valorA.value}</b> 2Âº numero <b>${valorB.value}</b>`

    formEValido = valorTotal(valorA.value, valorB.value);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        valorA.classList.remove('error');

        valorA.value = '';
        valorB.value = '';

        setTimeout(function() {
            location.reload();
        }, 2000);
    } else {
        valorA.style.border = '1px solid red';
        document.querySelector('error-message').style.display = 'block';
    }
});

valorA.addEventListener('change', function(e) {
    console.log(e.target.value)
    formEValido = valorTotal(e.target.value, valorB.value);

    if (!formEValido) {
        valorA.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        valorA.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});
valorB.addEventListener('change', function(e) {
    console.log(e.target.value);
    formEValido = valorTotal(valorA.value, e.target.value);

    if (!formEValido) {
        valorB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        valorB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});