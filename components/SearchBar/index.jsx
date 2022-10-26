import React, { useState } from "react";
import { TextField } from "@mui/material";

function SearchBar({ onChange }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      fullWidth
      label="Pesquisar"
      value={value}
      onChange={handleChange}
    />
  );
}

export default SearchBar;
