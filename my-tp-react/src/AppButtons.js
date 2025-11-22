import React, { useState } from 'react';

function AppButtons() {
  const [lastClicked, setLastClicked] = useState("");

  const handleClick = (buttonName) => {
    setLastClicked(buttonName);
  };

  return (
    <div>
      <button onClick={() => handleClick("Button #1")}>Button1</button>
      <button onClick={() => handleClick("Button #2")}>Button2</button>
      <button onClick={() => handleClick("Button #3")}>Button3</button>
      {lastClicked && <p>{lastClicked} was clicked</p>}
    </div>
  );
}

export default AppButtons;
