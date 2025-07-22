import { useEffect, useState } from "react";

export const Study = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      console.log(`I want to change the value: ${value}`);
    }, [value]);

    const handleClick = () => setValue(value + 2);

    return (
      <>
        <p>Study Component</p>
        <button
          style={{
            cursor: "pointer",
            width: 80,
            fontSize: 24,
            backgroundColor: "blue",
            border: 0,
            borderRadius: 4,
          }}
          onClick={() => {
            handleClick();
          }}
        >
          {value}
        </button>
      </>
    );
}