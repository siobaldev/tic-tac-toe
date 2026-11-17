export type Player = "X" | "O";
export type Cell = Player | null;
export type Scores = { x: number; draws: number; o: number };

export type GameState = {
  board: Cell[];
  currentPlayer: Player;
  winner: Player | null;
  winningLine: readonly number[];
  isDraw: boolean;
  scores: Scores;
};

export type GameAction = { type: "PLAY"; index: number } | { type: "NEW_GAME" };

const WINNING_LINES: readonly (readonly number[])[] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function getWinner(board: Cell[]): { winner: Player; line: readonly number[] } | null {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;
    const player = board[a];
    if (player && player === board[b] && player === board[c]) {
      return { winner: player, line };
    }
  }
  return null;
}

export function createInitialState(scores?: Scores): GameState {
  return {
    board: Array(9).fill(null),
    currentPlayer: "X",
    winner: null,
    winningLine: [],
    isDraw: false,
    scores: scores ?? { x: 0, draws: 0, o: 0 },
  };
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "PLAY": {
      const { index } = action;
      // Ignore clicks on filled squares or after the game has ended
      if (state.board[index] || state.winner || state.isDraw) return state;

      const board = state.board.slice();
      board[index] = state.currentPlayer;

      const result = getWinner(board);
      if (result) {
        const key = result.winner === "X" ? "x" : "o";
        return {
          ...state,
          board,
          winner: result.winner,
          winningLine: result.line,
          scores: { ...state.scores, [key]: state.scores[key] + 1 },
        };
      }

      if (board.every(Boolean)) {
        return {
          ...state,
          board,
          isDraw: true,
          scores: { ...state.scores, draws: state.scores.draws + 1 },
        };
      }

      return {
        ...state,
        board,
        currentPlayer: state.currentPlayer === "X" ? "O" : "X",
      };
    }

    case "NEW_GAME":
      return createInitialState(state.scores);

    default:
      return state;
  }
}
