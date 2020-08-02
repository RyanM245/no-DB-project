import * as React from "react";

function ArrowLeftIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M5 12h14M5 12l6 6M5 12l6-6" />
    </svg>
  );
}

export default ArrowLeftIcon;
