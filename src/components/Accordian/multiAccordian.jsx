import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import data from "./data";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #f7f7f7;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10%;
`;

const Button = styled.button`
  padding: 5px 5px;
  cursor: pointer;
  margin-bottom: 40px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 560px;
`;
const Block = styled.div`
  background-color: #dde5b6;
  box-shadow: 0 2px 4px #adc178;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const Title = styled.div`
  background-color: #adc178;
  cursor: pointer;
  padding: 2px 10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333333;
  border-bottom: 1px solid #f0ead2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Answer = styled.div`
  padding: 5px;
  color: #6c584c;
`;

const MultiAccordian = () => {
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  const [selectedItem, setSelectedItem] = useState([]);

  const toggle = (getid) => {
    // Toggle single or multi selection based on the current mode
    if (enableMultiSelection) {
      // Multi-selection mode
      const isSelected = selectedItem.includes(getid);
      if (isSelected) {
        // If the item is already selected, deselect it
        setSelectedItem(selectedItem.filter((id) => id !== getid));
      } else {
        // If the item is not selected, add it to the selected items
        setSelectedItem([...selectedItem, getid]);
      }
    } else {
      // Single-selection mode
      if (selectedItem.includes(getid)) {
        // Toggle selection for single mode
        setSelectedItem([]);
      } else {
        // Select the clicked item
        setSelectedItem([getid]);
      }
    }
  };

  return (
    <IconContext.Provider value={{ size: "10px" }}>
      <h1> MULTIPLE ACCORDIAN </h1>
      <Wrapper>
        <Button
          enable={enableMultiSelection}
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        >
          {enableMultiSelection
            ? "Disable Multi Selection"
            : "Enable Multi Selection"}
        </Button>
        <Container>
          {data && data.length > 0 ? (
            data.map((item) => (
              <Block key={item.id}>
                <Title onClick={() => toggle(item.id)}>
                  <h3>{item.question}</h3>
                  <span>
                    {selectedItem.includes(item.id) ? <FaMinus /> : <FaPlus />}
                  </span>
                </Title>
                {selectedItem.includes(item.id) && (
                  <Answer>{item.answer}</Answer>
                )}
              </Block>
            ))
          ) : (
            <p>Data Not Found</p>
          )}
        </Container>
      </Wrapper>
    </IconContext.Provider>
  );
};

export default MultiAccordian;
