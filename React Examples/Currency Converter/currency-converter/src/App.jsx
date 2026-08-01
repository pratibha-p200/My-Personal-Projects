import { useState } from "react";
import "./index.css";

function App() {
  const [amount, setAmount] = useState("");                 // State variable to store the amount entered by the user
  const [fromCurrency, setFromCurrency] = useState("USD");   //Source currency selected by the user
  const [toCurrency, setToCurrency] = useState("INR");       // Target currency selected by the user
  const [result, setResult] = useState("");                  // State variable to store the converted amount after conversion

  const currencies = [
    "USD", // US Dollar
    "INR", // Indian Rupee
    "EUR", // Euro
    "GBP", // British Pound
    "JPY", // Japanese Yen
    "AUD", // Australian Dollar
    "CAD", // Canadian Dollar
    "SGD", // Singapore Dollar
  ];

  const convertCurrency = async () => {  
    if (!amount) {
      alert("Please enter an amount");
      return;
    }

    try {
      const response = await fetch(
        `https://open.er-api.com/v6/latest/${fromCurrency}`
      );

      const data = await response.json();

      const rate = data.rates[toCurrency];

      const convertedAmount = amount * rate;

      setResult(convertedAmount.toFixed(2));
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container">
      <h1>Currency Converter</h1>

      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="dropdowns">
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency}>{currency}</option>
          ))}
        </select>

        <span>➡️</span>

        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency}>{currency}</option>
          ))}
        </select>
      </div>

      <button onClick={convertCurrency}>
        Convert
      </button>

      {result && (
        <h2>
          {amount} {fromCurrency} = {result} {toCurrency}
        </h2>
      )}
    </div>
  );
}

export default App;