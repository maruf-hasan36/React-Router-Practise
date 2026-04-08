import React from "react";

const SimpleForm = () => {
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input type="text" name="name" placeholder="Enter your Name" />
        <br />
        <input type="text" name="email" placeholder="Enter your email here" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
