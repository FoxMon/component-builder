// util
import { colors } from "./colors";

interface Option {
  name: string;
  value: string;
}

interface OriginProps {
  Box: {
    variant: "flex" | "grid" | "block";
    border: {
      radius: number;
      line: number;
      lineStyle: "solid" | "dotted" | "dashed";
      color: string;
    };
    props: {
      size: {
        width: string;
        height: string;
      };
      spacing: {
        marginTop: string;
        marginRight: string;
        marginBottom: string;
        marginLeft: string;
        paddingTop: string;
        paddingRight: string;
        paddingBottom: string;
        paddingLeft: string;
      };
    };
  };
  Input: {
    label: string;
    inputSize: "small" | "medium";
    props: {
      size: {
        width: string;
        height: string;
      };
      spacing: {
        marginTop: string;
        marginRight: string;
        marginBottom: string;
        marginLeft: string;
      };
    };
  };
  Button: {
    label: string;
    variant: "outlined" | "contained";
    props: {
      size: {
        width: string;
        height: string;
      };
      spacing: {
        marginTop: string;
        marginRight: string;
        marginBottom: string;
        marginLeft: string;
      };
    };
  };
  CheckBox: {
    props: {
      size: {
        width: string;
        height: string;
      };
      spacing: {
        marginTop: string;
        marginRight: string;
        marginBottom: string;
        marginLeft: string;
      };
    };
  };
  Typography: {
    text: string;
    props: {
      size: {
        width: string;
        height: string;
      };
      spacing: {
        marginTop: string;
        marginRight: string;
        marginBottom: string;
        marginLeft: string;
      };
    };
  };
  Spinner: {
    props: {
      size: {
        width: string;
        height: string;
      };
      spacing: {
        marginTop: string;
        marginRight: string;
        marginBottom: string;
        marginLeft: string;
      };
    };
  };
  Select: {
    label: string;
    options: Option[];
    props: {
      size: {
        width: string;
        height: string;
      };
      spacing: {
        marginTop: string;
        marginRight: string;
        marginBottom: string;
        marginLeft: string;
      };
    };
  };
}

export const originProps: OriginProps = {
  Box: {
    variant: "block",
    border: {
      radius: 0,
      line: 2,
      lineStyle: "dotted",
      color: colors.red700,
    },
    props: {
      size: {
        width: "100%",
        height: "3.5rem",
      },
      spacing: {
        marginTop: "0px",
        marginRight: "0px",
        marginBottom: "0px",
        marginLeft: "0px",
        paddingTop: "0px",
        paddingRight: "0px",
        paddingBottom: "0px",
        paddingLeft: "0px",
      },
    },
  },
  Input: {
    label: "Please enter your text !",
    inputSize: "medium",
    props: {
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
  },
  Button: {
    label: "I'm button",
    variant: "outlined",
    props: {
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
  },
  CheckBox: {
    props: {
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
  },
  Typography: {
    text: "Simple page with component builder",
    props: {
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
  },
  Spinner: {
    props: {
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
  },
  Select: {
    label: "Select Input",
    options: [
      {
        name: "Select Menu 1",
        value: "Menu 1",
      },
      {
        name: "Select Menu 2",
        value: "Menu 2",
      },
      {
        name: "Select Menu 3",
        value: "Menu 3",
      },
    ],
    props: {
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
  },
};
