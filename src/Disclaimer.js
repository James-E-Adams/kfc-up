// @flow

import * as React from "react";
import classnames from "classnames";

import Link from "./Link";

export default function Disclaimer({ className }) {
  return (
    <div className={classnames("text-white text-center text-lg", className)}>
      <div></div>
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
        <span role="img" className="mr-2" aria-label="chicken leg emoji">
          🍗
        </span>
        by <Link href="https://twitter.com/@jamesadams0">James Adams</Link>
      </div>
    </div>
  );
}
