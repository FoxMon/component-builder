import { Box, Typography, Stack, Divider } from "@mui/material";

// assets
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const Observer = () => {
  return (
    <Box sx={{ background: "white", borderLeft: "1px solid #E2E8F0" }}>
      <Box
        sx={{
          py: 1.2,
          px: 2,
          width: 220,
          display: "flex",
          background: "#FFA630",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: "#FFFFFFEF", fontWeight: "bold" }}
        >
          COMPONENT NAME
        </Typography>
      </Box>
      <Stack
        direction="row"
        px={1}
        py={1}
        spacing={1}
        alignItems="center"
        justifyContent="flex-end"
      >
        <Box>
          <Typography variant="caption" sx={{ cursor: "pointer", mr: 0.5 }}>
            <RestartAltIcon fontSize="small" />
          </Typography>
          <Typography variant="caption" sx={{ cursor: "pointer" }}>
            <DeleteForeverIcon fontSize="small" />
          </Typography>
        </Box>
      </Stack>
      <Divider />
    </Box>
  );
};
