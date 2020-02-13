import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(
    initialValue
    //   () => {
    //   const item = window.localStorage.setItem(key, initialValue);
    //   return item ? JSON.parse(item) : initialValue;
    // }
  );
  useEffect(() => {
    
  })
  console.log(storedValue)
  window.localStorage.setItem(key, initialValue);

  // const setStoredValue = initialValue => {
  //   // setStoredValue(value);
  //   // window.localStorage.setItem(key, JSON.stringify(value));
  // };

  return [storedValue, setStoredValue];
};

