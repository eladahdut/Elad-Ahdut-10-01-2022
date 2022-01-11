import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Navbar() {
  const [alignment, setAlignment] = useState("home");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const nonCapital = {
    "text-transform": "none",
  };

  return (
    <div className="navbar">
      <h3>Herolo/Abra weather task</h3>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}>
        <Link to="/">
          <ToggleButton style={nonCapital} value="home">
            Home
          </ToggleButton>
        </Link>

        <Link to="/favorites">
          <ToggleButton style={nonCapital} value="favorites">
            Favorites
          </ToggleButton>
        </Link>
      </ToggleButtonGroup>
    </div>
  );
}
