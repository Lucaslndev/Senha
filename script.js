function enviar() {
    let nome = document.getElementById("nome").value;  /* puxa o ID nome no html */

    if (nome) {
        alert("Bem Vindo de volta, " + nome); /* Da um alerta */
        location.reload(); /* Reseta a Página quando clicado em "OK" */
    }
}

function mostrar() {
    var inputPass = document.getElementById('senha');
    var btnShowPass = document.getElementById('btn-senha');

    if (inputPass.type === 'password') { /* Se a senha (inputPass) for do tipo password ele muda para text (Texto) */
        inputPass.setAttribute('type', 'text'); /* Muda o atributo para tipo Text */
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill'); /* Muda a class do olho aberto (bi-eye-fill) para o olho fechado (bi-eye-slash-fill) */
    } 
    else { /* Se a senha for do tipo text ele retornará para password */
        inputPass.setAttribute('type', 'password'); /* Muda o atributo para password */
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill'); /* Substitui o olho fechado para o original olho aberto */
    }
}

function mostrar2() {
    var inputPass2 = document.getElementById('senha2');
    var btnShowPass2 = document.getElementById('btn-senha2');

    if (inputPass2.type === 'password') {
        inputPass2.setAttribute('type', 'text');
        btnShowPass2.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    }
    else {
        inputPass2.setAttribute('type', 'password');
        btnShowPass2.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
}

/* Replace: substituir */
/* setAttribute: setar um atributo */