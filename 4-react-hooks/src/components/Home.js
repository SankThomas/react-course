import React, { useContext, useState } from "react";
import { StateContext } from "../context/Context";

export default function Home() {
  const { items, deleteItems } = useContext(StateContext);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>

          <button onClick={() => deleteItems(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

// function Home1() {
//   return (
//     <div>
//       <Home2 />
//     </div>
//   );
// }

// function Home2() {
//   const { name } = useContext(StateContext);

//   return <div>{name}</div>;
// }
