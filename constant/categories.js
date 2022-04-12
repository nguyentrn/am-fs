import props from "./phones/props";
import {
  RiSmartphoneLine,
  RiTabletLine,
  RiHeadphoneLine,
} from "react-icons/ri";
import { FiMonitor, FiWatch } from "react-icons/fi";
import { BsMouse2, BsKeyboard, BsSpeaker, BsCpu } from "react-icons/bs";
import { AiOutlineLaptop } from "react-icons/ai";
import MainboardIcon from "./logo/MainboardIcon";
import VGACardIcon from "./logo/VGACardIcon";

const categories = {
  "dien-thoai": {
    slug: "dien-thoai",
    label: "Điện thoại",
    group: "Thiết bị di động",
    icon: RiSmartphoneLine,
    props,
  },
  "may-tinh-bang": {
    slug: "may-tinh-bang",
    label: "Máy tính bảng",
    group: "Thiết bị di động",

    icon: RiTabletLine,
    props,
  },
  laptop: {
    slug: "laptop",
    label: "Laptop",
    group: "Laptop và Máy tính",
    icon: AiOutlineLaptop,
    props,
  },
  "dong-ho-thong-minh": {
    slug: "dong-ho-thong-minh",
    label: "Đồng hồ thông minh",
    group: "Thiết bị di động",
    icon: FiWatch,
    props,
  },
  "man-hinh": {
    slug: "man-hinh",
    label: "Màn hình",
    group: "Laptop và Máy tính",

    icon: FiMonitor,
    props,
  },
  "tai-nghe": {
    slug: "tai-nghe",
    label: "Tai nghe",
    group: "Phụ kiện điện tử",
    icon: RiHeadphoneLine,
    props,
  },
  chuot: {
    slug: "chuot",
    label: "Chuột",
    group: "Linh kiện máy tính",
    icon: BsMouse2,
    props,
  },
  "ban-phim": {
    slug: "ban-phim",
    label: "Bàn phím",
    group: "Linh kiện máy tính",
    icon: BsKeyboard,
    props,
  },
  loa: {
    slug: "loa",
    label: "Loa",
    group: "Phụ kiện điện tử",
    icon: BsSpeaker,
    props,
  },
  mainboard: {
    slug: "mainboard",
    label: "Mainboard",
    group: "Linh kiện máy tính",
    icon: MainboardIcon,
    props,
  },
  cpu: {
    slug: "cpu",
    label: "CPU",
    group: "Linh kiện máy tính",
    icon: BsCpu,
    props,
  },
  "card-man-hinh": {
    slug: "card-man-hinh",
    label: "Card màn hình",
    group: "Linh kiện máy tính",
    icon: VGACardIcon,
    props,
  },
};

export default categories;
