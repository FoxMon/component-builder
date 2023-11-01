import { useMemo } from "react";
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

// recoil
import { useRecoilValue } from "recoil";
import { activeTarget } from "@/core/componeents/activeTarget";
import { activeTargetSelector } from "@/core/componeents/selectors/activeTarget";

// assets
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Observer = () => {
  const selectedTargetComponent = useRecoilValue(activeTarget);
  const activeComponentTarget = useRecoilValue(
    activeTargetSelector(selectedTargetComponent.cUid),
  );

  const componentName: string = useMemo(
    () =>
      activeComponentTarget?.commonComponentType
        ? activeComponentTarget.commonComponentType
        : "COMPONENT NAME",
    [activeComponentTarget?.commonComponentType],
  );

  return (
    <Box sx={{ background: "white", borderLeft: "1px solid #E2E8F0" }}>
      <Box
        sx={{
          py: 1.2,
          px: 2,
          minWidth: 226,
          width: "100%",
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
          {componentName}
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
        {selectedTargetComponent?.cUid &&
          Object.keys(selectedTargetComponent.props).map((propName: string) => (
            <Accordion square disableGutters elevation={0} key={propName}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ background: "#F7FAFC" }}
              >
                <Typography variant="subtitle2">{propName}</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                {Object.keys(selectedTargetComponent.props[propName]).map(
                  (compProps: string) => (
                    <Box key={compProps}>
                      <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                        {compProps}
                      </Typography>
                      <TextField
                        size="small"
                        inputProps={{
                          style: {
                            height: "18px",
                          },
                        }}
                      />
                    </Box>
                  ),
                )}
              </AccordionDetails>
            </Accordion>
          ))}
      </Box>
      <Divider />
    </Box>
  );
};
