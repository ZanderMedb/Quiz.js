const personagens = [
  {
    nome: "Lúmina, Guardiã da Terra",
    descricao:
      "Lúmina é a personificação da firmeza, da sabedoria e da força silenciosa que habita no coração da Terra. Como Guardiã das Raízes Eternas, ela domina o terreno como ninguém: ergue muralhas, fortalece aliados e controla o campo de batalha com a precisão de quem entende os ciclos naturais da vida. Sua presença transmite estabilidade e coragem, e seu olhar carrega o peso de eras passadas. Mais do que uma guerreira, Lúmina é uma guia espiritual, uma protetora que luta não por glória, mas pela harmonia entre os elementos. Onde ela pisa, a terra floresce — e onde se ergue, nada a derruba.",
    imagem: "./assets/terra.png",
    link: "./personagens/lu.html",
  },
  {
    nome: "Nayra, Guardiã da Água",
    descricao:
      "Nayra é fluida, serena e profundamente sensível às dores do mundo. Sua força vem da capacidade de se adaptar, de acolher e de transformar até os conflitos mais árduos em caminhos de cura. Como Guardiã da Água, ela controla rios, mares e correntes espirituais com maestria, sendo tanto uma guerreira quanto uma curandeira nata. Seu domínio permite apagar incêndios de raiva, suavizar terrenos ásperos e devolver a vida onde há secura. Nayra é a voz do coração, o toque da empatia e a presença calma que antecede a grande onda da transformação.",
    imagem: "./assets/agua1.png",
    link: "./personagens/nay.html",
  },
  {
    nome: "Kael, Guardião do Fogo",
    descricao:
      "Kael é paixão em forma de guerreiro. Seu espírito é intenso, direto e carregado de energia que queima, mas também aquece. Como Guardião do Fogo, ele representa a coragem, a força de vontade e a capacidade de transformar dor em poder. Ele avança onde outros hesitam, acende esperanças onde só havia cinzas e luta com a fúria de um sol nascente. Sua chama é guia, sua presença é impulso, e seu coração é uma fornalha que arde com propósito.",
    imagem: "./assets/fogo.png",
    link: "./personagens/ka.html",
  },
  {
    nome: "Zephyr, Guardião do Ar",
    descricao:
      "Zephyr é leve como uma brisa e veloz como o pensamento. Dotado de inteligência aguçada e um espírito livre, ele domina os ventos com maestria, usando a velocidade, a estratégia e a comunicação como suas maiores armas. Como Guardião do Ar, representa a sabedoria, a curiosidade e a capacidade de se adaptar e elevar qualquer situação. Seus golpes são rápidos, sua mente é ágil, e sua presença é como o próprio vento: sutil, mas impossível de ignorar. Onde há silêncio, ele traz ideias; onde há caos, ele sopra direção.",
    imagem: "./assets/ar.png",
    link: "./personagens/zeh.html",
  },
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
  pontos: [0, 0, 0, 0],
};

function embaralhar(array) {
  return array.sort(() => Math.random() - 0.5);
}

function renderInicio() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>Bem-vindo(a) à Alquebra!</h1>
    <p>
      Em Alquebra, não é o tempo que guia os caminhos--é a essência.

      <br><br>

      Nessa terra envolta por névoas passadas e segredos levados pelo vento,
      quatro forças caminham sob formas humanas, cada uma espelhando um aspecto profundo da alma.

      <br><br>

      Essas forças tomam vida em quatro figuras enigmáticas: Lúmina, Nayra, Kael e Zephyr. Não apenas guardiões dos elementos, mas manifestações vivas dos dilemas que habitam dentro de cada um de nós.
      
      <br><br>

      <strong>Lúmina</strong>, Guardiã da Terra.<br><strong>Nayra</strong>, Guardiã da Água.<br><strong>Kael</strong>, Guardião do Fogo.<br><strong>Zephyr</strong>, Guardião do Ar.

      <br><br>

      Em Alquebra, suas escolhas não moldam só o mundo... moldam quem você é.
      <br><br>
      
      Descubra, através de um breve questionário, qual deles mais combina com você!
    </p>
    <button class="start-btn" id="startQuiz">Começar!</button>
  `;

  document.getElementById("startQuiz").addEventListener("click", iniciarQuiz);
}

function iniciarQuiz() {
  estadoQuiz.indicePergunta = 0;
  estadoQuiz.pontos = [0, 0, 0, 0];
  perguntasEmbaralhadas = embaralhar(perguntas);
  renderPergunta();
}

function renderPergunta() {
  const app = document.getElementById("app");
  const q = perguntasEmbaralhadas[estadoQuiz.indicePergunta];

  let opcoesHtml = "";
  const opcoesEmbaralhadas = embaralhar(q.opcoes);
  opcoesEmbaralhadas.forEach((opc, idx) => {
    const classeElemento =
      idx === 0 ? "terra" : idx === 1 ? "agua" : idx === 2 ? "fogo" : "ar";
    opcoesHtml += `<button class="option-btn ${classeElemento}" onclick="selecionarOpcao(${idx})">${opc.texto}</button>`;
  });

  app.innerHTML = `
    <div class="progress">Pergunta ${estadoQuiz.indicePergunta + 1} de ${
    perguntas.length
  }</div>
    <div class="question">${q.texto}</div>
    ${opcoesHtml}
  `;
}

function selecionarOpcao(indiceOpcao) {
  const pontosOpc = perguntasEmbaralhadas[estadoQuiz.indicePergunta].opcoes[
    indiceOpcao
  ].pontos;
  estadoQuiz.pontos = estadoQuiz.pontos.map((p, i) => p + pontosOpc[i]);
  estadoQuiz.indicePergunta++;

  if (estadoQuiz.indicePergunta >= perguntasEmbaralhadas.length) {
    renderResultado();
  } else {
    renderPergunta();
  }
}

function renderResultado() {
  const app = document.getElementById("app");
  const maxPontos = Math.max(...estadoQuiz.pontos);
  const idxPersonagem = estadoQuiz.pontos.indexOf(maxPontos);
  const personagem = personagens[idxPersonagem];
  
  app.innerHTML = `
  <h2>Seu resultado:</h2>
  <img src="${personagem.imagem}" alt="${personagem.nome}" class="character-img" />
  <h3>${personagem.nome}</h3>
  <p>${personagem.descricao}</p>
  <div class="result-score">Pontuação: ${maxPontos} pontos</div>
  <button class="restart-btn" onclick="renderInicio()">Recomeçar</button>
  <a href="${personagem.link}" class="saiba-mais-btn">Saiba Mais</a>
`;
}

renderInicio();
