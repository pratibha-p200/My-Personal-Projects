import { useState } from "react";

function App() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    if (!dob) {
      alert("Please select your date of birth");
      return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();   //calculate intial age

    const monthDifference =
      today.getMonth() - birthDate.getMonth(); //calculate month difference

    if (
      monthDifference < 0 ||
      (monthDifference === 0 &&
        today.getDate() < birthDate.getDate())  //check if the birthday has occurred this year
    ) {
      years--;
    }

    setAge(years);
  };

  return (
    <div className="container">

      <h1>Age Calculator</h1>

      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />

      <br /><br />

      <button onClick={calculateAge}>
        Calculate Age
      </button>

      <h2>
        {age !== "" && `Your Age is ${age} Years`}
      </h2>

    </div>
  );
}

export default App;



// output
// -----------------------------

//       Age Calculator

// Date of Birth
// [ 12/05/2000 ]

// [ Calculate Age ]

// Your Age is

// 25 Years

// -----------------------------


// Where :-
// type="date" its displays calender picker.
