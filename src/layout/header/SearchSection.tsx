// material-ui
import { styled, Box, InputAdornment, OutlinedInput } from "@mui/material";

// assets
import { shouldForwardProp } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";

// styles
const OutlineInputStyle = styled(OutlinedInput, { shouldForwardProp })(
  ({ theme }) => ({
    width: 434,
    marginLeft: 16,
    paddingLeft: 16,
    paddingRight: 16,
    "& input": {
      background: "transparent !important",
      paddingLeft: "4px !important",
    },
    [theme.breakpoints.down("lg")]: {
      width: 250,
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginLeft: 4,
      background: "#fff",
    },
  }),
);

export const SearchSection = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <OutlineInputStyle
        id="input-search-header"
        placeholder="Search"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        aria-describedby="search-helper-text"
        inputProps={{ "aria-label": "weight" }}
      />
    </Box>
  );
};
