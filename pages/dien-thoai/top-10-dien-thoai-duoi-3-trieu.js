import { Flex, Text, Image, Heading } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getPhone } from "../../api/phone";
import Blog from "../../features/Blog/Blog";

const data = {
  header: {
    title: "TOP 5 điện thoại giá rẻ dưới 4 triệu đáng mua nhất",
    author: "Góc Rìviu",
    updated_at: dayjs().format("DD/MM/YYYY"),
  },
  article: {
    opening: [
      {
        type: "p",
        content:
          "Không chỉ có cấu hình phù hợp với việc chơi game, được trang bị một viên pin lớn tới 5.000 mAh cũng là một điểm mạnh của chiếc A03s này.",
      },
      {
        type: "p",
        content:
          "Thời lượng pin của máy khi được sạc đầy có thể kéo dài đến 9 tiếng liên tục cho các tác vụ hỗn hợp và thậm chí có thể lâu hơn nếu chỉ dùng các tác vụ nhẹ nhàng như lướt web hay xem phim. Dùng chiếc A03s này để chơi game hay coi phim thì cứ gọi là mỏi tay mỏi mắt mà vẫn chưa hết pin nha.",
      },
      {
        type: "p",
        content:
          "Hy vọng bài viết này sẽ giúp bạn lựa chọn được sản phẩm ưng ý nhất. Danh sách được xếp theo thứ tự giá trị, danh sách sản phẩm và giá bán sẽ được cập nhật hằng ngày.",
      },
    ],
    main: [
      {
        label:
          "Samsung Galaxy A03 - Điện thoại giá rẻ dưới 4 triệu mới nhất của Samsung",
        contents: [
          {
            type: "p",
            content:
              "Tiếp theo phải kể đến chiếc điện thoại giá rẻ mà cấu hình mạnh của Samsung - Samsung Galaxy A03s. Nếu bạn đang tìm một chiếc điện thoại giá rẻ 2022 có cấu hình mạnh cân cả Liên Quân và có thể học online thì Galaxy A03s chính là chiếc điện thoại dành cho bạn.",
          },
          {
            type: "img",
            source:
              "https://cdn.tgdd.vn/Files/2022/01/22/1412425/galaxya03s-15_1280x720-800-resize.jpg",
            caption: "A03s của Samsung có nhiều điểm vượt ngoài tầm giá",
          },
          {
            type: "p",
            content:
              "Máy được trang bị con chip Helio P35 chính là một con chip khá thường thấy trên những chiếc smartphone giá rẻ. Kết hợp với 4 GB RAM, hiệu năng của máy là đủ mạnh để chơi một số tựa game như Liên Quân Mobile, PUBG Mobile, Free Fire,... hay một số tựa game có đồ họa nhẹ nhàng khác.",
          },
          {
            type: "img",
            source:
              "https://cdn.tgdd.vn/Files/2022/01/22/1412425/galaxya03s-33_1280x720-800-resize.jpg",
            caption: "A03s đủ sức chiến tốt những tựa game phổ biến hiện nay.",
          },
          {
            type: "p",
            content:
              "Không chỉ có cấu hình phù hợp với việc chơi game, được trang bị một viên pin lớn tới 5.000 mAh cũng là một điểm mạnh của chiếc A03s này.",
          },
          {
            type: "p",
            content:
              "Thời lượng pin của máy khi được sạc đầy có thể kéo dài đến 9 tiếng liên tục cho các tác vụ hỗn hợp và thậm chí có thể lâu hơn nếu chỉ dùng các tác vụ nhẹ nhàng như lướt web hay xem phim. Dùng chiếc A03s này để chơi game hay coi phim thì cứ gọi là mỏi tay mỏi mắt mà vẫn chưa hết pin nha.",
          },
        ],
      },
      {
        label: "Xiaomi Redmi 9C",
        contents: [
          {
            type: "p",
            content:
              "Tiếp theo phải kể đến chiếc điện thoại giá rẻ mà cấu hình mạnh của Samsung - Samsung Galaxy A03s. Nếu bạn đang tìm một chiếc điện thoại giá rẻ 2022 có cấu hình mạnh cân cả Liên Quân và có thể học online thì Galaxy A03s chính là chiếc điện thoại dành cho bạn.",
          },
          {
            type: "img",
            source:
              "https://cdn.tgdd.vn/Files/2022/01/22/1412425/galaxya03s-15_1280x720-800-resize.jpg",
            caption: "A03s của Samsung có nhiều điểm vượt ngoài tầm giá",
          },
          {
            type: "p",
            content:
              "Máy được trang bị con chip Helio P35 chính là một con chip khá thường thấy trên những chiếc smartphone giá rẻ. Kết hợp với 4 GB RAM, hiệu năng của máy là đủ mạnh để chơi một số tựa game như Liên Quân Mobile, PUBG Mobile, Free Fire,... hay một số tựa game có đồ họa nhẹ nhàng khác.",
          },
          {
            type: "img",
            source:
              "https://cdn.tgdd.vn/Files/2022/01/22/1412425/galaxya03s-33_1280x720-800-resize.jpg",
            caption: "A03s đủ sức chiến tốt những tựa game phổ biến hiện nay.",
          },
          {
            type: "p",
            content:
              "Không chỉ có cấu hình phù hợp với việc chơi game, được trang bị một viên pin lớn tới 5.000 mAh cũng là một điểm mạnh của chiếc A03s này.",
          },
          {
            type: "p",
            content:
              "Thời lượng pin của máy khi được sạc đầy có thể kéo dài đến 9 tiếng liên tục cho các tác vụ hỗn hợp và thậm chí có thể lâu hơn nếu chỉ dùng các tác vụ nhẹ nhàng như lướt web hay xem phim. Dùng chiếc A03s này để chơi game hay coi phim thì cứ gọi là mỏi tay mỏi mắt mà vẫn chưa hết pin nha.",
          },
        ],
      },
      {
        label: "Nokia G10",
        contents: [
          {
            type: "p",
            content:
              "Tiếp theo phải kể đến chiếc điện thoại giá rẻ mà cấu hình mạnh của Samsung - Samsung Galaxy A03s. Nếu bạn đang tìm một chiếc điện thoại giá rẻ 2022 có cấu hình mạnh cân cả Liên Quân và có thể học online thì Galaxy A03s chính là chiếc điện thoại dành cho bạn.",
          },
          {
            type: "img",
            source:
              "https://cdn.tgdd.vn/Files/2022/01/22/1412425/galaxya03s-15_1280x720-800-resize.jpg",
            caption: "A03s của Samsung có nhiều điểm vượt ngoài tầm giá",
          },
          {
            type: "p",
            content:
              "Máy được trang bị con chip Helio P35 chính là một con chip khá thường thấy trên những chiếc smartphone giá rẻ. Kết hợp với 4 GB RAM, hiệu năng của máy là đủ mạnh để chơi một số tựa game như Liên Quân Mobile, PUBG Mobile, Free Fire,... hay một số tựa game có đồ họa nhẹ nhàng khác.",
          },
          {
            type: "img",
            source:
              "https://cdn.tgdd.vn/Files/2022/01/22/1412425/galaxya03s-33_1280x720-800-resize.jpg",
            caption: "A03s đủ sức chiến tốt những tựa game phổ biến hiện nay.",
          },
          {
            type: "p",
            content:
              "Không chỉ có cấu hình phù hợp với việc chơi game, được trang bị một viên pin lớn tới 5.000 mAh cũng là một điểm mạnh của chiếc A03s này.",
          },
          {
            type: "p",
            content:
              "Thời lượng pin của máy khi được sạc đầy có thể kéo dài đến 9 tiếng liên tục cho các tác vụ hỗn hợp và thậm chí có thể lâu hơn nếu chỉ dùng các tác vụ nhẹ nhàng như lướt web hay xem phim. Dùng chiếc A03s này để chơi game hay coi phim thì cứ gọi là mỏi tay mỏi mắt mà vẫn chưa hết pin nha.",
          },
        ],
      },
      {
        label: "Samsung Galaxy A03s",
        contents: [
          {
            type: "p",
            content:
              "Tiếp theo phải kể đến chiếc điện thoại giá rẻ mà cấu hình mạnh của Samsung - Samsung Galaxy A03s. Nếu bạn đang tìm một chiếc điện thoại giá rẻ 2022 có cấu hình mạnh cân cả Liên Quân và có thể học online thì Galaxy A03s chính là chiếc điện thoại dành cho bạn.",
          },
          {
            type: "img",
            source:
              "https://cdn.tgdd.vn/Files/2022/01/22/1412425/galaxya03s-15_1280x720-800-resize.jpg",
            caption: "A03s của Samsung có nhiều điểm vượt ngoài tầm giá",
          },
          {
            type: "p",
            content:
              "Máy được trang bị con chip Helio P35 chính là một con chip khá thường thấy trên những chiếc smartphone giá rẻ. Kết hợp với 4 GB RAM, hiệu năng của máy là đủ mạnh để chơi một số tựa game như Liên Quân Mobile, PUBG Mobile, Free Fire,... hay một số tựa game có đồ họa nhẹ nhàng khác.",
          },
          {
            type: "img",
            source:
              "https://cdn.tgdd.vn/Files/2022/01/22/1412425/galaxya03s-33_1280x720-800-resize.jpg",
            caption: "A03s đủ sức chiến tốt những tựa game phổ biến hiện nay.",
          },
          {
            type: "p",
            content:
              "Không chỉ có cấu hình phù hợp với việc chơi game, được trang bị một viên pin lớn tới 5.000 mAh cũng là một điểm mạnh của chiếc A03s này.",
          },
          {
            type: "p",
            content:
              "Thời lượng pin của máy khi được sạc đầy có thể kéo dài đến 9 tiếng liên tục cho các tác vụ hỗn hợp và thậm chí có thể lâu hơn nếu chỉ dùng các tác vụ nhẹ nhàng như lướt web hay xem phim. Dùng chiếc A03s này để chơi game hay coi phim thì cứ gọi là mỏi tay mỏi mắt mà vẫn chưa hết pin nha.",
          },
        ],
      },
    ],
  },
};

export default function Top10PhonesBelow3M({ data }) {
  return <Blog data={data} />;
}

export async function getServerSideProps({ params }) {
  return {
    props: { data },
  };
}
