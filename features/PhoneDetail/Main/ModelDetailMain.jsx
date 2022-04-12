import {
  FiCamera,
  FiBatteryCharging,
  FiCpu,
  FiWifi,
  FiSmartphone,
} from "react-icons/fi";

import Main from "../../../layouts/Main";
import NormalSpecCategory from "../../../components/Specs";
import CameraSpecCategory from "./CameraSpecCategory";
import useGetProps from "../hooks/useGetProps";

const categories = {
  "Thiết kế & Màn hình": { icon: FiSmartphone },
  "Hiệu năng & Phần cứng": { icon: FiCpu },
  "Máy ảnh": { icon: FiCamera },
  "Kết nối": { icon: FiWifi },
  Pin: { icon: FiBatteryCharging },
};

const getCategoryBox = (props) => {
  return Object.entries(props).map(([category, groups]) => {
    switch (category) {
      case "Máy ảnh": {
        return (
          <CameraSpecCategory
            key={category}
            heading={category}
            groups={groups}
            icon={categories[category].icon}
          />
        );
      }
      default: {
        return (
          <NormalSpecCategory
            key={category}
            heading={category}
            groups={groups}
            icon={categories[category]?.icon}
          />
        );
      }
    }
  });
};

const ModelDetailMain = ({ model, selectedVersion }) => {
  const props = useGetProps(model.props, selectedVersion);
  return <Main>{getCategoryBox(props)}</Main>;
};

export default ModelDetailMain;
