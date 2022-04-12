import { Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

import HomePage from "../features/Homepage/HomePage";
import useFetchModelList from "../hooks/useFetchModelList";

export default function PhoneListPage() {
  const phones = useFetchModelList();
  if (!phones) {
    return <Spinner />;
  }
  return <HomePage phones={phones} />;
}

// export async function getServerSideProps() {
//   const phones = await getPhones();
//   return { props: { phones } };
// }
