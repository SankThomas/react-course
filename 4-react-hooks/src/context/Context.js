import React, { createContext, useState } from "react";

export const StateContext = createContext();

export default function Context({ children }) {
  const [name, setName] = useState("Sankara");
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Thomas",
      desc: "FE Web Dev",
    },
    {
      id: 2,
      title: "Sankara",
      desc: "BE Dev",
    },
  ]);

  async function deleteItems(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  const context = { name, setName, items, deleteItems };

  return (
    <StateContext.Provider value={context}>{children}</StateContext.Provider>
  );
}
