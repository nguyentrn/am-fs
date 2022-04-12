import { Flex, Heading } from "@chakra-ui/react";

const FilterGroup = (props) => (
  <Flex m="4" flexDir="column">
    <Heading as="h3" fontSize="md" fontWeight="bold">
      {props.label}
    </Heading>
    <Flex mx="1" {...props} />
    {props.notes && (
      <Flex fontSize="xs" mt="2">
        {props.notes}
      </Flex>
    )}
  </Flex>
);

export default FilterGroup;
