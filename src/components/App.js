import React, { useState } from "react";
import Header from "./Header";           // Correct: same folder
import ShoppingList from "./ShoppingList"; // Correct: same folder
import itemData from "../data/items";   // Go up one level to src/data

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeClick = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;