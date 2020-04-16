import React from 'react';
import "./global.css";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Find from "./components/Find";
import Share from "./components/Share";
import Stores from "./components/Stores";

function App() {
  return (
    <div className="fluid-container">
      < Header />
      < Presentation />
      < Find />
      < Share />
      < Stores />
      < Share />
    </div>
    
  );
}

export default App;
