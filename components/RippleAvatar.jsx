import { Avatar, Box, Flex, keyframes } from "@chakra-ui/react";

const AvatarWithRipple = ({ size = "96px", color = "teal", src, ...rest }) => {
  const pulseRing = keyframes`
    0% {
      transform: scale(0.33);
    }
    40%,
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  `;

  return (
    <Box
      as="div"
      position="relative"
      w={size}
      h={size}
      _before={{
        content: "''",
        position: "relative",
        display: "block",
        width: "300%",
        height: "300%",
        boxSizing: "border-box",
        marginLeft: "-100%",
        marginTop: "-100%",
        borderRadius: "50%",
        bgColor: color,
        animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
      }}
    >
      <Avatar src={src} size="full" position="absolute" top={0} {...rest} />
    </Box>
  );
};

export default AvatarWithRipple;
