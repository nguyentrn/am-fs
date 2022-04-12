import { Divider, Flex, Text, Collapse, Button } from "@chakra-ui/react";
import { max } from "lodash";
import { useMemo, useState } from "react";
import PriceItem from "./PriceItem";

const VersionGroup = ({ version }) => {
  const [show, setShow] = useState(false);

  const maxPrice = useMemo(
    () =>
      version.prices &&
      version.prices.length &&
      max(version.prices.map(({ price }) => price)),
    [version.prices.length]
  );

  const startingHeight = useMemo(
    () => (version.prices.length < 3 ? 53 * version.prices.length : 159),
    [version.prices.length]
  );

  const handleToggle = () => setShow(!show);
  return (
    <Flex flexDir="column">
      <Flex mx="4" mb="1" mt="4" align="center">
        <Text fontSize="md" fontWeight="600">
          {version.label}
        </Text>
        <Text as="span" fontSize="xs" fontStyle="italic" ml="1">
          ({version.prices.length} cửa hàng bán)
        </Text>
      </Flex>
      <Collapse startingHeight={startingHeight} in={show}>
        {version.prices.map((version, id) => (
          <Flex key={`${version.id}_${version.store_id}`} flexDir="column">
            <PriceItem version={version} maxPrice={maxPrice} />
            <Divider my="1" w="90%" mx="auto" />
          </Flex>
        ))}
      </Collapse>
      {version.prices.length > 3 && (
        <Button
          size="sm"
          onClick={handleToggle}
          variant="ghost"
          alignSelf="center"
          mb="0.5"
        >
          {show ? "Rút gọn" : "Hiển thị thêm"}
        </Button>
      )}
    </Flex>
  );
};

export default VersionGroup;
