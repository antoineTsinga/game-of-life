import { BoardType } from "./exempleGameofLife";

const generateInitalRandomState = (size: number) => {
  const initial = new Array(size);
  for (let i = 0; i < size; i++) {
    // const layer = i;
    const layer = Math.ceil(i / 10);
    initial[i] = new Array(size);
    let limitLive = size;

    for (let j = 0; j < size; j++) {
      if (layer % 2 === 0) {
        limitLive--;
        initial[i][j] = limitLive > 0 ? Math.round(Math.random()) : 0;
      } else {
        initial[i][j] = 0;
      }
    }
  }

  return initial;
};
const generateInit = (size: number) => {
  const init = new Array(size);
  for (let i = 0; i < size; i++) {
    init[i] = new Array(size);
    for (let j = 0; j < size; j++) {
      init[i][j] = 0;
    }
  }

  return init;
};

const valid = (col: number, row: number, size: number) => {
  return 0 <= row && row < size && 0 <= col && col < size;
};

const generateState = (s: BoardType, size: number) => {
  const state = s.map((row) => [...row]);
  const directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
    [-1, -1],
  ];

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      let aliveNeighboors = 0;
      for (const [dx, dy] of directions) {
        const next_row = row + dy;
        const next_col = col + dx;

        if (valid(next_row, next_col, size)) {
          aliveNeighboors += s[next_row][next_col];
        }
      }

      if (s[row][col] === 1) {
        state[row][col] =
          aliveNeighboors === 3 || aliveNeighboors === 2 ? 1 : 0;
      } else {
        state[row][col] = aliveNeighboors === 3 ? 1 : 0;
      }
    }
  }

  return state;
};


function centerMatrix(sourceMatrix: BoardType, targetRows, targetCols) {
  if (!sourceMatrix) return []
  const sourceRows = sourceMatrix.length;
  const sourceCols = sourceMatrix[0].length;
  
  // Déterminer les décalages nécessaires pour centrer la matrice
  const rowOffset = Math.floor((targetRows - sourceRows) / 2);
  const colOffset = Math.floor((targetCols - sourceCols) / 2);
  
  // Créer une matrice cible remplie de zéros
  const targetMatrix = Array.from({ length: targetRows }, () => Array(targetCols).fill(0));
  
  // Copier les valeurs de la matrice source dans la matrice cible avec décalage centré
  for (let i = 0; i < sourceRows; i++) {
      for (let j = 0; j < sourceCols; j++) {
          const targetRow = rowOffset + i;
          const targetCol = colOffset + j;
          if (targetRow >= 0 && targetRow < targetRows && targetCol >= 0 && targetCol < targetCols) {
              targetMatrix[targetRow][targetCol] = sourceMatrix[i][j];
          }
      }
  }
  
  return targetMatrix;
}



export { generateInitalRandomState, generateInit, generateState,centerMatrix };
