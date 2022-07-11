import React, { useState } from "react";
import "./styles.css";
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";

export function Home() {
  const isReady = true;
  const [value, onChange] = useState(new Date(2022, 0, 1), new Date(2022, 0, 10));
  const defaultV = [new Date(2022, 0, 1), new Date(2022, 0, 3)];
  console.log(defaultV);

  return (
    <div className="container">
      <Calendar onChange={onChange} value={value} defaultValue={defaultV}/>
      {/* <text className="title"> React </text>
      <text className="decription">
        {" "}
        Curso Full Stack Node - Digital House{" "}
      </text> */}
    </div>
  );
}
