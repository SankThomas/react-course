import React, { useState } from "react";
import FrontCard from "./components/FrontCard";
import BackCard from "./components/BackCard";

export default function App() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <>
      {/* {isShowing ? <BackCard /> : <FrontCard />} */}

      {!isShowing ? (
        <FrontCard setIsShowing={setIsShowing} />
      ) : (
        <BackCard setIsShowing={setIsShowing} />
      )}
    </>
  );
}
