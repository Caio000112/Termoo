const letras = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
  ];
  
  const tabuleiro = document.getElementById('tabuleiro');
  const teclado = document.getElementById('teclado');
  
  let linhaAtual = 0;
  let colunaAtual = 0;
  let grid = Array.from({ length: 6 }, () => Array(5).fill(''));
  
 
  for (let i = 0; i < 6 * 5; i++) {
    const celula = document.createElement('div');
    celula.className = 'celula';
    celula.id = `celula-${Math.floor(i / 5)}-${i % 5}`;
    tabuleiro.appendChild(celula);
  }
  
 
  letras.forEach(linha => {
    const divLinha = document.createElement('div');
    divLinha.className = 'linha';
  
    linha.forEach(tecla => {
      const btn = document.createElement('button');
      btn.className = 'tecla';
      btn.textContent = tecla;
      btn.onclick = () => handleTecla(tecla);
      divLinha.appendChild(btn);
    });
  
    teclado.appendChild(divLinha);
  });
  
  function handleTecla(tecla) {
    if (tecla === 'ENTER') {
      if (colunaAtual === 5 && linhaAtual < 5) {
        linhaAtual++;
        colunaAtual = 0;
      }
      return;
    }
  
    if (tecla === '⌫') {
      if (colunaAtual > 0) {
        colunaAtual--;
        grid[linhaAtual][colunaAtual] = '';
        atualizarCelula();
      }
      return;
    }
  
    if (colunaAtual < 5) {
      grid[linhaAtual][colunaAtual] = tecla;
      atualizarCelula();
      colunaAtual++;
    }
  }
  
  function atualizarCelula() {
    for (let l = 0; l < 6; l++) {
      for (let c = 0; c < 5; c++) {
        const celula = document.getElementById(`celula-${l}-${c}`);
        celula.textContent = grid[l][c];
      }
    }
  }
  