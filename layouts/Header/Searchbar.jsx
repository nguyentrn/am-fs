import { Input, InputLeftElement, InputGroup, Icon } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

import colors from "../../theme/colors";

const Searchbar = () => {
  return (
    <InputGroup
      w={{ base: "100%", sm: 72, md: 96 }}
      mx="1"
      borderRadius="2xl"
      bg="white"
      color="blackAlpha.900"
      // bg={`linear-gradient(to right, ${colors.primary[600]}, ${colors.primary[400]})`}
    >
      <InputLeftElement
        pointerEvents="none"
        h="12"
        w="14"
        children={<Icon as={FiSearch} color="blackAlpha.900" fontSize="2xl" />}
      />
      <Input
        type="text"
        placeholder="Tìm kiếm"
        pl="14"
        h="12"
        borderRadius="2xl"
        fontSize="md"
        _placeholder={{ color: "blackAlpha.700" }}
      />
    </InputGroup>
  );
};

export default Searchbar;
