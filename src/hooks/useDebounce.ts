import { useEffect, useState } from "react";

export const useDebounce = (inputValue: any, delay: number) => {
      const [debouncedValue, setDebouncedValue] = useState(inputValue);

      useEffect(() => {
        const handler  = setTimeout(() => {
            setDebouncedValue(inputValue)
        }, delay);

        return () => {
            clearTimeout(handler)
        }
      }, [inputValue, delay]);

      return debouncedValue

}