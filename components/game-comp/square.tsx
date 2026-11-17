import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Cell } from "@/lib/game";
import { playerImage } from "./styles";

type SquareProps = {
  value: Cell;
  index: number;
  disabled: boolean;
  winOrder: number; // -1 when not part of the winning line
  onPlay: (index: number) => void;
};

export function Square({ value, index, disabled, winOrder, onPlay }: SquareProps) {
  const isWinning = winOrder >= 0;

  const look = !value
    ? "border-dashed bg-transparent hover:bg-transparent enabled:hover:scale-[1.02] enabled:active:scale-[0.98]"
    : isWinning
      ? "card-shadow bg-teal hover:bg-teal animate-pop motion-reduce:animate-none"
      : "card-shadow bg-background hover:bg-background animate-pop motion-reduce:animate-none";

  return (
    <Button
      type="button"
      disabled={disabled}
      onClick={() => onPlay(index)}
      aria-label={`Square ${index + 1}${value ? `, ${value}` : ", empty"}`}
      className={`cursor-pointer h-auto aspect-square w-full rounded-xl border-2 border-black p-0 transition-transform duration-100 disabled:opacity-100 ${look}`}
    >
      {value && (
        <span
          style={isWinning ? { animationDelay: `${winOrder * 150}ms` } : undefined}
          className={`pointer-events-none relative block size-full p-2 motion-reduce:animate-none ${
            isWinning ? "animate-win" : ""
          }`}
        >
          <Image
            src={playerImage[value]}
            alt=""
            fill
            sizes="120px"
            draggable={false}
            className="object-contain p-4"
          />
        </span>
      )}
    </Button>
  );
}
