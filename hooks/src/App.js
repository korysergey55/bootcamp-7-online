import { useContext, useEffect, useReducer, useRef } from "react";

import "./App.css";
import { ThemeContext } from "./context/theme.context";

function geoPositionReducer(state, action) {
  switch (action.type) {
    case "success":
      return {
        ...state,
        loading: false,
        positions: action.payload,
      };
    case "error":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      throw new Error(`Action not Found!`);
  }
}

function useGeoPosition() {
  const ref = useRef(null);
  const [state, dispatch] = useReducer(geoPositionReducer, {
    loading: true,
    positions: null,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      dispatch({ type: "error", payload: "Browser not supported yet!" });
    } else {
      ref.current = navigator.geolocation.watchPosition(
        (position) => {
          dispatch({
            type: "success",
            payload: position.coords,
          });
        },
        (error) =>
          dispatch({
            type: "error",
            payload: error,
          })
      );
    }

    return () => {
      navigator.geolocation.clearWatch(ref.current);
    };
  }, []);

  return state;
}

function App() {
  const { positions, loading } = useGeoPosition();
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h3>Hello</h3>

      <p>{theme === "light" ? <p>Light</p> : <p>Dark</p>}</p>
      <button onClick={() => setTheme("dark")}>
        Dark
      </button>
      <button onClick={() => setTheme("light")}>
        Light
      </button>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <p>
          Longitude: {positions?.longitude} Latitude: {positions?.latitude}
        </p>
      )}
    </div>
  );
}

export default App;
