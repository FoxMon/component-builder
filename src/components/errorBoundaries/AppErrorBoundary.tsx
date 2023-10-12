import { Component } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

// util
import { logging } from "@/utils/logger";

// type
import type { Children } from "@/types/component";

interface AppErrorBoundaryState {
  hasError: boolean;
}

export class AppErrorBoundary extends Component<
  Children,
  AppErrorBoundaryState
> {
  state: AppErrorBoundaryState;

  constructor(props: Children) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  /**
   * @override
   *
   * @param {unknown} error
   * @returns {AppErrorBoundaryState}
   */
  static getDerivedStateFromError(error: unknown): AppErrorBoundaryState {
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
            <Typography>Something went wrong! Clear and refresh.</Typography>
            <Button
              size="small"
              variant="outlined"
              onClick={() => window.location.reload()}
            >
              Clear & reload
            </Button>
          </Stack>
        </Box>
      );
    }

    return this.props.children;
  }
}
