import { Flex } from "@chakra-ui/react";

import App from "../../layouts/App";
import BlogBanner from "./BlogBanner";
import BlogArticle from "./BlogArticle";

const Blog = ({ data }) => {
  return (
    <App>
      <Flex as="article" flexDir="column">
        <BlogBanner header={data.header} />
        <BlogArticle article={data.article} />
      </Flex>
    </App>
  );
};

export default Blog;
