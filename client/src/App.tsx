import React from "react";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="bg-black w-full h-screen ">
        <Routes>
          <Route
            element={<Home />}
            path="/"
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
