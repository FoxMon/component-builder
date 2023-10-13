// util
import { colors } from "./colors";

interface OriginProps {
  Box: {
    variant: "flex" | "grid" | "block";
    size: {
      width: string | number;
      height: string | number;
    };
    spacing: {
      marginTop: number;
      marginRight: number;
      marginBottom: number;
      marginLeft: number;
      paddingTop: number;
      paddingRight: number;
      paddingBottom: number;
      paddingLeft: number;
    };
    border: {
      radius: number;
      line: number;
      lineStyle: "solid" | "dotted" | "dashed";
      color: string;
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
  Button: {
    label: string;
    variant: "outlined" | "contained";
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
      height: "2rem",
    },
    spacing: {
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
    },
    border: {
      radius: 0,
      line: 2,
      lineStyle: "dotted",
      color: colors.red700,
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
  Button: {
    label: "I'm button",
    variant: "outlined",
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
