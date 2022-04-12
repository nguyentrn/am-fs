import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

import Breadcrumb from "../../components/Breadcrumb";
import App from "../../layouts/App";
import Container, { BodyContainer } from "../../layouts/Container";
import Topbar from "../../layouts/Topbar";
import ModelDetailBanner from "./Banner/ModelDetailBanner";
import ModelDetailMain from "./Main/ModelDetailMain";
import ModelDetailSidebar from "./Sidebar/ModelDetailSidebar";

const ModelDetail = ({ model }) => {
  const [selectedVersion, setSelectedVersion] = useState({
    label: model.versions[0].label,
    mem_cap: model.versions[0].ram,
    storage_cap: model.versions[0].storage,
  });

  return (
    <App>
      <Topbar>
        <Container m="auto">
          <Text alignSelf="center">Thông số kỹ thuật</Text>
        </Container>
      </Topbar>
      <ModelDetailBanner
        model={model}
        selectedVersion={selectedVersion}
        setSelectedVersion={setSelectedVersion}
      />
      <BodyContainer flexDir="column">
        <Breadcrumb model={model.name} />
        <Flex>
          <ModelDetailSidebar versions={model.versions} />
          <ModelDetailMain model={model} selectedVersion={selectedVersion} />
        </Flex>
      </BodyContainer>
    </App>
  );
};

export default ModelDetail;
