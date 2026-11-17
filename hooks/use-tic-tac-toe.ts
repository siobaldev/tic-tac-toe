"use client";

import { useReducer } from "react";
import { createInitialState, gameReducer } from "@/lib/game";

export function useTicTacToe() {
  const [state, dispatch] = useReducer(gameReducer, undefined, () => createInitialState());

  return {
    ...state,
    isGameOver: state.winner !== null || state.isDraw,
    play: (index: number) => dispatch({ type: "PLAY", index }),
    newGame: () => dispatch({ type: "NEW_GAME" }),
  };
}
