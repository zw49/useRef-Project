import { useState, useRef } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");

  const playerNameInput = useRef();

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerNameInput} type="text" />
        <button
          onClick={() => {
            setPlayerName(playerNameInput.current.value);
          }}
        >
          Set Name
        </button>
      </p>
    </section>
  );
}
