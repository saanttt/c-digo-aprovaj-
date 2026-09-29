// =====================================
// VARIÁVEIS
// =====================================

let passoAtual = 1;

let respostas = {

    vestibular: "",

    objetivo: "",

    disponibilidade: ""

};


// =====================================
// ELEMENTOS
// =====================================

const passos =
    document.querySelectorAll(".passo");

const etapas =
    document.querySelectorAll(".etapa");

const barra =
    document.getElementById("barraProgresso");


// =====================================
// MOSTRAR PASSO
// =====================================

function mostrarPasso(numero) {

    passoAtual = numero;


    // Esconde todos

    passos.forEach(passo => {

        passo.classList.remove("ativo");

    });


    // Mostra o atual

    document
        .getElementById(`passo${numero}`)
        .classList.add("ativo");


    // Atualiza etapas

    etapas.forEach((etapa, index) => {

        const numeroEtapa = index + 1;

        etapa.classList.remove(
            "ativa",
            "concluida"
        );


        if (numeroEtapa === numero) {

            etapa.classList.add("ativa");

        }


        if (numeroEtapa < numero) {

            etapa.classList.add("concluida");

        }

    });


    // Atualiza barra

    barra.style.width =
        `${numero * 25}%`;


    // Volta para o topo

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// =====================================
// SELECIONAR OPÇÃO
// =====================================

document
    .querySelectorAll(".opcao")
    .forEach(botao => {

        botao.addEventListener("click", function() {


            // Remove seleção dos outros
            // dentro do mesmo passo

            const passo =
                this.closest(".passo");


            passo
                .querySelectorAll(".opcao")
                .forEach(opcao => {

                    opcao.classList.remove(
                        "selecionada"
                    );

                });


            // Seleciona o clicado

            this.classList.add(
                "selecionada"
            );


            // Guarda resposta

            const valor =
                this.dataset.value;


            if (passo.id === "passo1") {

                respostas.vestibular = valor;

            }


            if (passo.id === "passo2") {

                respostas.objetivo = valor;

            }


            if (passo.id === "passo3") {

                respostas.disponibilidade = valor;

            }

        });

    });


// =====================================
// BOTÃO CONTINUAR — PASSO 1
// =====================================

document
    .getElementById("continuar1")
    .addEventListener("click", function() {

        if (!respostas.vestibular) {

            alert(
                "Selecione um vestibular para continuar."
            );

            return;

        }


        mostrarPasso(2);

    });


// =====================================
// BOTÃO CONTINUAR — PASSO 2
// =====================================

document
    .getElementById("continuar2")
    .addEventListener("click", function() {

        if (!respostas.objetivo) {

            alert(
                "Selecione seu objetivo para continuar."
            );

            return;

        }


        mostrarPasso(3);

    });


// =====================================
// BOTÃO CONTINUAR — PASSO 3
// =====================================

document
    .getElementById("continuar3")
    .addEventListener("click", function() {

        if (!respostas.disponibilidade) {

            alert(
                "Selecione sua disponibilidade para continuar."
            );

            return;

        }


        // Atualiza o resumo

        document.getElementById(
            "resumoVestibular"
        ).textContent =
            respostas.vestibular;


        document.getElementById(
            "resumoObjetivo"
        ).textContent =
            respostas.objetivo;


        document.getElementById(
            "resumoDisponibilidade"
        ).textContent =
            respostas.disponibilidade;


        mostrarPasso(4);

    });


// =====================================
// VOLTAR — PASSO 2
// =====================================

document
    .getElementById("voltar2")
    .addEventListener("click", function() {

        mostrarPasso(1);

    });


// =====================================
// VOLTAR — PASSO 3
// =====================================

document
    .getElementById("voltar3")
    .addEventListener("click", function() {

        mostrarPasso(2);

    });


// =====================================
// VOLTAR — PASSO 4
// =====================================

document
    .getElementById("voltar4")
    .addEventListener("click", function() {

        mostrarPasso(3);

    });


// =====================================
// INICIAR TESTE
// =====================================

document
    .getElementById("iniciarTeste")
    .addEventListener("click", function() {

        window.location.href = "teste.html";

    });