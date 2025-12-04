//Função para a manipulação do DOM (Document Object Model)

const galeria = function(){
    //Pega todas as imagens que estão dentro de galeria-miniaturas
    let miniaturas = document.querySelectorAll(".galeria-miniaturas img")
    console.log(miniaturas)

    miniaturas.forEach (function (foto){
     foto.addEventListener("click", 
        function () {
            console.log(this.src)
            document.getElementById("foto-grande").src = this.src
        }

     )
    })
}

galeria()