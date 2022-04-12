import { Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import dayjs from "dayjs";
import { motion } from "framer-motion";

import formatPrice from "../../../utils/formatPrice";
import colors from "../../../theme/colors";

const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

const ModelName = ({ model, brand }) => (
  <Flex flexDir="column" align="flex-start" alignSelf="flex-start" mt="6">
    <Text fontSize="xs" textTransform="uppercase" fontWeight="600">
      {brand}
    </Text>
    <Text fontSize="xl" lineHeight="6" fontWeight="600" color="primary.900">
      {model}
    </Text>
  </Flex>
);

const ModelPrice = ({ min_price }) => (
  <Text color="red.400" fontWeight="700" alignSelf="flex-end" fontSize="xl">
    {formatPrice(min_price)}
  </Text>
);

const ModelDescription = ({ model }) => {
  return (
    <Flex flexDir="column" w="100%" justify="space-between" my="1">
      <ModelName model={model.model} brand={model.brand} />
      <Text
        fontSize="sm"
        lineHeight="5"
        fontWeight="500"
        alignSelf="flex-start"
      >
        Ra mắt: {dayjs(model.released_at).format("DD/MM/YYYY")}
      </Text>
      <Flex flexDir="column" fontSize="sm">
        <Text>
          {/* Bộ nhớ trong{" "} */}
          {[...new Set(model.versions?.map(({ ram }) => ram))].join("/")}GB
        </Text>
        <Text>
          {/* RAM */}
          {[...new Set(model.versions?.map(({ storage }) => storage))].join(
            "/"
          )}
          GB
        </Text>
      </Flex>

      <ModelPrice min_price={model.min_price} />
    </Flex>
  );
};

const variants = {
  hover: {
    backgroundColor: colors.primary[50],
    borderColor: colors.primary[400],
    transition: { duration: 0.4 },
  },
};

const imageVariants = {
  hover: {
    scale: 1.06,

    transition: {
      duration: 0.6,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const Model = ({ model }) => {
  return (
    <Link href={`dien-thoai/${model.slug}-i.${model.id}`} passHref>
      <MotionFlex
        as="a"
        w={{ base: "100%", sm: "26rem" }}
        h="48"
        px="1"
        m="1"
        bg="white"
        border="1px"
        borderColor="gray.200"
        borderRadius="lg"
        cursor="pointer"
        overflow="hidden"
        pos="relative"
        color="blackAlpha.900"
        whileHover="hover"
        variants={variants}
        transition={{ duration: 0.3, type: "tween", ease: "easeOut" }}
      >
        <MotionImage
          src={model.img_url}
          alt={model.name}
          w={{ base: "28", sm: "28" }}
          variants={imageVariants}
          alignSelf="center"
          mx="4"
        />

        <ModelDescription model={model} />
      </MotionFlex>
    </Link>
  );
};

export default Model;
