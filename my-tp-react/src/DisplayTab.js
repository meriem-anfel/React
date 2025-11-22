import React, { useState } from 'react';

function DisplayTab({ items }) {
  const [tab, setTab] = useState(items);

  const handleRemove = (indexToRemove) => {
    setTab(tab.filter((_, index) => index !== indexToRemove));
  };

  return (
    <ul>
      {tab.map((item, index) => (
        <li key={index} onClick={() => handleRemove(index)}>
          Element {index + 1} is: {item}
        </li>
      ))}
    </ul>
  );
}

export default DisplayTab;
