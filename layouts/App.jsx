import { useRouter } from "next/router";
import { Fade, Flex } from "@chakra-ui/react";

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header/Header";

const App = (props) => {
  const router = useRouter();
  return (
    <Flex flexDir="column" bg="gray.100">
      <Header />
      <Fade key={router.route} unmountOnExit={true} in={true}>
        <Body {...props} />
      </Fade>
      <Footer />
    </Flex>
  );
};

export default App;
