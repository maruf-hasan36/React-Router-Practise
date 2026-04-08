import React, { useRef } from "react";

const Uncontrolled = () => {
  const EmailRef = useRef("");
  const PassRef = useRef("");

  const HandleUncontrolled = (e) => {
    e.preventDefault();
    const email = EmailRef.current.value;
    const pass = PassRef.current.value;

    console.log(email, pass);
  };
  return (
    <div>
      <form onSubmit={HandleUncontrolled}>
        <input ref={EmailRef} type="email" placeholder="email" />
        <br />
        <input ref={PassRef} type="password" placeholder="Password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Uncontrolled;
