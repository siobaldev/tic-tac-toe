import type { Player } from "@/lib/game";

export const playerColor: Record<Player, string> = {
  X: "text-orange",
  O: "text-yellow",
};

export const playerImage: Record<Player, string> = {
  X: "/letter-x.png",
  O: "/letter-o.png",
};
