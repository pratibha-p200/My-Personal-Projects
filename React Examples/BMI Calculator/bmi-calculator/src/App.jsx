import { useState } from "react";
import "./index.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      alert("Please enter both height and weight.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);

    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setStatus("Underweight");
    } else if (bmiValue < 25) {
      setStatus("Normal Weight");
    } else if (bmiValue < 30) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  };

  const resetFields = () => {
    setHeight("");
    setWeight("");
    setBmi("");
    setStatus("");
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>

      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <br /> <br />
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <div className="buttons">
        <button onClick={calculateBMI}>Calculate</button>

        <br/> <br/>
        
        <button onClick={resetFields}>Reset</button>
      </div>

      {bmi && (
        <>
          <h2>Your BMI: {bmi}</h2>
          <h3>Status: {status}</h3>
        </>
      )}
    </div>
  );
}

export default App;