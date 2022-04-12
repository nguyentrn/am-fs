import { Flex } from "@chakra-ui/react";

const Version = ({ version, setSelectedVersion }) => {
  const handleClick = () => {
    // console.log(version);
    setSelectedVersion({
      label: version.label,
      mem_cap: version.ram,
      storage_cap: version.storage,
    });
  };
  return (
    <Flex
      bg="primary.600"
      px="2"
      borderRadius="md"
      mb="3"
      color={`whiteAlpha.${version.prices.length ? 900 : 500}`}
      cursor={version.prices.length ? "pointer" : "not-allowed"}
      fontSize={{ base: "xs", md: "sm" }}
      fontWeight="700"
      onClick={handleClick}
    >
      {version.label}
    </Flex>
  );
};

export default Version;
