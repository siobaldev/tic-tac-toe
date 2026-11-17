"use client";

import { Button } from "@/components/ui/button";
import { useTicTacToe } from "@/hooks/use-tic-tac-toe";
import { Board } from "./board";
import { Scoreboard } from "./scoreboard";
import { TurnStatus } from "./turn-status";

export function Game() {
  const { board, currentPlayer, winner, winningLine, isDraw, isGameOver, scores, play, newGame } =
    useTicTacToe();

  return (
    <div className="mx-auto mt-6 flex w-full max-w-sm flex-col gap-5 md:mx-0 md:mt-0">
      <TurnStatus currentPlayer={currentPlayer} winner={winner} isDraw={isDraw} />
      <Board
        board={board}
        winningLine={winningLine}
        isGameOver={isGameOver}
        isDraw={isDraw}
        onPlay={play}
      />
      <Scoreboard scores={scores} />

      <Button
        type="button"
        onClick={newGame}
        className="card-shadow py-6 w-full rounded-xl text-base border-2 border-black bg-teal text-white hover:bg-teal/90 active:scale-[0.98] hover:scale-[1.02] cursor-pointer duration-100 transition-transform"
      >
        <span className="text-border-shadow">New Game</span>
      </Button>
    </div>
  );
}
