import { useState } from "react";
import Player from "./Player";

const TRACKS = [
  { songName: "School", artist: "Nirvana" },
  { songName: "Back to School", artist: "Deftones" },
  { songName: "Imagine", artist: "John Lennon" },
  { songName: "Bohemian Rhapsody", artist: "Queen" },
];

function App() {
  const [idx, setIdx] = useState(0);

  const current = TRACKS[idx];

  function handlePrev() {
    setIdx((p) => (p - 1 + TRACKS.length) % TRACKS.length);
  }

  function handleNext() {
    setIdx((p) => (p + 1) % TRACKS.length);
  }

  return (
    <div className="app">
      <div className="container">
        <Player
          songName={current.songName}
          artist={current.artist}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </div>
  );
}

export default App;
