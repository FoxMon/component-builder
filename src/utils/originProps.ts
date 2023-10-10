interface OriginProps {
  Box?: {
    variant: "flex" | "grid" | "block";
    size?: {
      width: string;
      height: string;
    };
  };
  Input?: {
    label?: string;
    inputSize: "small" | "medium";
    size?: {
      width: string;
      height: string;
    };
    spacing?: {
      marginTop: string;
      marginRight: string;
      marginBottom: string;
      marginLeft: string;
    };
  };
}

export const originProps: OriginProps = {
  Box: {
    variant: "block",
    size: {
      width: "100%",
      height: "100%",
    },
  },
  Input: {
    label: "",
    inputSize: "medium",
    size: {
      width: "100%",
      height: "100%",
    },
    spacing: {
      marginTop: "0px",
      marginRight: "0px",
      marginBottom: "0px",
      marginLeft: "0px",
    },
  },
};
