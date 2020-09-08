import React from "react";
import HowLong from "./HowLong";
import TokenInput from "./TokenInput";
import Disclaimer from "./Disclaimer";

const { useState } = React;

function DroolEmoji() {
  return (
    <span role="img" aria-label="drool emoji">
      🤤
    </span>
  );
}
function App() {
  const [token, setToken] = useState("");
  const [stage, setStage] = useState(0);

  return (
    <div className="App min-h-screen" style={{ backgroundColor: "#a3080c" }}>
      <div
        className="h-full flex flex-col w-screen justify-between items-center px-4 min-h-screen"
        // style={{ minHeight: 800 }}
      >
        <div className="pt-20">
          <div className="w-100 flex justify-between items-center">
            <img
              src={require("./images/kfc.jpg")}
              alt="kfc logo"
              className="w-20 mr-8"
            />
            <img
              src={require("./images/up.png")}
              alt="up logo"
              className="w-20"
            />
          </div>
          <div className="text-white lg:text-2xl text-xl pt-4">
            <DroolEmoji /> How long since you last had KFC? <DroolEmoji />
          </div>
        </div>
        <div>
          {stage === 0 ? (
            <TokenInput
              setToken={setToken}
              token={token}
              onSubmit={() => setStage(1)}
            />
          ) : (
            <HowLong token={token} onBack={() => setStage(0)} />
          )}
        </div>
        <Disclaimer className="" />
      </div>
    </div>
  );
}

export default App;
