import {
  Box,
  Typography,
  Stack,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
} from "@mui/material";

// assets
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
            <RestartAltIcon sx={{ fontSize: "16px" }} />
          </Typography>
          <Typography variant="caption" sx={{ cursor: "pointer" }}>
            <DeleteForeverIcon sx={{ fontSize: "16px" }} />
          </Typography>
        </Box>
      </Stack>
      <Divider />
      <Box>
        <Accordion square disableGutters elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ background: "#F7FAFC" }}
          >
            <Typography variant="subtitle2">Size</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <Typography variant="caption" sx={{ fontWeight: "bold" }}>
              Width
            </Typography>
            <TextField
              size="small"
              inputProps={{
                style: {
                  height: "18px",
                },
              }}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion square disableGutters elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ background: "#F7FAFC" }}
          >
            <Typography variant="subtitle2">Backgrounds</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <Typography variant="caption" sx={{ fontWeight: "bold" }}>
              Color
            </Typography>
            <TextField
              size="small"
              inputProps={{
                style: {
                  height: "18px",
                },
              }}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion square disableGutters elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ background: "#F7FAFC" }}
          >
            <Typography variant="subtitle2">Border</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <Typography variant="caption" sx={{ fontWeight: "bold" }}>
              Radius
            </Typography>
            <TextField
              size="small"
              inputProps={{
                style: {
                  height: "18px",
                },
              }}
            />
          </AccordionDetails>
        </Accordion>
      </Box>
      <Divider />
    </Box>
  );
};
