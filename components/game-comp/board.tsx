import { Card, CardContent } from "@/components/ui/card";
import type { Cell } from "@/lib/game";
import { Square } from "./square";

type BoardProps = {
  board: Cell[];
  winningLine: readonly number[];
  isGameOver: boolean;
  isDraw: boolean;
  onPlay: (index: number) => void;
};

export function Board({ board, winningLine, isGameOver, isDraw, onPlay }: BoardProps) {
  return (
    <Card
      className={`text-border-shadow gap-0 ring-0 rounded-2xl border-2 border-black bg-bg-elevated py-0 motion-reduce:animate-none ${
        isDraw ? "animate-shake" : ""
      }`}
    >
      <CardContent className="p-4">
        <div className="grid grid-cols-3 gap-3">
          {board.map((value, i) => (
            <Square
              key={i}
              index={i}
              value={value}
              disabled={isGameOver || value !== null}
              winOrder={winningLine.indexOf(i)}
              onPlay={onPlay}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
