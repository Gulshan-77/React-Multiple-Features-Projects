import React from "react";
import styled from "styled-components";
import data from "./data";
import { IconContext } from "react-icons";
import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #f7f7f7;
`;

const Container = styled.div`
  max-width: 560px;
  width: 100%;
`;

const Block = styled.div`
  border-radius: 8px;
  box-shadow: 0 2px 4px #ffc2d1;
  background-color: #ffe5ec;
  margin-bottom: 15px;
`;

const Collapse = styled.div`
  background-color: #ffb3c6;
  padding: 2px 10px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333333;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between; /* Space between question and icon */
  align-items: center; /* Center vertically */
`;

const Dropdown = styled.div`
  padding: 10px;
  color: #666666;
`;

const SingleAccordian = () => {
  const [chosen, setChosen] = useState(null);

  function toggle(getid) {
    console.log(getid);
    setChosen(getid === chosen ? null : getid);
    // setChosen(getid);
  }

  return (
    <IconContext.Provider value={{ size: "10px" }}>
      <h1>SINGLE ACCORDIAN</h1>
      <Wrapper>
        <Container>
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <Block key={dataItem.id}>
                <Collapse onClick={() => toggle(dataItem.id)}>
                  <h3>{dataItem.question}</h3>
                  <span>
                    {chosen === dataItem.id ? <FaMinus /> : <FaPlus />}
                  </span>
                </Collapse>
                {chosen === dataItem.id ? (
                  <Dropdown>
                    <p>{dataItem.answer}</p>
                  </Dropdown>
                ) : null}
              </Block>
            ))
          ) : (
            <p>No data found</p>
          )}
        </Container>
      </Wrapper>
    </IconContext.Provider>
  );
};

export default SingleAccordian;
