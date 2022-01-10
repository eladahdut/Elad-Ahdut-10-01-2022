import TextField from "@mui/material/TextField";
import InfoCard from "./InfoCard";

export default function MainPage() {
  return (
    <div className="main-page">
      <TextField
        sx={{ width: "50%" }}
        autoFocus="true"
        id="outlined-basic"
        label="Search.."
        variant="outlined"
        placeholder="Tel Aviv"
      />
      <br />
      <InfoCard />
    </div>
  );
}
