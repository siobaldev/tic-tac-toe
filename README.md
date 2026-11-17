# Tic-Tac-Toe

A classic two-player Tic-Tac-Toe game built with Next.js and React. Players take turns as X and O on a 3×3 board, and the first to get three in a row wins. The game detects draws, keeps a running score across rounds, and is responsive on both phones and desktop.

**Live demo:** https://siobal-tic-tac-toe.vercel.app/

## Features

- Two-player local play with X and O taking turns
- Win and draw detection, with the winning line highlighted
- Scoreboard tracking wins for each player and draws across rounds
- New Game button that resets the board and keeps the score
- Pop, win, and draw animations (disabled for users who prefer reduced motion)
- Responsive layout for mobile and desktop
- Accessible squares with labels, keyboard support, and a live status message

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router) and React
- TypeScript
- [Tailwind CSS](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/)
- [Vite+](https://viteplus.dev/) for the toolchain (formatting, linting, type checks, package management)
- pnpm
- Deployed on [Vercel](https://vercel.com/)

## Getting Started

```bash
vp install
vp run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Other commands:

```bash
vp check        # format, lint, and type check
vp check --fix  # auto-fix what it can
vp run build    # production build
```

## How to Play

1. X goes first. Click an empty square to place your mark.
2. Players alternate turns.
3. Get three marks in a row (horizontal, vertical, or diagonal) to win.
4. If the board fills up with no winner, the game is a draw.
5. Click **New Game** to play again. The scores are kept.

## Project Structure

```
app/                  page layout, global styles, favicons
components/game-comp/ board, square, scoreboard, turn status, game container
components/ui/        shadcn/ui components
hooks/                useTicTacToe state hook
lib/game.ts           pure game logic (winner check and reducer)
public/               fonts, images
```

The game rules live in `lib/game.ts` as a pure reducer with no React in it, so the logic is separate from the UI and easy to test.
