import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: (props) => ({
    body: {
      bg: "#878CFF",
    },
  }),
};

const appTheme = extendTheme({ styles });

export default appTheme;
