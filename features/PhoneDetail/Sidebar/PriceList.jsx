import { Flex } from "@chakra-ui/react";
import VersionGroup from "./VersionGroup";

const PriceList = ({ versions }) => {
  return (
    <Flex flexDir="column">
      {versions
        .filter(({ prices }) => prices.length)
        .map((version) => (
          <VersionGroup key={version.label} version={version} />
        ))}
    </Flex>
  );
};

export default PriceList;
