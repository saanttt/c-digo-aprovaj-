// ===============================
// QUESTÕES
// ===============================

const questoes = [
    {
        materia: "Matemática",
        pergunta: "Qual é o valor de x na equação 2x + 6 = 14?",
        alternativas: [
            "x = 2",
            "x = 4",
            "x = 6",
            "x = 8"
        ],
        correta: "B"
    },

    {
        materia: "Português",
        pergunta: "Qual é o sinônimo de 'feliz'?",
        alternativas: [
            "Triste",
            "Contente",
            "Bravo",
            "Cansado"
        ],
        correta: "B"
    },

    {
        materia: "História",
        pergunta: "Em que ano foi proclamada a Independência do Brasil?",
        alternativas: [
            "1500",
            "1789",
            "1822",
            "1889"
        ],
        correta: "C"
    },

    {
        materia: "Geografia",
        pergunta: "Qual é o maior país da América do Sul?",
        alternativas: [
            "Argentina",
            "Brasil",
            "Chile",
            "Peru"
        ],
        correta: "B"
    },

    {
        materia: "Biologia",
        pergunta: "Qual órgão bombeia o sangue pelo corpo?",
        alternativas: [
            "Pulmão",
            "Fígado",
            "Coração",
            "Rim"
        ],
        correta: "C"
    },

    {
        materia: "Física",
        pergunta: "Qual é a unidade de velocidade no Sistema Internacional?",
        alternativas: [
            "Metro",
            "Quilograma",
            "Metro por segundo",
            "Newton"
        ],
        correta: "C"
    },

    {
        materia: "Química",
        pergunta: "Qual é a fórmula química da água?",
        alternativas: [
            "CO₂",
            "O₂",
            "H₂O",
            "NaCl"
        ],
        correta: "C"
    },

{
    materia: "Redação",
    pergunta: "Qual característica é importante em uma boa redação?",
    alternativas: [
        "Falta de organização",
        "Argumentação clara e coerente",
        "Repetição de ideias",
        "Ausência de conclusão"
    ],
    correta: "B"
}
];


// ===============================
// VARIÁVEIS
// ===============================

let questaoAtual = 0;
let respondeu = false;
let respostas = [];


// ===============================
// PEGAR ELEMENTOS DO HTML
// ===============================

const numeroQuestao = document.getElementById("numeroQuestao");
const materia = document.getElementById("materia");
const pergunta = document.getElementById("pergunta");
const alternativas = document.getElementById("alternativas");
const barra = document.getElementById("barraProgresso");
const progressoTexto = document.getElementById("progressoTexto");
const proxima = document.getElementById("proxima");
const cronometro = document.getElementById("cronometro");


// ===============================
// MOSTRAR QUESTÃO
// ===============================

function mostrarQuestao() {

    const questao = questoes[questaoAtual];

    respondeu = false;


    // Número

    numeroQuestao.textContent = questaoAtual + 1;


    // Matéria

    materia.textContent = questao.materia;


    // Pergunta

    pergunta.textContent = questao.pergunta;


    // Progresso

    progressoTexto.textContent =
        `${questaoAtual + 1} de ${questoes.length}`;


    // Barra

    barra.style.width =
        `${((questaoAtual + 1) / questoes.length) * 100}%`;


    // Limpar alternativas

    alternativas.innerHTML = "";


    // Criar alternativas

    questao.alternativas.forEach((texto, index) => {

        const letra = String.fromCharCode(65 + index);


        const botao = document.createElement("button");

        botao.className = "alternativa";

        botao.type = "button";

        botao.innerHTML = `
            <span class="letra">${letra}</span>
            <span>${texto}</span>
        `;


        // CLIQUE NA ALTERNATIVA

        botao.addEventListener("click", function() {

            responder(letra);

        });


        alternativas.appendChild(botao);

    });


    // Texto do botão

    if (questaoAtual === 7) {

        proxima.innerHTML =
            'Finalizar teste <span>✓</span>';

    } else {

        proxima.innerHTML =
            'Próxima questão <span>→</span>';

    }

}


// ===============================
// RESPONDER QUESTÃO
// ===============================

function responder(letraEscolhida) {

    // Não pode clicar novamente

    if (respondeu) {
        return;
    }


    respondeu = true;

    respostas[questaoAtual] = letraEscolhida;


    const correta =
        questoes[questaoAtual].correta;


    // Pegar todos os botões

    const botoes =
        document.querySelectorAll(".alternativa");


    botoes.forEach(botao => {

        const textoLetra =
            botao.querySelector(".letra");


        const letra =
            textoLetra.textContent;


        // RESPOSTA CORRETA

        if (letra === correta) {

            botao.classList.add("correta");

            textoLetra.textContent = "✓";

        }


        // RESPOSTA ERRADA

        if (
            letra === letraEscolhida &&
            letraEscolhida !== correta
        ) {

            botao.classList.add("errada");

            textoLetra.textContent = "×";

        }

    });

}


// ===============================
// BOTÃO PRÓXIMA
// ===============================

proxima.addEventListener("click", function() {

    if (!respondeu) {

        alert("Selecione uma alternativa primeiro.");

        return;

    }


    // Se for a última

    if (questaoAtual === 7) {

        finalizarTeste();

        return;

    }


    // Próxima questão

    questaoAtual++;

    mostrarQuestao();

});


// ===============================
// FINALIZAR
// ===============================

function finalizarTeste() {

    clearInterval(relogio);

    let acertos = 0;

    respostas.forEach((resposta, index) => {

        if (resposta === questoes[index].correta) {
            acertos++;
        }

    });

    // Salva respostas e resultado
    localStorage.setItem(
        "respostasTeste",
        JSON.stringify(respostas)
    );

    localStorage.setItem(
        "resultadoTeste",
        acertos
    );

    // Vai para a página de diagnóstico
    window.location.href = "diagnostico.html";
}


// ===============================
// CRONÔMETRO
// ===============================

let tempo = 600;


function atualizarRelogio() {

    const minutos =
        Math.floor(tempo / 60);


    const segundos =
        tempo % 60;


    cronometro.textContent =
        String(minutos).padStart(2, "0") +
        ":" +
        String(segundos).padStart(2, "0");


    if (tempo <= 60) {

        cronometro.classList.add("urgente");

    }


    if (tempo <= 0) {

        clearInterval(relogio);

      alert("O tempo acabou! O teste será finalizado.");

      finalizarTeste();
        return;

    }


    tempo--;

}


atualizarRelogio();


const relogio =
    setInterval(atualizarRelogio, 1000);


// ===============================
// INICIAR
// ===============================

mostrarQuestao();