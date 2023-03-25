import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export const variants = {
  HEADING: "heading",
  SUB_HEADING: "sub-heading",
  SMALL_HEADING: "small-heading",
};

const CustomText = ({ variant, text, link }) => {
  let style = {};
  switch (variant) {
    case variants.HEADING:
      style = {
        color: "white",
        fontSize: "45px",
        letterSpacing: 1,
        fontWeight: 600,
      };
      break;
    case variants.SUB_HEADING:
      style = {
        color: "white",
        fontSize: "20px",
      };
      break;
    case variants.SMALL_HEADING:
      style = {
        color: "white",
        fontSize: "14px",
      };
  }
  if (variant == variants.SMALL_HEADING && text.split("?").length > 1) {
    let linkStyle = { ...style, fontWeight: 600, paddingLeft: 5 };
    return (
      <Flex>
        <Text style={style}>{text.split("?")[0]}?</Text>
        <Link href={link}>
          <Text style={linkStyle}>{text.split("?")[1]}</Text>
        </Link>
      </Flex>
    );
  } else {
    return <Text style={style}>{text}</Text>;
  }
};
export default CustomText;
