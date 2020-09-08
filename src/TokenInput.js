import * as React from "react";

import Link from "./Link";
export default function TokenInput({ token, setToken, onSubmit }: Props) {
  return (
    <div>
      <input
        className="px-2 h-10 text-lg"
        onChange={(event) => setToken(event.target.value)}
        value={token}
        placeholder="Enter token..."
        style={{ background: "#fff1e2", color: "#a3080c" }}
      />
      <div className="text-center mt-4">
        <Link href="https://api.up.com.au/">Get your Up token</Link>
      </div>
      <div className="flex justify-center pt-10">
        <button
          style={{ backgroundColor: "#f5d4b7" }}
          className="w-20"
          onClick={onSubmit}
        >
          Go
        </button>
      </div>
    </div>
  );
}
