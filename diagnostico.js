// ======================================
// QUESTÕES E RESPOSTAS
// ======================================

const materias = [
    "Matemática",
    "Português",
    "História",
    "Geografia",
    "Biologia",
    "Física",
    "Química",
    "Redação"
];


// Respostas que o aluno marcou

const respostas =
    JSON.parse(
        localStorage.getItem("respostasTeste")
    ) || [];


// Gabarito

const gabarito = [
    "B", // Matemática
    "B", // Português
    "C", // História
    "B", // Geografia
    "C", // Biologia
    "C", // Física
    "C", // Química
    "B"  // Redação
];


// ======================================
// CALCULAR DESEMPENHO
// ======================================

const desempenho = materias.map(
    (materia, index) => {

        const acertou =
            respostas[index] === gabarito[index];

        return {

            materia: materia,

            porcentagem: acertou ? 100 : 0

        };

    }
);


// ======================================
// MÉDIA
// ======================================

const media =
    Math.round(
        desempenho.reduce(
            (total, item) =>
                total + item.porcentagem,
            0
        ) / desempenho.length
    );


// ======================================
// LISTA DE MATÉRIAS
// ======================================

const lista =
    document.getElementById(
        "listaMaterias"
    );


desempenho.forEach(item => {

    const div =
        document.createElement("div");

    div.className = "materia-item";


    div.innerHTML = `

        <div class="materia-topo">

            <span>
                ${item.materia}
            </span>

            <strong>
                ${item.porcentagem}%
            </strong>

        </div>

        <div class="barra-materia">

            <div
                class="preenchimento"
                style="width: ${item.porcentagem}%"
            ></div>

        </div>

    `;


    lista.appendChild(div);

});


// ======================================
// MELHOR E PIOR MATÉRIA
// ======================================

const melhor =
    [...desempenho]
        .sort(
            (a, b) =>
                b.porcentagem -
                a.porcentagem
        )[0];


const pior =
    [...desempenho]
        .sort(
            (a, b) =>
                a.porcentagem -
                b.porcentagem
        )[0];


// ======================================
// MOSTRAR RESULTADO
// ======================================

document.getElementById(
    "melhorMateria"
).textContent =
    `${melhor.materia} ${melhor.porcentagem}%`;


document.getElementById(
    "piorMateria"
).textContent =
    `${pior.materia} ${pior.porcentagem}%`;


document.getElementById(
    "mediaGeral"
).textContent =
    `${media}%`;


document.getElementById(
    "mediaGrafico"
).textContent =
    `${media}%`;


// ======================================
// BOTÃO PLANO DE ESTUDOS
// ======================================

function irParaPlano() {
    window.location.href = "plano.html";
}