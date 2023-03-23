// Importing necessary components from Chakra UI and React
import {
  Box,
  Button,
  ButtonProps,
  Center,
  Flex,
  Img,
  Text,
} from "@chakra-ui/react";
import React, { useRef } from 'react';
import { useClickAnimation } from './useClickAnimation';


// Defining a new type for CustomButtonProps, which extends ButtonProps
type CustomButtonProps = ButtonProps & {

  onClick: Function;
  imageSrc: string;
  text: string;
  btnDisabled?: boolean;
  buttonBgColor: string;
  customHeight: object;
  widthArray: object;
  btnBorderRadius: object;
  mt: object;
  mb: object;
  fontSize: object;
  iconVisStatus: boolean;
  btnHoverColor: string;
};

// Defining the CustomButton functional component that accepts CustomButtonProps
const         CustomButton = ({
  // Destructuring the props here
  onClick,
  imageSrc,
  text,
  btnDisabled = false,
  buttonBgColor,
  customHeight,
  widthArray,
  btnBorderRadius,
  mt = {},
  mb = {},
  fontSize,
  iconVisStatus = false,
  btnHoverColor,
  color = "white",
}: CustomButtonProps) => {
  const buttonRef = useRef(null);
  useClickAnimation(buttonRef, {
    size: 100,
    duration: 1000,
    color: 'red',
    effectName: 'ripple',
  });
  

  return (
    <Button
    ref={buttonRef}
      onClick={onClick}
      disabled={btnDisabled}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      backgroundColor={buttonBgColor}
      height={customHeight}
      width={widthArray}
      borderRadius={btnBorderRadius}
      _hover={{ bg: btnHoverColor }}
      mt={mt}
      mb={mb}
      fontSize={fontSize}
      color={color}
    >
      {/* Rendering a Flex component that displays an dynamic icon and text */}
      <Flex gap={4}>
        {iconVisStatus ? (
          <Box ml={{ base: 10 }}>
            <Img src={imageSrc} alt="Button_Icon" />
          </Box>
        ) : null}
        <Center>
          <Text>{text}</Text>
        </Center>
      </Flex>
    </Button>
  );
};

export default CustomButton;