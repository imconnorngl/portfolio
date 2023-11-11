import { useEffect, useState } from "react";

export const useRandomNumber = (initialNum: string) => {
  const [num, setNum] = useState(initialNum);

  useEffect(() => {
    let count = 0;

    const interval = setInterval(() => {
      count++;

      const newNum = Array.from({ length: initialNum.length }, () =>
        Math.floor(Math.random() * 10),
      ).join("");

      setNum(newNum);

      if (count === 20) {
        clearInterval(interval);
        setNum(initialNum);
      }
    }, 80);

    return () => {
      clearInterval(interval);
    };
  }, [initialNum]);

  return num;
};
