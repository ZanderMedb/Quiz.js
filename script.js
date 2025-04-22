const personagens = [
    {
      nome: "Arya, a Maga da Luz",
      descricao: "Uma jovem sábia e curiosa que domina magias ancestrais. Arya valoriza o conhecimento e a harmonia.",
      emoji: "✨"
    },
    {
      nome: "Thorn, o Guerreiro da Terra",
      descricao: "Forte, leal e protetor. Thorn resolve problemas com coragem e firmeza. Sua força inspira todos ao redor.",
      emoji: "🛡️"
    },
    {
      nome: "Lira, a Alquimista dos Ventos",
      descricao: "Criativa e engenhosa, Lira mistura poções e desvenda mistérios. É ágil, inovadora e imprevisível.",
      emoji: "🌪️"
    }
  ];
  
  const perguntas = [
    {
      texto: "Qual seu passatempo favorito?",
      opcoes: [
        { texto: "Ler livros mágicos", pontos: [3,1,2] },
        { texto: "Treinar com espada", pontos: [1,3,2] },
        { texto: "Misturar poções", pontos: [2,2,3] }
      ]
    },
    {
      texto: "Como você resolve um conflito?",
      opcoes: [
        { texto: "Com diálogo e empatia", pontos: [3,1,2] },
        { texto: "Com ação imediata", pontos: [1,3,2] },
        { texto: "Procurando uma solução criativa", pontos: [2,2,3] }
      ]
    },
    {
      texto: "Qual qualidade mais valoriza?",
      opcoes: [
        { texto: "Sabedoria", pontos: [3,1,2] },
        { texto: "Coragem", pontos: [1,3,2] },
        { texto: "Criatividade", pontos: [2,2,3] }
      ]
    },
    {
      texto: "Onde prefere viver?",
      opcoes: [
        { texto: "Biblioteca mágica", pontos: [3,1,2] },
        { texto: "Fortaleza nas montanhas", pontos: [1,3,2] },
        { texto: "Laboratório suspenso", pontos: [2,2,3] }
      ]
    },
    {
      texto: "O que faria diante de um perigo?",
      opcoes: [
        { texto: "Analisaria antes de agir", pontos: [3,1,2] },
        { texto: "Enfrentaria de frente", pontos: [1,3,2] },
        { texto: "Planejaria uma estratégia", pontos: [2,2,3] }
      ]
    },
    {
      texto: "Qual elemento mais te representa?",
      opcoes: [
        { texto: "Luz", pontos: [3,1,2] },
        { texto: "Terra", pontos: [1,3,2] },
        { texto: "Vento", pontos: [2,2,3] }
      ]
    },
    {
      texto: "Escolha uma virtude:",
      opcoes: [
        { texto: "Paciência", pontos: [3,1,2] },
        { texto: "Determinação", pontos: [1,3,2] },
        { texto: "Inovação", pontos: [2,2,3] }
      ]
    },
    {
      texto: "O que te motiva?",
      opcoes: [
        { texto: "Descobrir novos saberes", pontos: [3,1,2] },
        { texto: "Proteger quem ama", pontos: [1,3,2] },
        { texto: "Explorar novidades", pontos: [2,2,3] }
      ]
    },
    {
      texto: "Qual seu maior medo?",
      opcoes: [
        { texto: "Perder o conhecimento", pontos: [3,1,2] },
        { texto: "Fracassar na proteção", pontos: [1,3,2] },
        { texto: "Cair na rotina", pontos: [2,2,3] }
      ]
    },
    {
      texto: "Uma frase que te define:",
      opcoes: [
        { texto: "Sempre há algo novo para aprender", pontos: [3,1,2] },
        { texto: "Nunca recuo diante de desafios", pontos: [1,3,2] },
        { texto: "O impossível só existe até alguém tentar", pontos: [2,2,3] }
      ]
    }
  ];
  
  let estadoQuiz = {
    indicePergunta: 0,
    pontos: [0, 0, 0]
  };
  
  function renderInicio() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <h1>Bem-vindo(a) à Ilumária!</h1>
      <p>
        Em Ilumária, uma terra onde magia, coragem e criatividade moldam o destino, três grandes personagens caminham lado a lado:<br>
        <strong>Arya</strong>, a Maga da Luz, <strong>Thorn</strong>, o Guerreiro da Terra, e <strong>Lira</strong>, a Alquimista dos Ventos.<br><br>
        Descubra, através de um breve questionário, qual deles mais combina com você!
      </p>
      <button class="start-btn" onclick="iniciarQuiz()">Começar!</button>
    `;
  }
  
  function iniciarQuiz() {
    estadoQuiz.indicePergunta = 0;
    estadoQuiz.pontos = [0, 0, 0];
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
  