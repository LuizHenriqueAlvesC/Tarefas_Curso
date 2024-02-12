const form = document.querySelector('form-tarefa');
const valorA = document.getElementById('valor-a');
const valorB = document.getElementById('valor-b');
let formEValido = false;

function valorTotal(valorA, valorB) {
    return valorA < valorB;
}

form.addEventListener('submmit', function(e){
    e.preventDefault();


const valorA = document.getElementById('valor-a');
const valorB = document.getElementById('valor-b');
const messagemSucesso = `1º numero <b>${valorA.value}</b> 2º numero <b>${valorB.value}</b>`

formEValido = valorTotal(valorA.value, valorB.value);
if (formEValido) {
    const containerMensagemSucesso = document.querySelector('.success-message');
    containerMensagemSucesso.innerHTML = messagemSucesso;
    containerMensagemSucesso.style.display = 'block';
}else {
    valorA.style.border = '1px solid red';
    document.querySelector('error-message').style.display = 'block';
}
});

valorA.addEventListener('change', function(e) {
    console.log(e.target.value)
    formEValido = valorTotal(e.target.value)

    if (!formEValido) {
        valorA.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    }else {
        valorA.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});