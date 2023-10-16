import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ChartComponent from "./ChartComponent";
import { Grid } from "@mui/material";

function MonthChart() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="monthChart-container">
      <div className="monthChart-title">
        <div className="title">
          <h2>Overview</h2>
          <span>Monthly Earning</span>
        </div>
        <Box sx={{ minWidth: 120 }} className="month-select">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Period</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Quarterly</MenuItem>
              <MenuItem value={20}>Halfly</MenuItem>
              <MenuItem value={30}>Annual</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <ChartComponent />
    </div>
  );
}

export default MonthChart;
