import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RecordList() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5050/record`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();
    return;
  }, [records.length]);

  async function deleteRecord(id) {
    await fetch(`http://localhost:5050/record/${id}`, {
      method: "DELETE",
    });
    const newRecords = records.filter((record) => record._id !== id);
    setRecords(newRecords);
  }

  return (
    <>
      <h3>Employee Records</h3>

      <div>
        <table width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Level</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {records.map((record) => (
              <Record
                key={record._id}
                record={record}
                deleteRecord={deleteRecord}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function Record(props) {
  return (
    <tr>
      <td>{props.record.name}</td>
      <td>{props.record.position}</td>
      <td>{props.record.level}</td>
      <td>
        <div
          style={{
            display: "flex",
            gap: 16,
          }}
        >
          <Link className="btn" to={`/edit/${props.record._id}`}>
            Edit
          </Link>
          <button
            className="btn"
            onClick={() => props.deleteRecord(props.record._id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
