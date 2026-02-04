function Player({ songName, artist, onPrev, onNext, onPlay }) {
  return (
    <div className="player-card">
      <div className="art" aria-hidden>
        🎵
      </div>
      <div className="info">
        <h1 className="song">{songName}</h1>
        <h2 className="artist">{artist}</h2>

        <div className="controls" role="group" aria-label="player controls">
          <button className="btn" onClick={onPrev}>
            Prev
          </button>
          <button className="btn primary" onClick={onPlay || (() => {})}>
            Play
          </button>
          <button className="btn" onClick={onNext}>
            Next
          </button>
        </div>

        <div className="meta">Now playing</div>
      </div>
    </div>
  );
}

export default Player;
