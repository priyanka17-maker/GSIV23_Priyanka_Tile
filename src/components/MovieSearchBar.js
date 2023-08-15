
import React, { useState } from "react";
import { InputBase, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { debounce } from "lodash";

const MovieSearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  // Apply debouncing to the onSearch function
  const debouncedSearch = debounce(onSearch, 300); // Adjust the delay as needed

  const handleSearch = (value) => {
    setQuery(value);
    debouncedSearch(value); // Call the debounced function
  };

  return (
    <Paper
      component="form"
      sx={{
        height: 30,
        display: "flex",
        alignItems: "center",
        width: '40%',
        backgroundColor: "#dfdfdf",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        inputProps={{ "aria-label": "search Movies" }}
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search"
      />
    </Paper>
  );
};

export default MovieSearchBar;