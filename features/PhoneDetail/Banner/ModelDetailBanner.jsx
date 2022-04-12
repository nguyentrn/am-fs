import { Container, Flex } from "@chakra-ui/react";
import Banner from "../../../layouts/Banner";
import colors from "../../../theme/colors";
import ModelDetailHeading from "./ModelDetailHeading";
import ModelDetailImage from "./ModelDetailImage";
import VersionList from "./VersionList";

const ModelDetailBanner = ({ model, setSelectedVersion }) => {
  return (
    <Banner
      align="center"
      bg={`linear-gradient(#000000bb, #000000bb), no-repeat center 70% / cover url("/images/title-background/phone4.jpg")`}
    >
      <Container
        maxW="container.xl"
        display="flex"
        p="0"
        flexDir={{ base: "column", md: "row" }}
      >
        <ModelDetailImage img_url={model.img_url} />
        <Flex
          flexDir="column"
          ml={{ base: "0", md: "2", lg: "4" }}
          mt={{ base: "4", md: "0" }}
          alignSelf={{ base: "center", md: "initial" }}
        >
          <ModelDetailHeading modelName={`${model.brand} ${model.model}`} />
          <VersionList
            versions={model.versions}
            setSelectedVersion={setSelectedVersion}
          />
        </Flex>
      </Container>
    </Banner>
  );
};

export default ModelDetailBanner;
