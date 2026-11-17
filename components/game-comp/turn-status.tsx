import type { Player } from "@/lib/game";
import { playerColor } from "./styles";

type TurnStatusProps = {
  currentPlayer: Player;
  winner: Player | null;
  isDraw: boolean;
};

export function TurnStatus({ currentPlayer, winner, isDraw }: TurnStatusProps) {
  return (
    <p
      aria-live="polite"
      className="text-border-shadow text-center text-base min-[500px]:text-2xl text-white"
    >
      {winner ? (
        <>
          Player{" "}
          <span
            className={`inline-block animate-pop motion-reduce:animate-none ${playerColor[winner]}`}
          >
            {winner}
          </span>{" "}
          wins!
        </>
      ) : isDraw ? (
        <>It’s a draw!</>
      ) : (
        <>
          Player <span className={playerColor[currentPlayer]}>{currentPlayer}</span>’s turn
        </>
      )}
    </p>
  );
}
