import React from "react";
export default function Link({ children, ...props }) {
  return (
    <a
      {...props}
      target="_blank"
      className="hover:underline"
      style={{ color: "#f5d4b7" }}
    >
      {children}
    </a>
  );
}
