import React, { useState } from 'react';

function DivForm() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [divs, setDivs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!width || !height || !bgColor) return;

    const newDiv = { width, height, bgColor };
    setDivs([...divs, newDiv]);

    setWidth("");
    setHeight("");
    setBgColor("");
  };

  return (
    <div>
      <h3>Create Divs</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Width (px)"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <input
          type="text"
          placeholder="Height (px)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="Background Color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
        <button type="submit">Add Div</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        {divs.map((div, index) => (
          <div
            key={index}
            style={{
              width: `${div.width}px`,
              height: `${div.height}px`,
              backgroundColor: div.bgColor,
              margin: "10px 0"
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default DivForm;
