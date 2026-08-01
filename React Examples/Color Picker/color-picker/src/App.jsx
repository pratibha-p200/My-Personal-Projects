import { useState } from "react";
import "./index.css";

function App() {
  const [color, setColor] = useState("#3498db");

  return (
    <div className="container">
      <h1>Color Picker</h1>

      <div
        className="color-box"
        style={{ backgroundColor: color }}
      >
        {color}
      </div>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <p>Selected Color: {color}</p>
    </div>
  );
}

export default App;