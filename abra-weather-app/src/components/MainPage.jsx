import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import InfoCard from "./InfoCard";
import { debounce } from "lodash";
import Autocomplete from "@mui/material/Autocomplete";
import { getAutoComplete, getCurrentCondition } from "../API/getApi";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

export default function MainPage() {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState(["Tel Aviv"]);
  const [CityName, setCityName] = useState("Tel Aviv, IL");
  // const [currentCityKey, setCurrentCityKey] = useState(215854);
  // const [currentCityInfo, setCurrentCityInfo] = useState([]);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { updateAutoComplete, updateCurrCondition, updateCurrCityKey } =
    bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    async function fetchAutoComplete() {
      const options = await getAutoComplete(inputValue);

      updateAutoComplete(options);
      if (state.weatherObject.autoCompleteLocations) {
        let res = [];
        state.weatherObject.autoCompleteLocations.map((item) =>
          res.push({
            id: item.Country.ID,
            name: item.LocalizedName,
            key: item.Key,
          })
        );
        setResults(res);
      }
    }

    async function fetchCurrentWeather() {
      const condition = await getCurrentCondition(
        state.weatherObject.currCityKey
      );
      updateCurrCondition(condition);
    }

    fetchAutoComplete();
    fetchCurrentWeather();
  }, [inputValue, state.weatherObject.currCityKey]); //currentCityKey

  async function getCityKey(key) {
    console.log(key);
    results.map((city) => {
      if (`${city.name}, ${city.id}` === key) {
        updateCurrCityKey(city.key);
      }
    });
  }

  console.log(state);

  return (
    <div className="main-page">
      <Autocomplete
        sx={{ width: "50%" }}
        options={
          results ? results.map((option) => `${option.name}, ${option.id}`) : ""
        }
        onChange={(event, value) => {
          getCityKey(value);
          setCityName(value);
        }}
        renderInput={(params) => (
          <TextField
            onKeyUp={debounce((e) => setInputValue(e.target.value, e), 2000)}
            type="search"
            label="Search.."
            variant="outlined"
            placeholder="For example.. Tel Aviv"
            {...params}
            InputProps={{
              ...params.InputProps,
            }}
          />
        )}
      />
      <br />
      <InfoCard city={CityName} />
      {/* data={currentCityInfo} */}
    </div>
  );
}
