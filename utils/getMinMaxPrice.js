import { flatten, sortWith, ascend, prop } from "ramda";

export const sortPrice = sortWith([ascend(prop("price"))]);

const getMinMaxPrice = (versions) => {
  //
};

export default getMinMaxPrice;
