import React, { useState, useContext } from "react";
import { Reactivity } from "@/types/ElementTypes";
import { MdContentCopy, MdCheck } from "react-icons/md";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const Reactivity = ({
  electron_affinity,
  electronegativity,
  valence,
  ionization_energy,
}: Reactivity) => {
  const [isCopying, setIsCopying] = useState({
    electron_affinity: false,
    electronegativity: false,
    valence: false,
    ionization_energy: false,
  });
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const handleCopy = (value: string, property: string) => {
    setIsCopying({ ...isCopying, [property]: true });
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setIsCopying({ ...isCopying, [property]: false });
    }, 500);
  };
  return (
    <div
      className={`w-full flex flex-col justify-start items-start p-4 ${
        theme === "dark"
          ? "text-text_primary bg-bg_dark"
          : "bg-bg_light text-text_secondary"
      } shadow-lg rounded-sm`}
    >
      <h1 className="text-xl">Reactivity</h1>
      <div className="flex flex-col w-full justify-start items-start">
        {electron_affinity && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[25%] text-sm">
              Electron Affinity (kJmol<sup>-1</sup>)
            </p>
            <div
              className={`w-[75%] border ${
                theme === "dark"
                  ? "border-text_primary"
                  : "border-text_secondary"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{electron_affinity}</p>
              <button
                onClick={() =>
                  handleCopy(electron_affinity.toString(), "electron_affinity")
                }
              >
                {!isCopying.electron_affinity ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {electronegativity && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[25%] text-sm">
              Electronegativity
            </p>
            <div
              className={`w-[75%] border ${
                theme === "dark"
                  ? "border-text_primary"
                  : "border-text_secondary"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{electronegativity}</p>
              <button
                onClick={() =>
                  handleCopy(electronegativity.toString(), "electronegativity")
                }
              >
                {!isCopying.electronegativity ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {ionization_energy && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[25%] text-sm">
              Ionization Energy (kJmol<sup>-1</sup>)
            </p>
            <div
              className={`w-[75%] border ${
                theme === "dark"
                  ? "border-text_primary"
                  : "border-text_secondary"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{ionization_energy}</p>
              <button
                onClick={() =>
                  handleCopy(ionization_energy.toString(), "ionization_energy")
                }
              >
                {!isCopying.ionization_energy ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[25%] text-sm">Valence</p>
          <div
            className={`w-[75%] border ${
              theme === "dark" ? "border-text_primary" : "border-text_secondary"
            } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
          >
            <p>{valence}</p>
            <button onClick={() => handleCopy(valence.toString(), "valence")}>
              {!isCopying.valence ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reactivity;
