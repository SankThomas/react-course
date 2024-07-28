import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Record() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
  });
  const [isNew, setIsNew] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id?.toString() || undefined;

      if (!id) return;
      setIsNew(false);

      const response = await fetch(
        `http://localhost:5050/record/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        console.error(message);
        return;
      }

      const record = await response.json();

      if (!record) {
        console.warn(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(record);
    }

    fetchData();
  }, [params.id, navigate]);

  // Update the form
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // Handle form submit
  async function handleSubmit(e) {
    e.preventDefault();

    const person = { ...form };

    try {
      let response;
      if (isNew) {
        response = await fetch("http://localhost:5050/record", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(person),
        });
      } else {
        response = await fetch(`http://localhost:5050/record/${params.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(person),
        });
      }

      if (!response.ok) {
        throw new Error(`HTTP Errro: Status ${response.status}`);
      }
    } catch (error) {
      console.error(`A problem occured with your fetch operation: ${error}`);
    } finally {
      setForm({ name: "", postion: "", level: "" });
      navigate("/");
    }
  }

  return (
    <>
      <h3>Create / Update Employee Record</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="employee-info">
            <h2>Employee Info</h2>
            <p>
              This information will be publicly available, so be careful what
              you share.
            </p>
          </div>

          <div>
            <div>
              <label htmlFor="name">Employee name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => updateForm({ name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="position">Position</label>
              <input
                type="text"
                name="position"
                id="position"
                placeholder="Front-end web developer"
                value={form.position}
                onChange={(e) => updateForm({ position: e.target.value })}
              />
            </div>

            <div>
              <fieldset>
                <legend>Position Options</legend>

                <div>
                  <div className="options">
                    <input
                      type="radio"
                      name="positionOptions"
                      id="positionIntern"
                      value="Intern"
                      checked={form.level === "Intern"}
                      onChange={(e) => updateForm({ level: e.target.value })}
                    />
                    <label htmlFor="positionIntern">Intern</label>

                    <input
                      type="radio"
                      name="positionOptions"
                      id="positionJunior"
                      value="Junior"
                      checked={form.level === "Junior"}
                      onChange={(e) => updateForm({ level: e.target.value })}
                    />
                    <label htmlFor="positionJunior">Junior</label>

                    <input
                      type="radio"
                      name="positionOptions"
                      id="positionSenior"
                      value="Senior"
                      checked={form.level === "Senior"}
                      onChange={(e) => updateForm({ level: e.target.value })}
                    />
                    <label htmlFor="positionSenior">Senior</label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <button type="submit" className="btn">
          Save Employee Record
        </button>
      </form>
    </>
  );
}
