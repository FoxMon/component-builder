interface OriginProps {
  Box?: {
    variant: "flex" | "grid" | "block";
    size: {
      width: string | number;
      height: string | number;
    };
  };
  Input: {
    label: string;
    inputSize: "small" | "medium";
    size: {
      width: string;
      height: string;
    };
    spacing: {
      marginTop: number;
      marginRight: number;
      marginBottom: number;
      marginLeft: number;
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
    label: "Please enter your text !",
    inputSize: "medium",
    size: {
      width: "100%",
      height: "100%",
    },
    spacing: {
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
    },
  },
};
