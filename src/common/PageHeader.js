import React from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";

const PageHeader = ({ children, onHomeClick }) => {
  return (
    <Paper style={{ height: "3rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1rem",
        }}
      >
        {children}
        <IconButton onClick={onHomeClick} aria-label="Home">
          <HomeIcon />
        </IconButton>
      </div>
    </Paper>
  );
};

export default PageHeader;