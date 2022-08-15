import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Random, Random_V2, Tag, Tag_V2 } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="wrapper">
      <h1>Random GIF Application</h1>
      <div className="main-container">
        {/* <Random /> */}
        {/* <Tag /> */}
        <Random_V2 />
        <Tag_V2 />
      </div>
    </main>
  );
}

export default App;
