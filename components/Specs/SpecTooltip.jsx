import { Flex, Tooltip, Icon } from "@chakra-ui/react";
import { ImInfo } from "react-icons/im";

const TooltipContent = (data) => (
  <Flex flexDir="column">
    <Flex>
      Designed with premium materials, iPhone 12 Pro models boast a new,
      sophisticated flat-edge design that features a gorgeous surgical-grade
      stainless steel band paired with a precision-milled matte glass back, and
      introduces the incredibly durable Ceramic Shield. The Ceramic Shield front
      cover, tougher than any smartphone glass, goes beyond glass and is infused
      with nano-ceramic crystals to dramatically improve toughness and increase
      drop performance by 4x.2 With impressively larger, edge-to-edge displays
      with reduced borders in familiar sizes, the 6.1-inch iPhone 12 Pro and
      6.7-inch iPhone 12 Pro Max3 feature a Super Retina XDR display with
      systemwide color management for industry-leading color accuracy.
    </Flex>
    <Flex color="red.500">aaas</Flex>
    <Flex justifySelf="center" m="auto" fontStyle="italic">
      Nhấp vào để xem chi tiết
    </Flex>
  </Flex>
);

const SpecToolTip = ({ color }) => (
  <Tooltip label={<TooltipContent />}>
    <Flex ml="2" cursor="help">
      <Icon as={ImInfo} fontSize="sm" color={color} />
    </Flex>
  </Tooltip>
);

export default SpecToolTip;
