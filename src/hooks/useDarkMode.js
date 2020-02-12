import {useEffect} from 'react';
import LocalStorage, { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage(enabled);
    useEffect(
        () => {
          localStorage.setItem("value", initialValue);
        },
        [value]
      );
    
      return (
        <div>
          <input
            type="text"
            onChange={e => {
              setValue(e.target.value);
            }}
            value={key}
          />
        </div>
      );
}