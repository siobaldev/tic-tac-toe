import { Game } from "@/components/game-comp/game";
import { LogoWords } from "@/components/game-comp/logo-words";

export default function Home() {
  return (
    <main className="container mx-auto mt-10 flex min-h-svh select-none flex-col px-4 md:mt-0 md:flex-row md:items-center md:justify-center md:gap-16 lg:gap-24">
      {/* Logo: horizontal on mobile, vertical on the left on desktop */}
      <h1 className="flex items-center justify-center gap-4 text-2xl min-[500px]:text-3xl md:rotate-180 md:flex-row md:text-7xl md:[writing-mode:vertical-rl]">
        <LogoWords />
      </h1>

      <Game />

      {/* Right logo: desktop only, decorative */}
      <div
        aria-hidden="true"
        className="hidden items-center justify-center gap-4 overflow-hidden text-7xl md:flex [writing-mode:vertical-rl]"
      >
        <LogoWords />
      </div>
    </main>
  );
}
