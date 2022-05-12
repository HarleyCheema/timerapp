import React, { useState } from "react";
import { render } from "react-dom";
import Timer from "./components/Timer";


function App() {
  return (
    <div className="flex flex-col justify-center">
      <header className="flex  justify-center p-4 bg-blue-100 border-b-2 border-blue-200 shadow-md">
        <h1 className="text-4xl">Countdown Timer App</h1>
      </header>
      <Timer />
    </div>
  );
}



render(React.createElement(App), document.getElementById("root"));
