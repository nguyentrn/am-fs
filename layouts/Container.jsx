import { Container as ChakraContainer } from "@chakra-ui/react";

const Container = (props) => {
  return (
    <ChakraContainer display="flex" maxW="container.xl" p="0" {...props} />
  );
};

export const BodyContainer = (props) => {
  return <Container mt="-72" mb="2" flexDir="column" {...props} />;
};

export default Container;
