import React, { useState } from 'react'; 

function ToggleButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button onClick={() => setClicked(!clicked)}>ClickMe</button>
      <p>{clicked ? "Clicked" : "Not Clicked"}</p>
    </div>
  );
}

export default ToggleButton; 
