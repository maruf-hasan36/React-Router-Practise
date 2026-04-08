import React from "react";

const FromAction = () => {
  const HandleAction = (action) => {
    console.log(action.get("name"));
    console.log(action.get("email"));
  };

  return (
    <div>
      <form action={HandleAction}>
        <input type="name" name="name" placeholder="Enter your name" />
        <br />
        <input type="email" name="email" placeholder="Enter your email here" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default FromAction;
