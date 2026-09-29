let semanaAtual = 0;


/* =========================
   MUDAR SEMANA
========================= */

function semanaAnterior() {

    semanaAtual--;

    atualizarSemana();

}


function proximaSemana() {

    semanaAtual++;

    atualizarSemana();

}


function atualizarSemana() {

    const periodo = document.getElementById("periodo");

    if (semanaAtual === 0) {

        periodo.textContent = "09 – 15 de Junho, 2025";

    }

    else if (semanaAtual === 1) {

        periodo.textContent = "16 – 22 de Junho, 2025";

    }

    else if (semanaAtual === -1) {

        periodo.textContent = "02 – 08 de Junho, 2025";

    }

    else {

        periodo.textContent = "Semana selecionada";

    }

}


/* =========================
   ADICIONAR ATIVIDADE
========================= */

function adicionarAtividade() {

    const materia = prompt("Qual matéria você deseja adicionar?");

    if (!materia) {
        return;
    }

    const assunto = prompt("Qual será o assunto?");

    if (!assunto) {
        return;
    }

    alert(
        "Atividade adicionada!\n\n" +
        materia +
        " - " +
        assunto
    );

}