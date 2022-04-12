import { Flex } from "@chakra-ui/react";

import SpecValue from "./SpecValue";

const SpecLabel = ({ spec, theme, w }) => {
  return (
    <Flex
      as="dt"
      w={w || { base: "36", sm: "60" }}
      color={theme === "dark" ? "whiteAlpha.600" : "blackAlpha.600"}
      minW={w || { base: "36", sm: "60" }}
    >
      {spec.label}
    </Flex>
  );
};

const Spec = ({ theme, spec, ml, w }) => {
  return (
    <Flex
      as="dl"
      ml={ml || { base: "2", md: "8", lg: "12" }}
      mb="1"
      fontSize={{ base: "sm", sm: "md" }}
    >
      <SpecLabel spec={spec} theme={theme} w={w} />
      <SpecValue spec={spec} theme={theme} />
    </Flex>
  );
};

export default Spec;
