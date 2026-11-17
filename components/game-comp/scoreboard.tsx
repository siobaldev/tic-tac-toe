import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Scores } from "@/lib/game";

function ScoreItem({
  value,
  label,
  labelClass,
}: {
  value: number;
  label: string;
  labelClass: string;
}) {
  return (
    <div className="flex flex-1 flex-col items-center gap-1 py-3">
      <span className="text-2xl text-white">{value}</span>
      <span className={`text-center text-xs min-[500px]:text-base ${labelClass}`}>{label}</span>
    </div>
  );
}

function Divider() {
  return (
    <Separator
      orientation="vertical"
      className="bg-black data-[orientation=vertical]:h-auto data-[orientation=vertical]:w-0.5"
    />
  );
}

export function Scoreboard({ scores }: { scores: Scores }) {
  return (
    <Card className="text-border-shadow gap-0 ring-0 rounded-2xl border-2 border-black bg-bg-elevated py-0">
      <CardContent className="flex p-0">
        <ScoreItem value={scores.x} label="Player X" labelClass="text-orange" />
        <Divider />
        <ScoreItem value={scores.draws} label="Draws" labelClass="text-white" />
        <Divider />
        <ScoreItem value={scores.o} label="Player O" labelClass="text-yellow" />
      </CardContent>
    </Card>
  );
}
