import { Text } from "@chakra-ui/react";

import Main from "../../../layouts/Main";
import Box from "../../../layouts/Box";
import Model from "./Model";

const ModelListMain = ({ models }) => {
  return (
    <Main bg="none" boxShadow="none">
      <Box
        flexDir="row"
        flexWrap="wrap"
        justify="space-evenly"
        py="8"
        px="1"
        minH="100%"
      >
        {!models.length ? (
          <Text mt="20">Không tìm thấy sản phẩm nào!</Text>
        ) : (
          models.map((model) => <Model key={model.id} model={model} />)
        )}
      </Box>
    </Main>
  );
};

export default ModelListMain;
