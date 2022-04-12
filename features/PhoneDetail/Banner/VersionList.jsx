import { Flex, Heading } from "@chakra-ui/react";
import Version from "./Version";

const VersionList = ({ versions, setSelectedVersion }) => {
  return (
    <Flex mt="3" alignSelf="flex-start">
      <Heading as="h3" fontWeight="500" fontSize="md" m="0">
        Phiên bản:
      </Heading>
      <Flex flexDir="column" alignSelf="flex-start" ml="6">
        {versions.map((version) => (
          <Version
            key={version.label}
            version={version}
            setSelectedVersion={setSelectedVersion}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default VersionList;
