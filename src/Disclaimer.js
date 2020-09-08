// @flow

import * as React from "react";
import classnames from "classnames";

function Link({ children, ...props }) {
  return (
    <a {...props} className="hover:underline" style={{ color: "#f5d4b7" }}>
      {children}
    </a>
  );
}
export default function Disclaimer({ className }) {
  return (
    <div className={classnames("text-white text-center text-lg", className)}>
      <div>
        <Link href="https://api.up.com.au/">Get your token</Link>
      </div>
      <div>This has no affiliation with KFC or Up Bank.</div>
      <div>
        {" "}
        All requests are done locally. No one will have access to your token or
        transaction information.
      </div>
      <div>
        {" "}
        Code can be found{" "}
        <Link href="https://github.com/james-e-adams/kfc-up"> here </Link>
      </div>
      <div>
        Created with{" "}
        <span role="img" aria-label="chicken leg emoji">
          🍗
        </span>{" "}
        by <Link href="https://twitter.com/@jamesadams0">James Adams</Link>
      </div>
    </div>
  );
}
