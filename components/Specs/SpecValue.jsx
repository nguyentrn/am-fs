import { Flex, Icon, Text, Collapse, useDisclosure } from "@chakra-ui/react";
import {
  RiCheckboxCircleFill,
  RiCloseCircleFill,
  RiStarSLine,
  RiStarHalfSLine,
  RiStarSFill,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";

import { useMemo } from "react";

const convertJSON = (spec) => {
  try {
    const values = JSON.parse(spec.value);
    return values.map((s) => <Flex key={s}>{s}</Flex>);
  } catch (err) {
    return spec.value.map((s) => <Flex key={s}>{s}</Flex>);
  }
};

const getSpecValue = (spec) => {
  switch (spec.type) {
    case "Boolean": {
      return (
        <Flex>
          <Icon
            as={
              spec.value === "true" || spec.value === true
                ? RiCheckboxCircleFill
                : RiCloseCircleFill
            }
            color={
              spec.value === "true" || spec.value === true
                ? "green.400"
                : "red.400"
            }
            mr="1"
            fontSize={{ base: "lg", sm: "2xl" }}
          />
          <Text>{spec.value === "true" ? "Có" : "Không"}</Text>
        </Flex>
      );
    }

    case "Array": {
      return <Flex flexDir="column">{convertJSON(spec)}</Flex>;
    }

    default: {
      return `${spec.value} ${spec.unit ? spec.unit : ""}`;
    }
  }
};

const SpecRating = ({ point }) => {
  const stars = useMemo(() => {
    const ratings = [];
    if (point !== null) {
      let rating = Math.round((point / 10) * 0.6);
      for (let i = 0; i < 3; i++) {
        if (rating >= 2) {
          ratings.push(RiStarSFill);
        } else if (rating === 1) {
          ratings.push(RiStarHalfSLine);
        } else {
          ratings.push(RiStarSLine);
        }
        rating -= 2;
      }
    }
    return ratings;
  }, [point]);

  if (point === null || !stars) {
    return "";
  }

  return (
    <Flex py="auto" my="auto" mr={{ base: 0, xl: "16" }}>
      {stars.map((star, id) => (
        <Icon as={star} key={id} color="blue.500" />
      ))}
    </Flex>
  );
};

const SpecValue = ({ spec }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      as="dd"
      fontWeight="500"
      justify="flex-start"
      align="flex-start"
      flexDir="column"
      w="100%"
      onClick={onToggle}
      cursor="pointer"
    >
      <Flex justify="space-between" w="100%">
        <Flex align="center">{getSpecValue(spec)}</Flex>
        {spec.notes && (
          <Flex justify="center" align="center" mx="2" color="gray.500">
            <Icon as={isOpen ? RiArrowUpSLine : RiArrowDownSLine} />
            <Text fontSize="xs">Chi tiết</Text>
          </Flex>
        )}

        {/* <SpecRating point={spec.point} /> */}
      </Flex>

      {spec.notes && (
        <Collapse in={isOpen} animateOpacity>
          {spec.notes.split("\n").map((note, id) => (
            <Flex
              key={id}
              fontSize={{ base: "xs", lg: "xs" }}
              color="blackAlpha.500"
            >
              <Text mr="3">•</Text>
              <Text whiteSpace="pre-line">{note}</Text>
            </Flex>
          ))}
        </Collapse>
      )}
    </Flex>
  );
};

export default SpecValue;
