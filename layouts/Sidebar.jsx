import {
  Flex,
  Show,
  Icon,
  Text,
  useMediaQuery,
  Heading,
  useBreakpointValue,
  useBreakpoint,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useToggle } from "react-use";
import { BsChevronCompactUp, BsChevronCompactDown } from "react-icons/bs";

import Box from "./Box";
import colors from "../theme/colors";

const SIDEBAR_WIDTH = 23;

const MotionFlex = motion(Flex);

const ArrowIcon = ({ isOpenSidebar }) => (
  <Show below="md">
    <Flex
      pos="absolute"
      align="center"
      justify="center"
      top="-2"
      left="0"
      right="0"
    >
      <MotionFlex
        display={{ md: "none" }}
        flexDir="column"
        textAlign="center"
        color="blackAlpha.400"
        animate={{
          opacity: [1, 0.4, 1],
          y: [0, -3, 0],
        }}
        transition={{ repeat: Infinity }}
      >
        <Icon
          as={isOpenSidebar ? BsChevronCompactDown : BsChevronCompactUp}
          fontSize="6xl"
        />
        <Text mt="-8" fontSize="xs">
          {isOpenSidebar ? "Đóng" : "Mở"}
        </Text>
      </MotionFlex>
    </Flex>
  </Show>
);

export const SiderbarTitle = ({
  icon,
  label,
  info,
  toggleOpenSidebar,
  isOpenSidebar,
}) => {
  const [breakpoint] = useMediaQuery("(min-width: 832px)");
  const handleClick = () => {
    if (!breakpoint) {
      toggleOpenSidebar();
    }
  };

  return (
    <Flex
      onClick={handleClick}
      p="4"
      pb="2"
      cursor={{ base: "pointer", md: "initial" }}
      justify="space-between"
      align="center"
      w="100%"
      h="5rem"
      minH="5rem"
      pos="sticky"
      top="0"
      bg="white"
      zIndex="2"
      _after={{
        content: '""',
        width: "24",
        height: "2px",
        position: "absolute",
        bottom: "0",
        left: "4",
        backgroundColor: "primary.200",
      }}
      _before={{
        content: '""',
        height: "2px",
        position: "absolute",
        bottom: "0",
        left: "4",
        right: "4",
        backgroundColor: "primary.50",
      }}
    >
      <ArrowIcon isOpenSidebar={isOpenSidebar} />
      <Flex align="center">
        <Icon as={icon} fontSize={{ base: "2xl", md: "2xl" }} mr="2" />
        <Heading
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="700"
          lineHeight="1"
          m="0"
          borderColor="primary.300"
        >
          {label}
        </Heading>
      </Flex>
      {!breakpoint && <Flex>{info}</Flex>}
    </Flex>
  );
};

const MotionBox = motion(Box);
const variants = {
  initial: { y: 0 },
  animate: {
    translateY: "calc(-100vh + 8.3rem)",
  },
};

const Sidebar = ({
  children,
  titleLabel,
  titleIcon,
  titleInfo,
  isOpenSidebarCustomized,
  toggleOpenSidebarCustomized,
}) => {
  const [isOpenSidebar, toggleOpenSidebar] = useToggle();
  const [isLargerThan832] = useMediaQuery("(min-width: 832px)");

  return (
    <MotionBox
      as="section"
      position={{ base: "fixed", md: "sticky" }}
      top={{
        base: "calc(100vh - 5rem)",
        md: "4rem",
      }}
      overflowY="scroll"
      css={{
        "&::-webkit-scrollbar": {
          width: "0.4rem",
        },
        "&::-webkit-scrollbar-track": {
          width: "0.5rem",
        },
        "&::-webkit-scrollbar-thumb": {
          background: colors.grayAlpha[200],
          borderRadius: "24px",
        },
      }}
      maxW={{ base: `${SIDEBAR_WIDTH}rem`, md: "72", lg: "80" }}
      minW={{ base: `${SIDEBAR_WIDTH}rem`, md: "72", lg: "80" }}
      left={{ base: `calc(50% - ${SIDEBAR_WIDTH / 2}rem)`, md: "initial" }}
      h={{ base: "calc(100vh - 3.7rem)", md: "calc(100vh - 4.6rem)" }}
      zIndex={{ base: "3", md: "initial" }}
      variants={variants}
      initial="initial"
      animate={
        (
          isOpenSidebarCustomized !== undefined && !isLargerThan832
            ? isOpenSidebarCustomized
            : isOpenSidebar
        )
          ? "animate"
          : "initial"
      }
      borderTop={{ base: "1px", lg: "none" }}
      borderTopColor="blackAlpha.200"
    >
      <SiderbarTitle
        toggleOpenSidebar={
          toggleOpenSidebarCustomized !== undefined
            ? toggleOpenSidebarCustomized
            : toggleOpenSidebar
        }
        isOpenSidebar={
          isOpenSidebarCustomized !== undefined
            ? isOpenSidebarCustomized
            : isOpenSidebar
        }
        label={titleLabel}
        icon={titleIcon}
        info={titleInfo}
      />
      {children}
    </MotionBox>
  );
};

export default Sidebar;
