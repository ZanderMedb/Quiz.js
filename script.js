const personagens = [
  {
    nome: "Lúmina, Guardiã da Terra",
    descricao: "Sábia e protetora, Lúmina representa a força da natureza e a estabilidade das montanhas.",
    emoji: "🌿"
  },
  {
    nome: "Nayra, Guardiã da Água",
    descricao: "Empática e fluida, Nayra traz compaixão, cura e equilíbrio às correntes da vida.",
    emoji: "💧"
  },
  {
    nome: "Kael, Guardião do Fogo",
    descricao: "Corajoso e impulsivo, Kael é a chama viva da paixão e do poder de mudança.",
    emoji: "🔥"
  },
  {
    nome: "Zephyr, Guardião do Ar",
    descricao: "Sereno e sábio, Zephyr observa o mundo de cima e traz novas ideias com a leveza do vento.",
    emoji: "🌬️"
  }
];


const perguntas = [
  {
    texto: "Qual seu passatempo favorito?",
    opcoes: [
      { texto: "Cuidar de plantas ou jardins", pontos: [3,1,1,1] },
      { texto: "Nadar ou ouvir o som da água", pontos: [1,3,1,1] },
      { texto: "Praticar esportes ou algo intenso", pontos: [1,1,3,1] },
      { texto: "Observar as nuvens ou escrever", pontos: [1,1,1,3] }
    ]
  },
  {
    texto: "Como você resolve um conflito?",
    opcoes: [
      { texto: "Mantendo a calma e firmeza", pontos: [3,1,1,1] },
      { texto: "Com empatia e escuta", pontos: [1,3,1,1] },
      { texto: "Agindo rapidamente e sem medo", pontos: [1,1,3,1] },
      { texto: "Refletindo e sugerindo novas ideias", pontos: [1,1,1,3] }
    ]
  },
  {
    texto: "Qual qualidade mais valoriza?",
    opcoes: [
      { texto: "Estabilidade", pontos: [3,1,1,1] },
      { texto: "Compaixão", pontos: [1,3,1,1] },
      { texto: "Determinação", pontos: [1,1,3,1] },
      { texto: "Liberdade", pontos: [1,1,1,3] }
    ]
  },
  {
    texto: "Onde prefere viver?",
    opcoes: [
      { texto: "Em uma floresta ou montanha", pontos: [3,1,1,1] },
      { texto: "À beira-mar ou perto de um rio", pontos: [1,3,1,1] },
      { texto: "Perto de um vulcão ou deserto", pontos: [1,1,3,1] },
      { texto: "No alto, em um lugar arejado", pontos: [1,1,1,3] }
    ]
  },
  {
    texto: "O que faria diante de um perigo?",
    opcoes: [
      { texto: "Protegeria os outros com firmeza", pontos: [3,1,1,1] },
      { texto: "Analisaria com sensibilidade", pontos: [1,3,1,1] },
      { texto: "Atacaria sem hesitar", pontos: [1,1,3,1] },
      { texto: "Observa e cria uma solução criativa", pontos: [1,1,1,3] }
    ]
  },
  {
    texto: "Qual elemento mais te representa?",
    opcoes: [
      { texto: "Terra", pontos: [3,1,1,1] },
      { texto: "Água", pontos: [1,3,1,1] },
      { texto: "Fogo", pontos: [1,1,3,1] },
      { texto: "Ar", pontos: [1,1,1,3] }
    ]
  },
  {
    texto: "Escolha uma virtude:",
    opcoes: [
      { texto: "Resiliência", pontos: [3,1,1,1] },
      { texto: "Intuição", pontos: [1,3,1,1] },
      { texto: "Coragem", pontos: [1,1,3,1] },
      { texto: "Clareza mental", pontos: [1,1,1,3] }
    ]
  },
  {
    texto: "O que te motiva?",
    opcoes: [
      { texto: "Conservar o que é importante", pontos: [3,1,1,1] },
      { texto: "Ajudar os outros e curar", pontos: [1,3,1,1] },
      { texto: "Superar limites", pontos: [1,1,3,1] },
      { texto: "Explorar ideias e possibilidades", pontos: [1,1,1,3] }
    ]
  },
  {
    texto: "Qual seu maior medo?",
    opcoes: [
      { texto: "Destruição da natureza", pontos: [3,1,1,1] },
      { texto: "Ver sofrimento sem poder ajudar", pontos: [1,3,1,1] },
      { texto: "Ser impotente diante de um inimigo", pontos: [1,1,3,1] },
      { texto: "Ser incompreendido ou limitado", pontos: [1,1,1,3] }
    ]
  },
  {
    texto: "Uma frase que te define:",
    opcoes: [
      { texto: "Raízes fortes não temem o vento", pontos: [3,1,1,1] },
      { texto: "A correnteza pode curar ou mudar destinos", pontos: [1,3,1,1] },
      { texto: "A chama nunca recua diante da escuridão", pontos: [1,1,3,1] },
      { texto: "O vento leva aqueles prontos para voar", pontos: [1,1,1,3] }
    ]
  }
];

let estadoQuiz = {
  indicePergunta: 0,
  pontos: [0, 0, 0, 0]
};

function renderInicio() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <h1>Bem-vindo(a) à Alquebra!</h1>
    <p>
      Em Alquebra, não é o tempo que guia os caminhos--é a essência.

      <br><br>

      Nessa terra envolta por nevóas passadas e segredos levados pelo vento,
      quatro forças caminham sob formas humanas, cada uma espelhando um aspecto profundo da alma.

      <br><br>

      Essas forças tomam vida em quatro figuras enigmáticas: Lúmina,Nayra, Kael e Zephyr. Não apenas guardiões dos elementos, mas manifestações vivas dos dilemas que habitam dentro de cada um de nós.
      
      <br><br>

      <strong>Lúmina</strong>, Guardiã da Terra.<br><strong>Nayra</strong>, Guardiã da Água.<br><strong>Kael</strong>, Guardião do Fogo.<br><strong>Zephyr</strong>, Guardião do Ar.

      <br><br>

      Em Alquebra, suas escolhas não moldam só o mundo... moldam quem você é.
      <br><br>
      
      Descubra, através de um breve questionário, qual deles mais combina com você!
    </p>
    <button class="start-btn" onclick="iniciarQuiz()">Começar!</button>
  `;
}

function iniciarQuiz() {
  estadoQuiz.indicePergunta = 0;
  estadoQuiz.pontos = [0, 0, 0, 0];
  renderPergunta();
}

function renderPergunta() {
  const app = document.getElementById('app');
  const q = perguntas[estadoQuiz.indicePergunta];

  let opcoesHtml = "";
  q.opcoes.forEach((opc, idx) => {
    opcoesHtml += `<button class="option-btn" onclick="selecionarOpcao(${idx})">${opc.texto}</button>`;
  });

  app.innerHTML = `
    <div class="progress">Pergunta ${estadoQuiz.indicePergunta + 1} de ${perguntas.length}</div>
    <div class="question">${q.texto}</div>
    ${opcoesHtml}
  `;
}

function selecionarOpcao(indiceOpcao) {
  const pontosOpc = perguntas[estadoQuiz.indicePergunta].opcoes[indiceOpcao].pontos;
  estadoQuiz.pontos = estadoQuiz.pontos.map((p, i) => p + pontosOpc[i]);
  estadoQuiz.indicePergunta++;

  if (estadoQuiz.indicePergunta >= perguntas.length) {
    renderResultado();
  } else {
    renderPergunta();
  }
}

function renderResultado() {
  const app = document.getElementById('app');
  const maxPontos = Math.max(...estadoQuiz.pontos);
  const indicesVencedores = estadoQuiz.pontos.reduce((arr, val, idx) => {
    if (val === maxPontos) arr.push(idx);
    return arr;
  }, []);
  const idxPersonagem = indicesVencedores[0];
  const personagem = personagens[idxPersonagem];

  app.innerHTML = `
    <h2>Seu resultado:</h2>
    <div class="character-img">${personagem.emoji}</div>
    <h3>${personagem.nome}</h3>
    <p>${personagem.descricao}</p>
    <div class="result-score">Pontuação: ${maxPontos} pontos</div>
    <button class="restart-btn" onclick="renderInicio()">Recomeçar</button>
  `;
}

renderInicio();
window.iniciarQuiz = iniciarQuiz;
window.selecionarOpcao = selecionarOpcao;
window.renderInicio = renderInicio;
