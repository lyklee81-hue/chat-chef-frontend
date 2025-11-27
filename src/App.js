import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Info from "./pages/Info";
import { data } from "autoprefixer";
function App() {
  // logic
  const [ingredientList, setIngredientList] = useState([]);

  // view
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/info"
        element={
          <Info sendIngredientList={(date) => setIngredientList(data)} />
        }
      />
      <Route path="/chat" element={<Chat ingredientList={ingredientList} />} />
    </Routes>
  );
}

export default App;
