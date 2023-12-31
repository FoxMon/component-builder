import { useState, useEffect, useMemo, useCallback, ChangeEvent } from "react";
import {
  Box,
  Typography,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
} from "@mui/material";

// recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { activeTarget } from "@/core/componeents/activeTarget";
import { placedTargetComponent } from "@/core/componeents/target";
import { activeTargetSelector } from "@/core/componeents/selectors/activeTarget";

// assets
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// type
import type { ActiveTarget } from "@/core/componeents/activeTarget";
import type { Components } from "@/types/component";

interface FormValue {
  [key: string]: string;
}

export const Observer = () => {
  const [selectedTargetComponent, setSelectedTargetComponent] =
    useRecoilState(activeTarget);
  const [placedComponents, setPlacedComponents] = useRecoilState(
    placedTargetComponent,
  );

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

  const handleResetButtonClick = useCallback(() => {
    setPlacedComponents({});
    setSelectedTargetComponent({
      cUid: "",
      isActive: false,
      isSelected: false,
      commonComponentType: "",
      props: {},
    });
  }, [setPlacedComponents, setSelectedTargetComponent]);

  const handleTrashButtonClick = useCallback(() => {
    if (placedComponents) {
      const activeComponentUid: string = selectedTargetComponent.cUid;
      const placedComponentObject: Components = {};

      Object.keys(placedComponents).forEach((uid: string) => {
        if (uid !== activeComponentUid) {
          placedComponentObject[uid] = placedComponents[uid];
        }
      });

      setPlacedComponents(placedComponentObject);
    }
  }, [placedComponents, selectedTargetComponent.cUid, setPlacedComponents]);

  return (
    <Box sx={{ background: "#FFFFFF", borderLeft: "1px solid #E2E8F0" }}>
      <Box
        sx={{
          py: 1,
          px: 1.5,
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
        <Box>
          <Typography
            variant="caption"
            sx={{ cursor: "pointer", mr: 0.5 }}
            onClick={handleResetButtonClick}
          >
            <RestartAltIcon sx={{ fontSize: "16px" }} />
          </Typography>
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={handleTrashButtonClick}
          >
            <DeleteForeverIcon sx={{ fontSize: "16px" }} />
          </Typography>
        </Box>
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
