import React, { useState, useEffect } from "react";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://api.github.com/users");
      const data = await res.json();
      setUsers(data);
    };

    getUsers();
  }, []);

  return (
    <>
      <section>
        {users.map((user) => (
          <div key={user.login}>
            <img src={user.avatar_url} alt={user.login} />
            <article>
              <h2>{user.login}</h2>
              <a href={user.html_url}>Github Profile</a>
            </article>
          </div>
        ))}
      </section>
    </>
  );
}
