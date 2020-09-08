// @flow

import * as React from "react";
import classnames from "classnames";

export default function Disclaimer({ className }) {
  return (
    <div className={classnames("text-white text-center text-lg", className)}>
      <div>This has no affiliation with KFC or Up Bank.</div>
      <div>
        {" "}
        All requests are done locally. No one will have access to your token or
        transaction information.
      </div>
      <div>
        {" "}
        Code can be found{" "}
        <a
          href="https://github.com/james-e-adams/kfc-hacks"
          className="hover:underline"
        >
          {" "}
          here{" "}
        </a>
      </div>
      <div>
        Created with{" "}
        <span role="img" aria-label="heart emoji">
          ❤️
        </span>{" "}
        by{" "}
        <a className="hover:underline" href="https://twitter.com/@jamesadams0">
          James Adams
        </a>
      </div>
    </div>
  );
}
