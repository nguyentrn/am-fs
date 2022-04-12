import { Heading } from "@chakra-ui/react";

const HeadingWithUnderline = (props) => (
  <Heading
    fontWeight="600"
    borderBottom="2px"
    borderColor="primary.300"
    {...props}
  />
);

export default HeadingWithUnderline;
