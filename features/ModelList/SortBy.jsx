import { Flex, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSortBy,
  setSortBy,
  updateFilterQuery,
} from "../../redux/filterSlice";

const sortByOptions = [
  {
    value: "popular",
    label: "Thịnh hành",
  },
  // {
  //   value: "best_seller",
  //   label: "Bán chạy",
  // },
  {
    value: "new_release",
    label: "Mới ra mắt",
  },
  // {
  //   value: "price_desc",
  //   label: "Giá giảm dần",
  // },
  {
    value: "price_asc",
    label: "Giá tăng dần",
  },
];

const SortBy = () => {
  const sortBy = useSelector(selectSortBy);
  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(setSortBy(value));
    dispatch(updateFilterQuery());
  };

  return (
    <Flex>
      {sortByOptions.map(({ value, label }) => (
        <Button
          key={value}
          onClick={() => handleClick(value)}
          variant="ghost"
          size="sm"
          px="3"
          value={value}
          defaultValue={value === "hot"}
          colorScheme="white"
          color={sortBy === value ? "primary.300" : "whiteAlpha.900"}
          _focus={{ outline: 0 }}
          _hover={{ transform: "translateY(-0.3rem)", color: "primary.300" }}
          transition="all 0.25s ease-out"
        >
          {label}
        </Button>
      ))}
    </Flex>
  );
};

export default SortBy;
