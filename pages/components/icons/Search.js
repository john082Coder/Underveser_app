import React from "react";

function Search(props) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <rect width="20" height="20" fill="rgba(0,0,0,0)" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14 8.5C14 11.5376 11.5376 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3C11.5376 3 14 5.46243 14 8.5ZM8.5 12C10.433 12 12 10.433 12 8.5C12 6.567 10.433 5 8.5 5C6.567 5 5 6.567 5 8.5C5 10.433 6.567 12 8.5 12Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 17L11 13L12.4142 11.5858L16.4142 15.5858L15 17Z"
        fill="white"
      />
    </svg>
  );
}

export default Search;
