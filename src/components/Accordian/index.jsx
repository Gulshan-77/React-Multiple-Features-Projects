import styled from "styled-components";

import SingleAccordian from "./singleAccordian";
import MultiAccordian from "./multiAccordian";

function Accordian() {
  return (
    <div className="App">
      <SingleAccordian />

      <MultiAccordian />
    </div>
  );
}

export default Accordian;
