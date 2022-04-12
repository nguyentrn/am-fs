import {
  Text,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import FilterGroup from "../../../components/Filters/FilterGroup";
import {
  setPriceFilter,
  selectFilter,
  updateFilterQuery,
} from "../../../redux/filterSlice";
import { selectPrice } from "../../../redux/metaSlice";
import formatPrice from "../../../utils/formatPrice";

export const PriceFilter = ({ toggleOpenSidebar }) => {
  const { min, max } = useSelector(selectPrice);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = (priceFilter) => {
    const [min, max] = priceFilter;
    dispatch(setPriceFilter({ min, max }));
  };

  const handleChangeEnd = () => {
    dispatch(updateFilterQuery());
    toggleOpenSidebar();
  };

  if (!min || !max) {
    return "";
  }

  return (
    <FilterGroup
      label="Lọc giá"
      notes={
        <Text>
          Giá từ <strong>{formatPrice(filter.minPrice)}</strong> đến{" "}
          <strong>{formatPrice(filter.maxPrice)}</strong>!
        </Text>
      }
    >
      <RangeSlider
        aria-label={["min", "max"]}
        defaultValue={[min, max]}
        min={min}
        max={max}
        onChangeEnd={handleChangeEnd}
        onChange={handleChange}
        step={10000}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </FilterGroup>
  );
};

export default PriceFilter;
