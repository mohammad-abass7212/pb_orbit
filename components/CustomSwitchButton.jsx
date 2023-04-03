import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";



const ButtonSwitch = () => {
  const [activeButton, setActiveButton] = useState("player");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    // perform action based on button switch, e.g.:
    console.log(`Switched to ${buttonName} button`);
  };

  return (
    <ButtonContainer>
      <Button
        disabled={activeButton === "player"}
        onClick={() => handleButtonClick("player")}
      >
        Player
      </Button>
      <Button
        disabled={activeButton === "community"}
        onClick={() => handleButtonClick("community")}
      >
        Community
      </Button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  background-color: white;
  width: 75%;
  border-radius: 50px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35);
`;

const Button = styled.button`
  background-color: ${(props) => (props.disabled ? "#243b5d" : "transparent")};
  color: ${(props) => (props.disabled ? "white" : "black")};
  border-radius: ${(props) => (props.disabled ? "50px" : "0px")};
  transition: all 0.3s ease;
  font-size: 25px;
  height: 60px;
  width: ${(props) =>
    props.disabled ? "52%" : "46%"}; // adjust width based on disabled state
  border: none;
  outline: none;
  cursor: pointer;
`;

export default ButtonSwitch;
