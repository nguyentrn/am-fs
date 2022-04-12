import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, updateFilterQuery } from "../../redux/filterSlice";

import FilterGroup from "./FilterGroup";

export const CheckboxFilter = ({
  items,
  label,
  type,
  submitFunction,
  toggleOpenSidebar,
}) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (values) => {
    dispatch(submitFunction(values));
    dispatch(updateFilterQuery());
    // toggleOpenSidebar();
  };

  return (
    <FilterGroup label={label} flexWrap="wrap">
      <CheckboxGroup
        colorScheme="primary"
        onChange={handleChange}
        defaultValue={filter[type]}
      >
        {items?.map(({ id, name }) => (
          <Checkbox key={id} value={id.toString()} mx="1" mb="1">
            {name}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </FilterGroup>
  );
};

export default CheckboxFilter;
