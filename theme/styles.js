const styles = {
  global: (props) => ({
    "html, body": {
      fontFamily: "ProximaNova, sans-serif",
      fontSize: "md",
      color: props.colorMode === "dark" ? "white" : "gray.600",
      lineHeight: "tall",
    },
    a: {
      color: props.colorMode === "dark" ? "teal.300" : "teal.500",
    },
  }),
};

export default styles;
