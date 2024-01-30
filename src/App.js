import { useState } from "react";
import "./styles.css";

export default function App() {
  const submit = (e) => {
    e.preventDefault();
    if (!disablebutton) setFull(`${first} ${last}`);
  };
  const [first, setFirst] = useState("");
  const [last, setlast] = useState("");
  const [full, setFull] = useState("");

  const disablebutton = first === "" || last === "";

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onClick={submit}>
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
          onChange={(e) => setlast(e.target.value)}
          required
        />
        <br />
        <button type="submit" disabled={disablebutton}>
          Submit
        </button>
      </form>
      <br />
      <p>Full Name: {full}</p>
    </div>
  );
}
