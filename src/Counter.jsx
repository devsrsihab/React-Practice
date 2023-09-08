import { useState } from "react";

export default function Counter() {
  const cardStyle = {
    padding: "20px",
    border: "1px solid red",
    borderRadius: "25px",
    width: "450px",
  };

  // adding handler
  const addHandler = () => {
    setCount(count + 1);
  };

  // reducer handler
  const reduceHandler = () => {
    const newCount = count - 1
    setCount(newCount)
  }

  // Even Chekcer
  const checkEven = () => {
    const isEvenShow = document.getElementById("isEvenShow");
    const isEven = count % 2 === 0 ? "Even" : "Odd";
    return (isEvenShow.innerText = isEven);
  };

  // resetCount handler
  const resetCount = () => {
    document.getElementById("isEvenShow").innerHTML=''

    setCount(0)
  }

  const [count, setCount] = useState(0);

  return (
    <div style={cardStyle} className="counter-card">
      <h3>Counter: {count}</h3>
      <div style={{ color: "red", fontWeight: "bold", fontSize: "2rem" }}>
        <p id="isEvenShow">{checkEven}</p>
      </div>
      <hr />
      {/* buttons */}

      <button onClick={addHandler}>Add</button>
      <button onClick={reduceHandler} >Reduce</button>
      <button onClick={checkEven} >Check Even</button>
      <button onClick={resetCount} >Reset</button>

    </div>
  );
}
