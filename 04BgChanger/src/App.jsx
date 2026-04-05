import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="flex gap-4">
        <button
          onClick={() => setColor("red")}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Red
        </button>

        <button
          onClick={() => setColor("blue")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Blue
        </button>

        <button
          onClick={() => setColor("green")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Green
        </button>

        <button
          onClick={() => setColor("yellow")}
          className="px-4 py-2 bg-yellow-500 text-black rounded"
        >
          Yellow
        </button>
      </div>
    </div>
  );
}

export default App;