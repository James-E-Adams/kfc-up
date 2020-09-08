import React from "react";
import HowLong from "./HowLong";
import TokenInput from "./TokenInput";

const { useState } = React;
function App() {
  const [token, setToken] = useState("");
  const [stage, setStage] = useState(0);

  return (
    <div className="App h-screen" style={{ backgroundColor: "#a3080c" }}>
      <div className="pt-20 flex flex-col w-screen justify-center items-center">
        <div className="text-white text-2xl">How long since you KFC'd?</div>

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
    </div>
  );
}

export default App;
