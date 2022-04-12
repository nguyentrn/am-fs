import Head from "next/head";
import { getPhone } from "../../api/phone";
import ModelDetail from "../../features/PhoneDetail/ModelDetail";

export default function PhoneDetail({ phone }) {
  return (
    <>
      <Head>
        <title>Nơi bán {phone.model} rẻ nhất - Góc Rìviu</title>
      </Head>
      <ModelDetail model={phone} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const phoneId = params.item.match(/i\.\d*/g)?.[0]?.replace("i.", "") * 1;
  if (!phoneId) {
    return { props: { is404: true } };
  }

  const phone = await getPhone(phoneId);
  return {
    props: { phone },
  };
}
