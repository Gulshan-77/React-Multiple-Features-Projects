import React, { useEffect } from "react";
import { useState } from "react";

const RandomColor = () => {
  const [colortype, setColortype] = useState("hex");

  const [color, setColor] = useState("rosyBrown");

  function createrandomColors(length) {
    return Math.floor(Math.random() * length);
  }

  function createRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[createrandomColors(hex.length)];
      // += eg: x += y : same as x = x +y : x = 10; x += 5; value of x is 15 --- adds a value to a variable.
    }

    console.log(hexColor);
    setColor(hexColor);
  }

  function createRandomRgbColor() {
    const r = createrandomColors(226);
    const g = createrandomColors(226);
    const b = createrandomColors(226);
    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (colortype === "rgb") createRandomRgbColor();
    else createRandomHexColor();
  }, [colortype]);

  return (
    <div>
      <h1>RANDOM COLOR GENERATOR : HEX OR RGB</h1>
      <div
        style={{
          width: "84%",
          height: "55vh",
          margin: "90px auto",
          backgroundColor: color,
          padding: "30px 30px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "inherit",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: "15px",
        }}
      >
        <button onClick={() => setColortype("rgb")}>Create RGB Color</button>
        <button onClick={() => setColortype("hex")}>Create Hex Color</button>

        <button
          onClick={
            colortype === "hex" ? createRandomHexColor : createRandomRgbColor
          }
        >
          Generate Random Color
        </button>

        <div
          style={{
            width: "50vw",
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            fontSize: "38px",
            margin: "80px auto",
            flexDirection: "column",
          }}
        >
          <h6>{colortype === "hex" ? "Hex Color" : "RGB Color"}</h6>
          <h5>{color}</h5>
        </div>
      </div>
    </div>
  );
};

export default RandomColor;
