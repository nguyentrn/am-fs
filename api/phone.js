import axios from "axios";

export const getPhones = async (params) => {
  try {
    const res = await axios.get(`http://localhost:9999/phone`, { params });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getMeta = async () => {
  try {
    const res = await axios("http://localhost:9999/phone/meta");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// export const getFilter = async () => {
//   try {
//     const res = await axios("http://localhost:9999/phone/filter");
//     return res.data;
//   } catch (err) {
//     console.log(err);
//   }
// };

export const getPhone = async (phoneId) => {
  try {
    const res = await axios(`http://localhost:9999/phone/${phoneId}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
