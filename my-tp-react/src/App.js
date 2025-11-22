import React from 'react';
import ClickMeButton from './ClickMeButton';
import ToggleButton from './ToggleButton';
import AppButtons from './AppButtons';
import Counter from './Counter';
import DisplayTab from './DisplayTab';
import UserForm from './UserForm';
import DivForm from './DivForm'; 

function App() {
  const tab1 = ["hello", "world", "from", "react"];
  const tab2 = ["apple", "banana", "orange"];

  return (
    <div>
      <h2>Exercise 1</h2>
      <ClickMeButton />
      <ToggleButton />
      <AppButtons />
      <Counter />

      <h2>Exercise 2</h2>
      <h3>Table 1</h3>
      <DisplayTab items={tab1} />
      <h3>Table 2</h3>
      <DisplayTab items={tab2} />

      <h2>Exercise 3</h2>
      <UserForm />

      <h2>Exercise 4</h2>
      <DivForm />
    </div>
  );
}

export default App;
