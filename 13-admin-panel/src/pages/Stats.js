import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  BarElement,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default function Stats() {
  const [showMonthly, setShowMonthly] = useState(false);

  const weekly = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Your Stats For The Past Week",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const monthly = {
    labels: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ],
    datasets: [
      {
        label: "Your Stats For The Past Month",
        data: [
          14, 16, 30, 28, 38, 40, 48, 56, 64, 72, 80, 88, 94, 102, 110, 118,
          116, 112, 108, 104, 108, 108, 112, 116, 120, 113, 109, 105, 102, 100,
        ],
      },
    ],
  };

  return (
    <>
      <section className="section">
        <h1>Your website statistics</h1>
        <p>
          Learn more about the acitivity and behaviour of your site's visitors.
        </p>

        <br />

        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            marginBottom: 24,
          }}
        >
          <li>
            <button
              className={`btn ${!showMonthly ? "btn-active" : "btn-gray"}`}
              onClick={() => setShowMonthly(false)}
            >
              Weekly
            </button>
          </li>
          <li>
            <button
              className={`btn ${showMonthly ? "btn-active" : "btn-gray"}`}
              onClick={() => setShowMonthly(true)}
            >
              Monthly
            </button>
          </li>
        </ul>

        {showMonthly ? <Bar data={monthly} /> : <Bar data={weekly} />}
      </section>
    </>
  );
}
