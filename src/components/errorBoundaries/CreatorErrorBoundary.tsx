import { Component } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import { logging } from "@/utils/logger";

// type
import type { Children } from "@/types/component";

interface CreatorErrorBoundaryState {
  hasError: boolean;
}

interface CreatorErrorBoundaryProps extends Children {
  reset: () => void;
}

export class CreatorErrorBoundary extends Component<
  CreatorErrorBoundaryProps,
  CreatorErrorBoundaryState
> {
  state: CreatorErrorBoundaryState;

  constructor(props: CreatorErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  /**
   * @override
   *
   * @param {unknown} error
   * @returns {CreatorErrorBoundaryState}
   */
  static getDerivedStateFromError(error: unknown): CreatorErrorBoundaryState {
    logging(error);

    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            backgroundImage:
              "linear-gradient(to right, #d9e2e9 1px, transparent 1px),linear-gradient(to bottom, #d9e2e9 1px, transparent 1px);",
            backgroundSize: "20px 20px",
            background: "#edf2f6",
            display: "flex",
            flex: 1,
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            alignItems="center"
            direction="column"
            spacing={8}
            bgcolor="white"
            px={6}
            py={6}
            boxShadow={1}
          >
            <h1>Oops...</h1>
            <Typography>
              Something went wrong in creator! Clear and refresh.
            </Typography>
            <Button
              size="small"
              variant="outlined"
              onClick={() => window.location.reload()}
            >
              Reset
            </Button>
          </Stack>
        </Box>
      );
    }

    return this.props.children;
  }
}
