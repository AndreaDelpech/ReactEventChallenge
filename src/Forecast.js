import React from "react";

export default function Forecast() {
  function showalert(event) {
    event.preventDefault();
    alert("Forecast feature is not ready yet...");
  }

  return (
    <a href="/" onClick={showalert}>
      {" "}
      Current Temperature{" "}
    </a>
  );
}
