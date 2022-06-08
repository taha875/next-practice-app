import React from "react";
import Dots from "./dots";
import Logo from "./logo";
import Circle from "./circles";
function index({ icon }) {
  let iconElement = null;
  switch (icon) {
    case "dots":
      iconElement = <Dots />;
      break;
    case "logo":
      iconElement = <Logo />;
      break;
    case "circles":
      iconElement = <Circle />;
      break;
    default:
      break;
  }
  return <> {iconElement}</>;
}

export default index;
