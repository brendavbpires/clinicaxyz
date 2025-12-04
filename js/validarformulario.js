document.getElementById("form1").onsubmit = function() {
    return validaForm()
}

function validaForm() {
    //Nome
    let nome = document.getElementById("nome").value.trim()
    if (nome.length < 3){
        alert("Informe o nome corretamente!")
        document.getElementById("nome").focus()
        return false
    }
    return true
}

