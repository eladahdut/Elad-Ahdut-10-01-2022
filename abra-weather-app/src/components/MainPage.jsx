import { useEffect, useState } from "react";
import InfoCard from "./InfoCard";
import { debounce } from "lodash";
import { getAutoComplete, getCurrentCondition } from "../API/getApi";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

export default function MainPage() {
  const [inputValue, setInputValue] = useState("");
  const [hideMenu, setHideMenu] = useState(true);
  const inputRef = useRef(null);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const {
    updateAutoComplete,
    updateCurrCondition,
    updateCurrCityKey,
    updateCurrLocation,
  } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    async function fetchCurrentWeather() {
      const condition = await getCurrentCondition(
        state.weatherObject.currCityKey
      );
      updateCurrCondition(condition);
    }
    fetchCurrentWeather();
  }, [state.weatherObject.currCityKey]);

  async function getCityKeyAndName(location) {
    const found = state.weatherObject.autoCompleteLocations.find(
      (item) => item.Key === location.Key
    );
    if (found) {
      updateCurrCityKey(found.Key);
      updateCurrLocation(`${found.LocalizedName}, ${found.Country.ID}`);
    }
  }

  function checkChars(inputValue) {
    setInputValue(inputValue);
    let res = /^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(inputValue);
    if (res || inputValue.length === 0) {
      getAutoComplete(inputValue).then((data) => {
        if (data.length) {
          setHideMenu(false);
        } else {
          setHideMenu(true);
        }
        updateAutoComplete(data);
      });
    } else {
      inputRef.current.value = "";
    }
  }
  return (
    <div
      className="main-page"
      onClick={(e) => {
        e.stopPropagation();
        setHideMenu(true);
      }}>
      <input
        className="user-input"
        placeholder="Search.. For example Tel Aviv"
        ref={inputRef}
        type="text"
        onClick={(e) => {
          e.preventDefault();
          checkChars(inputValue);
        }}
        onInput={debounce((e) => {
          e.preventDefault();
          checkChars(e.target.value);
        }, 2000)}
      />
      {!hideMenu ? (
        <div className="autocomplete-container">
          {state.weatherObject.autoCompleteLocations.map((item, index) => {
            return (
              <span
                className="autocomplete-span"
                onClick={() => {
                  getCityKeyAndName(item);
                  setHideMenu(true);
                }}
                key={index}>{`${item.LocalizedName}, ${item.Country.ID}`}</span>
            );
          })}
        </div>
      ) : (
        <></>
      )}
      <br />
      <InfoCard />
    </div>
  );
}
