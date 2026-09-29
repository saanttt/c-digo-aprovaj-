// ==============================
// MOSTRAR / ESCONDER SENHA
// ==============================

const senha = document.getElementById("senha");

const mostrarSenha =
    document.getElementById("mostrarSenha");


mostrarSenha.addEventListener("click", function () {

    if (senha.type === "password") {

        senha.type = "text";

    } else {

        senha.type = "password";

    }

});



// ==============================
// LOGIN
// ==============================

 const formulario =
    document.getElementById("formLogin");

const mensagem =
    document.getElementById("mensagem");


formulario.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const email =
            document.getElementById("email").value;

        const senha =
            document.getElementById("senha").value;


        if (!email || !senha) {

            mensagem.textContent =
                "Preencha todos os campos.";

            return;

        }


        mensagem.textContent =
            "Entrando...";


        setTimeout(() => {

            window.location.href =
                "nivelamento.html";

        }, 500);

    }
);