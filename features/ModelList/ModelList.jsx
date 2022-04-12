import { useMemo } from "react";
import { useRouter } from "next/router";
import { Flex, Heading } from "@chakra-ui/react";

import App from "../../layouts/App";
import Banner from "../../layouts/Banner";
import Topbar from "../../layouts/Topbar";
import { BodyContainer } from "../../layouts/Container";

import categories from "../../constant/categories";
import Breadcrumb from "../../components/Breadcrumb";
import ModelListMain from "./Main/ModelListMain";
import ModelListSiderbar from "./Sidebar/ModelListSidebar";
import SortBy from "./SortBy";
import ModelListBanner from "./Banner/ModelListBanner";

const ModelList = ({ models }) => {
  const { route } = useRouter();
  const category = useMemo(() => {
    if (route) {
      return categories[route.replace("/", "")];
    }
  }, [route]);
  return (
    <App>
      <Topbar>aa</Topbar>
      <ModelListBanner itemCount={models.length} category={category} />

      <BodyContainer>
        <Flex
          justify="space-between"
          align="center"
          color="whiteAlpha.900"
          h="12"
        >
          <Breadcrumb />
          <SortBy category={category.label} />
        </Flex>
        <Flex>
          <ModelListSiderbar />
          <ModelListMain models={models} />
        </Flex>
      </BodyContainer>
    </App>
  );
};

export default ModelList;
