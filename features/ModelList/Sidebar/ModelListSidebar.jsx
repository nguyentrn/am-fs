import { FiFilter } from "react-icons/fi";
import { useToggle } from "react-use";
import { Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import PriceFilter from "./PriceFilter";
import Sidebar from "../../../layouts/Sidebar";
import CheckboxFilter from "../../../components/Filters/CheckboxFilter";
import {
  selectRams,
  selectStorages,
  selectBrands,
} from "../../../redux/metaSlice";
import {
  setBrandFilter,
  setRamFilter,
  setStorageFilter,
} from "../../../redux/filterSlice";

const ModelListSiderbar = () => {
  const dispatch = useDispatch();
  // const [isOpenSidebar, toggleOpenSidebar] = useToggle();
  const rams = useSelector(selectRams);
  const storages = useSelector(selectStorages);

  const brands = useSelector(selectBrands);

  return (
    <Sidebar
      // isOpenSidebarCustomized={isOpenSidebar}
      // toggleOpenSidebarCustomized={toggleOpenSidebar}
      titleLabel="Bộ lọc"
      titleIcon={FiFilter}
      titleInfo={
        <Flex whiteSpace="pre-wrap" fontStyle="italic" align="center">
          <Text></Text>
        </Flex>
      }
    >
      <PriceFilter
      // toggleOpenSidebar={toggleOpenSidebar}
      />
      <CheckboxFilter
        label="Thương hiệu"
        items={brands}
        type="brands"
        submitFunction={setBrandFilter}
        // toggleOpenSidebar={toggleOpenSidebar}
      />
      <CheckboxFilter
        label="RAM"
        items={rams}
        type="rams"
        submitFunction={setRamFilter}
      />
      <CheckboxFilter
        label="Bộ nhớ trong"
        items={storages}
        type="storages"
        submitFunction={setStorageFilter}
      />
      {/* <PriceFilter />
      <PriceFilter />
      <BrandFilter />
      <PriceFilter />
      <BrandFilter />
      <PriceFilter />
      <BrandFilter /> */}
    </Sidebar>
  );
};

export default ModelListSiderbar;
