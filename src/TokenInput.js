import * as React from "react";

export default function TokenInput({ token, setToken, onSubmit }: Props) {
  return (
    <div className="pt-20">
      <input
        className="pl-4"
        onChange={(event) => setToken(event.target.value)}
        value={token}
        placeholder="Enter your token"
      />
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
