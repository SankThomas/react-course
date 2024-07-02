import React from "react";

export default function BackCard({ setIsShowing }) {
  return (
    <>
      <div className="container">
        <h2 onClick={() => setIsShowing(false)}>Contact me</h2>

        <p>Email: 1234@gmail.com</p>
        <p>Phone Number: +254 12345678</p>
      </div>
    </>
  );
}
