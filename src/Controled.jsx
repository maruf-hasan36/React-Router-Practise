import React, { useState } from "react";
const Handler = (e) => {
  console.log(e.target.value);
};

const Controled = () => {
  const [email, setEmail] = useState(null);
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
    </div>
  );
};

export default Controled;
