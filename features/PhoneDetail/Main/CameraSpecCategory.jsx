import { Flex, Text } from "@chakra-ui/react";
import { sortBy } from "lodash";
import HeadingWithUnderline from "../../../components/HeadingWithUnderline";

import { SpecCategoryBox, SpecGroup, Spec } from "../../../components/Specs";

const cameraLensTypes = {
  wide: "Góc rộng",
  ultrawide: "Góc siêu rộng",
  telephoto: "Chụp xa",
  macro: "Cận cảnh",
  depth: "Đo độ sâu trường ảnh",
  periscope_telephoto: "Tiềm vọng",
  standard: "Tiêu chuẩn",
};

const cameraSpecs = {
  name: {
    prop: "name",
    label: "Cảm biến",
    type: "Enum",
    help: "",
    unit: null,
    pos: 2,
  },
  aperture: {
    prop: "aperture",
    label: "Khẩu độ",
    type: "Number",
    help: "",
    unit: null,
    pos: 3,
  },
  focus_length: {
    prop: "focus_length",
    label: "Tiêu cự",
    type: "Number",
    help: "",
    unit: "mm",
    pos: 6,
  },
  focus_type: {
    prop: "focus_type",
    label: "Kiểu lấy nét",
    type: "",
    help: "",
    unit: null,
    pos: 7,
  },
  stab_type: {
    prop: "stab_type",
    label: "Kiểu chống rung",
    type: "",
    help: "",
    unit: null,
    pos: 8,
  },
  field_of_view: {
    prop: "field_of_view",
    label: "Độ rộng trường nhìn",
    type: "",
    help: "",
    unit: "˚",
    pos: 9,
  },
  zoom: {
    prop: "zoom",
    label: "Khả năng zoom",
    type: "",
    help: "",
    unit: null,
    pos: 10,
  },
  sensor_type: {
    prop: "sensor_type",
    label: "Loại cảm biến",
    type: "",
    help: "",
    unit: null,
    pos: 11,
  },
  pixel_type: {
    prop: "pixel_type",
    label: "Loại pixel",
    type: "",
    help: "",
    unit: null,
    pos: 12,
  },
  resolution: {
    prop: "resolution",
    label: "Độ phân giải",
    type: "",
    help: "",
    unit: null,
    pos: 2,
  },
  megapixels: {
    prop: "megapixels",
    label: "Độ phân giải",
    type: "Number",
    help: "",
    unit: "MP",
    pos: 1,
  },
  pixel_size: {
    prop: "pixel_size",
    label: "Kích thước pixel",
    type: "",
    help: "",
    unit: "µm",
    pos: 4,
  },
  sensor_size: {
    prop: "sensor_size",
    label: "Kích thước cảm biến",
    type: "",
    help: "",
    unit: null,
    pos: 5,
  },
};

const formatCameraSpecValue = (specKey, specVal) => {
  switch (specKey) {
    case "resolution":
      return specVal ? specVal.join(" x ") : "--";
    case "aperture":
      return specVal ? `ƒ/ ${specVal}` : "--";
    case "sensor_size":
      return specVal ? `1/${specVal}"` : "--";
    default:
      return specVal || "--";
  }
};

const mergeCameraSpecs = (sensor) => {
  return sortBy(
    Object.entries(sensor)
      .map(([key, value]) => {
        if (
          !value &&
          [
            "focus_type",
            "field_of_view",
            "focus_length",
            "stab_type",
            "zoom",
            "resolution",
          ].includes(key)
        ) {
          return {};
        }
        switch (key) {
          default:
            return {
              ...cameraSpecs[key],
              value: formatCameraSpecValue(key, value),
            };
        }
      })
      .filter(({ prop }) => prop),
    ["pos", "asc"]
  );
};

const CameraSensor = ({ sensor, isMain }) => {
  return (
    <Flex
      p="2"
      my="1"
      bg="gray.700"
      flexDir="column"
      borderRadius="md"
      w={{
        base: "100%",
        xl: "calc(50% - 0.2rem)",
      }}
    >
      <Flex justify="space-between" p="2" mb="1" fontWeight="700" fontSize="md">
        <Text>
          {cameraLensTypes[sensor.lens_type]
            ? cameraLensTypes[sensor.lens_type]
            : sensor.lens_type}{" "}
          {isMain ? "(chính)" : ""}
        </Text>
        <Text>{sensor.pos}</Text>
      </Flex>
      <Flex flexDir="column">
        {mergeCameraSpecs(sensor).map((spec) => (
          <Spec
            ml={{ base: "2", md: "4" }}
            theme="dark"
            key={spec.prop}
            category={"Màn hình"}
            spec={spec}
            w={{ base: "36", sm: "60", xl: "44" }}
          />
        ))}
      </Flex>
    </Flex>
  );
};

const CameraSpecCategory = ({ heading, groups, icon }) => {
  return (
    <SpecCategoryBox theme="dark" icon={icon} heading={heading}>
      {Object.entries(groups).map(([groupName, data]) => (
        <Flex key={groupName} flexDir="column">
          <HeadingWithUnderline
            fontSize="lg"
            mt="6"
            fontWeight="700"
            alignSelf="flex-start"
          >
            {groupName}
          </HeadingWithUnderline>
          <Flex flexWrap="wrap" justify="space-between" mt="1">
            {data.sensors?.map((sensor) => (
              <CameraSensor
                key={sensor.pos}
                sensor={sensor}
                isMain={sensor.pos === 1 && data.sensors.length > 1}
              />
            ))}
          </Flex>
          {data.specs && <SpecGroup specs={data.specs} theme="dark" />}
        </Flex>
      ))}
    </SpecCategoryBox>
  );
};

export default CameraSpecCategory;
