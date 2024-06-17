// import React from "react";

// export default function List(props) {
//   return (
//     <div>
//       {props.items.map((item) => (
//         <article key={item.id}>
//           <h3>{item.text}</h3>
//         </article>
//       ))}
//     </div>
//   );
// }

import React from "react";

export default function List({ items, handleEdit, handleDelete }) {
  return (
    <div>
      {items.length === 1 ? "1 item" : `${items.length} items`}

      {items.map((item) => (
        <article key={item.id}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3>{item.text}</h3>
            <ul
              style={{
                display: "flex",
                listStyleType: "none",
                gap: 10,
              }}
            >
              <li>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
              </li>
              <li>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </li>
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
