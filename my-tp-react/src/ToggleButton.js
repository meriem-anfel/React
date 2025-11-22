import React, { useState } from 'react'; // il manquait peut-être React ou useState

function ToggleButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button onClick={() => setClicked(!clicked)}>ClickMe</button>
      <p>{clicked ? "Clicked" : "Not Clicked"}</p>
    </div>
  );
}

export default ToggleButton; // important ! export par défaut
