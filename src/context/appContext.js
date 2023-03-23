import React, { useEffect, useReducer, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";
import { apiKey, API_ENDPOINT } from "../utils/constants";
import {
  HANDLE_SEARCH,
  DELETE_SINGLE_NEWS,
  DELETE_ALL_NEWS,
  GET_ALL_NEWS,
  SET_CURRENT_NEWS_OBJECT,
  FILTER_BY_SOURCE,
} from "../context/actions";

const initialState = {
  error: { show: true, msg: "" },
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function getNews(text) {
    const q = text;
    try {
      const response = await axios.get(`${API_ENDPOINT}`, {
        params: {
          q,
          apiKey,
        },
      });

      console.log(response.data);
      dispatch({ type: GET_ALL_NEWS, payload: response.data.articles });
    } catch (error) {
      console.error(error);
    }
  }

  async function setCurrentNewsObject(currentNewsObject) {
    console.log(currentNewsObject);
    dispatch({ type: SET_CURRENT_NEWS_OBJECT, payload: currentNewsObject });
  }

  useEffect(() => {
    getNews("bitcoin");
  }, []);

  const handleChange = (text) => {
    dispatch({ type: HANDLE_SEARCH, payload: text });
  };

  const removeNews = (currentObject) => {
    dispatch({ type: DELETE_SINGLE_NEWS, payload: currentObject });
  };

  const filterBySource = (source) => {
    console.log(source);
    dispatch({ type: FILTER_BY_SOURCE, payload: source });
  };

  const deleteAllNews = () => {
    dispatch({ type: DELETE_ALL_NEWS });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,

        handleChange,

        removeNews,
        getNews,
        deleteAllNews,
        setCurrentNewsObject,
        filterBySource,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};
export { AppProvider, initialState, useAppContext };
