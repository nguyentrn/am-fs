import { Divider, Flex } from "@chakra-ui/react";
import HeadingWithUnderline from "../HeadingWithUnderline";

import Spec from "./Spec";

const SpecGroup = ({ group, specs, theme }) => {
  return (
    <Flex flexDir="column">
      <HeadingWithUnderline fontSize="md" mb="2" mt="5" alignSelf="flex-start">
        {group}
      </HeadingWithUnderline>
      {specs.map((spec) => (
        <Spec key={spec.prop} theme={theme} spec={spec} />
      ))}
      <Divider
        w="90%"
        m="auto"
        py="0.5"
        borderColor={theme === "dark" ? "whiteAlpha.300" : "blackAlpha.200"}
      />
    </Flex>
  );
};

export default SpecGroup;
