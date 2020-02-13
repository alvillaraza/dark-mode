import { useState, useEffect } from "react";

// BUG: Saves to localStorage, but page does not remember it.

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(
    initialValue

    //   () => {
    //   const item = window.localStorage.setItem(key, initialValue);
    //   return item ? JSON.parse(item) : initialValue;
    // }
  );

  // const setStoredValue = initialValue => {
  //   // setStoredValue(value);
  //   // window.localStorage.setItem(key, JSON.stringify(value));
  // };

  return [storedValue, setStoredValue];
};
