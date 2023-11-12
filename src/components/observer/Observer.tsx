import { useState, useEffect, useMemo, useCallback, ChangeEvent } from "react";
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
import { useRecoilState, useRecoilValue } from "recoil";
import { activeTarget } from "@/core/componeents/activeTarget";
import { activeTargetSelector } from "@/core/componeents/selectors/activeTarget";

// assets
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import type { ActiveTarget } from "@/core/componeents/activeTarget";

interface FormValue {
  [key: string]: string;
}

export const Observer = () => {
  const [selectedTargetComponent, setSelectedTargetComponent] =
    useRecoilState(activeTarget);
  const activeComponentTarget = useRecoilValue(
    activeTargetSelector(selectedTargetComponent.cUid),
  );

  const componentName: string = useMemo(
    () =>
      activeComponentTarget?.commonComponentType
        ? activeComponentTarget.commonComponentType
        : "NAME",
    [activeComponentTarget?.commonComponentType],
  );

  const [formValue, setFormValue] = useState(() => {
    const propForm: FormValue = {};

    Object.keys(selectedTargetComponent.props).forEach((propName: string) => {
      propForm[propName] = selectedTargetComponent.props[propName];
    });

    return propForm;
  });

  useEffect(() => {
    setFormValue(() => {
      const propForm: FormValue = {};

      Object.keys(selectedTargetComponent.props).forEach((propName: string) => {
        propForm[propName] = selectedTargetComponent.props[propName];
      });

      return propForm;
    });
  }, [selectedTargetComponent, activeComponentTarget]);

  const handleFormValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setFormValue((prev: FormValue) => {
        return {
          ...prev,
          [name]: value,
        };
      });

      setSelectedTargetComponent((prev: ActiveTarget) => {
        return {
          ...prev,
          props: {
            ...prev.props,
            [name]: value,
          },
        };
      });
    },
    [setSelectedTargetComponent],
  );

  return (
    <Box sx={{ background: "#FFFFFF", borderLeft: "1px solid #E2E8F0" }}>
      <Box
        sx={{
          py: 0.5,
          px: 2,
          minWidth: 226,
          width: "100%",
          display: "flex",
          background: "#FFA630",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: "#FFFFFFEF", fontWeight: "bold" }}
        >
          {componentName}
        </Typography>
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
      </Box>
      <Box>
        {selectedTargetComponent?.cUid &&
          Object.keys(selectedTargetComponent.props).map((propName: string) => (
            <Accordion square disableGutters elevation={0} key={propName}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ background: "#F7FAFC" }}
              >
                <Typography variant="subtitle2">
                  {propName.toUpperCase()}
                </Typography>
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
                        name={compProps}
                        value={formValue[compProps] || ""}
                        inputProps={{
                          style: {
                            height: "18px",
                          },
                        }}
                        onChange={handleFormValueChange}
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
