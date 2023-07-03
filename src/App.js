import { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState([
    ["x", "o", "x"],
    ["x", "x", " "],
    ["x", "x", " "]
  ]);

  const changeState = (row, column) => {
    setState();
  };

  return (
    <div>
      {state.map((row) => {
        return (
          <div style={{ flexDirection: "row", display: "flex" }}>
            {row.map((column) => (
              <div
                style={{
                  width: 20,
                  border: "1px black solid",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex"
                }}
              >
                <span>{column}</span>
              </div>
            ))}{" "}
          </div>
        );
      })}
      <button onClick={changeState} style={{ marginTop: "10px" }}>
        Change text
      </button>
    </div>
  );
}
