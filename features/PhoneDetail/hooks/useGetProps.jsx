import { orderBy } from "lodash";
import { useMemo } from "react";

const propValues = [
  {
    category: "Hiệu năng & Phần cứng",
    group: "Bộ nhớ RAM",
    help: null,
    label: "Dung lượng",
    pos: 22,
    prop: "mem_cap",
    type: "Number",
    unit: "GB",
  },
  {
    category: "Hiệu năng & Phần cứng",
    group: "Lưu trữ",
    help: null,
    label: "Dung lượng",
    pos: 23,
    prop: "storage_cap",
    type: "Number",
    unit: "GB",
  },
];

const useGetProps = (props, selectedVersion) => {
  const formattedProps = useMemo(() => {
    propValues.forEach((propValue) => {
      if (props[propValue.category]?.[propValue.group]) {
        const index = props[propValue.category][propValue.group].findIndex(
          (p) => p.prop === propValue.prop
        );
        if (index >= 0) {
          props[propValue.category][propValue.group].splice(index, 1);
        }
        const newProps = orderBy(
          [
            ...props[propValue.category][propValue.group],
            {
              ...propValue,
              value: selectedVersion[propValue.prop],
            },
          ],
          "pos",
          "asc"
        );
        props[propValue.category][propValue.group] = newProps;
      }
    });

    return props;
  }, [props, selectedVersion]);
  return formattedProps;
};

export default useGetProps;
