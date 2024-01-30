import { useState } from "react";
import "./styles.css";

export default function App() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [full, setFull] = useState("");

  const disableButton = first === "" || last === "";

  const submit = (e) => {
    e.preventDefault();
    if (!disableButton) setFull(`${first} ${last}`);
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={submit}>
        <label>First Name:</label>
        <input
          type="text"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          required
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          value={last}
          onChange={(e) => setLast(e.target.value)}
          required
        />
        <br />
        <button type="submit" disabled={disableButton}>
          Submit
        </button>
      </form>
      <br />
      <p>Full Name: {full}</p>
    </div>
  );
}
