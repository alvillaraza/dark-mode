import { useState } from "react";



export const useLocalStorage = (key, initialValue) => {
  const item = JSON.parse(window.localStorage.getItem(key));
  const [storedValue, setStoredValue] = useState(item || initialValue);
  // setStoredValue(true)

  //stores the value in localStorage
  const setValue = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value))
    //set the state
    setStoredValue(value);
  }

  return [storedValue, setValue];
};
