import React, { useContext } from "react";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const Two = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[-6px] left-[calc(50%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[-6px] left-[calc(50%_-_6px)]`}
      ></span>
    </>
  );
};

export default Two;
