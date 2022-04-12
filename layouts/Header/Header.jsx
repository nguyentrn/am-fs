import Logo from "./Logo";
import Searchbar from "./Searchbar";

import {
  Flex,
  Hide,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useMediaQuery,
  useDisclosure,
  IconButton,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import CategoryMenu from "./CategoryMenu";
import QuickCategory from "./QuickCategory";
import User from "./User";

const MenuDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        h="100%"
        p="4"
        colorScheme="blue"
        onClick={onOpen}
        cursor="pointer"
        // as={FiMenu}
      >
        <Icon as={FiMenu} fontSize="4xl" />
        {/* <FiMenu /> */}
      </IconButton>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const DesktopBar = () => {
  return (
    <>
      <Flex align="center">
        <CategoryMenu />
        <Hide below="xl">
          <QuickCategory />
        </Hide>
      </Flex>
      <User />
    </>
  );
};

const MobileBar = () => {
  return <MenuDrawer />;
};

const MenuBar = () => {
  const [isLg] = useMediaQuery("(min-width: 768px)");
  if (isLg) {
    return <DesktopBar />;
  }
  return <MobileBar />;
};

const Header = () => {
  return (
    <Flex as="header" bg="primary.500" boxShadow="lg" h="5rem" justify="center">
      <Flex
        maxW="120rem"
        w="100%"
        justify="space-between"
        align="center"
        color="whiteAlpha.900"
        fontWeight="600"
      >
        <Logo />
        <Searchbar />
        <MenuBar />
      </Flex>
    </Flex>
  );
};

export default Header;
