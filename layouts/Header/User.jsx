import { Flex, Icon, Text, Hide } from "@chakra-ui/react";
import { HiOutlineUserCircle } from "react-icons/hi";

const User = () => {
  return (
    <Flex align="center" px="4">
      <Icon as={HiOutlineUserCircle} fontSize="4xl" />
      <Hide below="lg">
        <Text fontSize="sm" ml="2">
          Đăng nhập
        </Text>
      </Hide>
    </Flex>
  );
};

export default User;
