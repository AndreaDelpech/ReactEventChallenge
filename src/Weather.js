import React from "react";

export default function Weather() {
  function showalert(event) {
    event.preventDefault();
    alert("Coming Soon...");
  }

  return <button onClick={showalert}> Current Temperature </button>;
}
