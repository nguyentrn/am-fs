import { useEffect } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

import { getPhones } from "../api/phone";
import { selectFilterQuery } from "../redux/filterSlice";

const useFetchModelList = () => {
  const filterQuery = useSelector(selectFilterQuery);
  const { data: models, refetch: refetchModels } = useQuery(
    "phones",
    () => getPhones(filterQuery),
    {
      enabled: false,
    }
  );

  useEffect(() => {
    refetchModels();
  }, [filterQuery]);
  return models;
};

export default useFetchModelList;
