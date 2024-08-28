import React from "react";
import State from "./hooks/State";
import Effect from "./hooks/Effect";
import Ref from "./hooks/Ref";
import Home from "./components/Home";
import Memo from "./hooks/Memo";
import Callback from "./hooks/Callback";

export default function App() {
  return (
    <div>
      {/* <Ref /> */}
      {/* <State /> */}
      <Effect />

      <Home />
      <Memo />
      <Callback />
    </div>
  );
}
