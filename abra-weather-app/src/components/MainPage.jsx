import TextField from "@mui/material/TextField";
import { useState } from "react";
import InfoCard from "./InfoCard";

import { debounce } from "lodash";

export default function MainPage() {
  const [inputValue, setInputValue] = useState("");

  console.log(inputValue.length > 0 ? inputValue : "no input yet");

  return (
    <div className="main-page">
      <TextField
        sx={{ width: "50%" }}
        onKeyUp={debounce((e) => setInputValue(e.target.value, e), 1000)}
        type="search"
        label="Search.."
        variant="outlined"
        placeholder="For example.. Tel Aviv"
      />

      <br />
      <InfoCard />
    </div>
  );
}
