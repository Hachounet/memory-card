import GameTitle from './GameTitle';

export default function Header() {
  const gameTitle = 'PokéMemory';
  return (
    <header className="header">
      <GameTitle gameTitle={gameTitle}></GameTitle>
    </header>
  );
}
