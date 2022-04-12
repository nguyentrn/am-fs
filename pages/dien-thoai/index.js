import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

import { getMeta, getPhones } from "../../api/phone";
import Spinner from "../../components/Spinner";
import ModelList from "../../features/ModelList/ModelList";
import useFetchModelList from "../../hooks/useFetchModelList";
import { setPriceFilter } from "../../redux/filterSlice";
import {
  setBrands,
  setPrice,
  setRams,
  setStorages,
} from "../../redux/metaSlice";

export default function PhoneListPage() {
  const { data: meta } = useQuery("brands", getMeta, { initialData: null });
  const dispatch = useDispatch();
  const phones = useFetchModelList();

  useEffect(() => {
    if (meta) {
      dispatch(setPrice(meta.price));
      dispatch(setPriceFilter(meta.price));
      dispatch(setBrands(meta.brands));
      dispatch(setRams(meta.ram));
      dispatch(setStorages(meta.storage));
    }
  }, [meta]);

  if (!phones) {
    return <Spinner />;
  }
  return <ModelList models={phones} />;
}

// export async function getServerSideProps() {
//   const phones = await getPhones();
//   return { props: { phones } };
// }
