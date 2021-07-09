import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";

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

function useAsync(callback, ...args) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const memoCallback = useCallback(
    (...args) => {
      setLoading(true);
      // console.log(args)
      callback(...args)
        .then((data) => setData(data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    },
    [callback]
  );

  const memoArgs = useMemo(() => args.join(","), [args]);

  useEffect(() => {
    memoCallback(memoArgs);
  }, [memoArgs, memoCallback]);

  return {
    loading,
    data,
    error,
  };
}

const fetchData = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );
};

const fetchTodos = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) =>
    res.json()
  );
};

function App() {
  const [post, setPost] = useState(1);
  const [todo, setTodo] = useState(1);
  const refInput = useRef();
  const { positions, loading } = useGeoPosition();
  const { theme, setTheme } = useContext(ThemeContext);
  const { data } = useAsync(fetchData, post);
  const { data: todos } = useAsync(fetchTodos, todo);

  useEffect(() => {
    if (todo > 3) {
      refInput.current.focus();
    }
  }, [todo]);

  return (
    <div>
      <h3>Input</h3>
      <input type="text" ref={refInput} />
      <h3>Hello</h3>
      <button onClick={() => setPost((prevState) => prevState + 1)}>
        New Post
      </button>
      <h3>Post:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h3>Todo:</h3>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
      <button onClick={() => setTodo((prevState) => prevState + 1)}>
        New Todos
      </button>
      <p>{theme === "light" ? <p>Light</p> : <p>Dark</p>}</p>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>
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
