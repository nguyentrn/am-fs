import { ChakraProvider, ScaleFade } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

import store from "../redux/store";
import theme from "../theme";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, router }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ReduxProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
