import { useMemo } from "react";
import { Flex, Text, Spinner, Show } from "@chakra-ui/react";
import { BsShop } from "react-icons/bs";
import { flatten, orderBy } from "lodash";

import Sidebar from "../../../layouts/Sidebar";
import formatPrice from "../../../utils/formatPrice";
import PriceList from "./PriceList";

const ModelDetailSidebar = ({ versions }) => {
  const isAvailable = useMemo(
    () => !!versions.map(({ prices }) => prices.length).reduce((s, v) => s + v),
    [versions]
  );
  const minPrice = useMemo(
    () =>
      formatPrice(
        orderBy(
          flatten(versions.map(({ prices }) => prices)).map(
            ({ price }) => price
          ),
          "price",
          "asc"
        )[0]
      ),
    [versions]
  );

  if (!versions) {
    return <Spinner />;
  }

  return (
    <Sidebar
      titleLabel="Nơi bán"
      titleIcon={BsShop}
      titleInfo={
        <Show below="md">
          <Flex whiteSpace="pre-wrap" fontStyle="italic" align="center">
            <Text>từ </Text>
            <Text
              color="red.500"
              fontWeight="700"
              textDecorationLine="underline"
              fontSize="lg"
            >
              {minPrice}
            </Text>
          </Flex>
        </Show>
      }
    >
      {isAvailable ? (
        <PriceList versions={versions} />
      ) : (
        <Text
          m="auto"
          mt="2"
          fontSize="xs"
          fontWeight="600"
          color="blackAlpha.600"
          textAlign="center"
        >
          Không tìm thấy cửa hàng bán sản phẩm này!
        </Text>
      )}
    </Sidebar>
  );
};

export default ModelDetailSidebar;
