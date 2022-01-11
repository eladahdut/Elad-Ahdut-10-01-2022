import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";

export default function InfoCard() {
  const nonCapital = {
    "text-transform": "none",
  };
  return (
    <div className="info-card-box">
      <div className="top-forecast">
        <div className="center">
          <img
            className="city-img"
            src="https://worldwidetravel.tips/wp-content/uploads/2020/09/Tel-aviv-in-Israel-_120-256x256.jpg"
            alt="cityName"
          />
          <span>
            Tel Aviv <br />
            35c°
          </span>
        </div>
        <div className="center">
          <FavoriteBorderIcon />
          <Button style={{ nonCapital, marginLeft: "10px" }} variant="outlined">
            Add to favorites
          </Button>
        </div>
      </div>

      <div className="sky-info">scattered clouds</div>
      <div className="days-container">
        <div className="single-day">1</div>
        <div className="single-day">2</div>
        <div className="single-day">3</div>
        <div className="single-day">4</div>
        <div className="single-day">5</div>
      </div>
    </div>
  );
}
