import React, { useState } from "react";

const Controled = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const Handler = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
    if (email.length < 6) {
      setError("pass very short");
    } else setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="name" name="text" required />
        <br />
        <input
          onChange={Handler}
          defaultValue={email}
          type="email"
          name="email"
          required
        />
        <input type="submit" />
      </form>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default Controled;
