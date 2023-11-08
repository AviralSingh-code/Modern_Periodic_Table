import React, { useState, useContext } from "react";
import Link from "next/link";
import { AtomicProperties } from "@/types/ElementTypes";
import DOMPurify from "dompurify";
import { MdContentCopy, MdCheck } from "react-icons/md";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import ListBox from "../ListBox";

const AtomicProperty = ({
  atomic_weight,
  oxidation_states,
  electron_shell_configuration,
  electron_configuration,
  gas_atom_multiplicities,
  atomic_radius,
  covalent_radius,
  van_der_walls_radius,
  crystall_structure,
}: AtomicProperties) => {
  const [isCopying, setIsCopying] = useState({
    atomic_weight: false,
    oxidation_states: false,
    electron_shell_configuration: false,
    electron_configuration: false,
    gas_atom_multiplicities: false,
    atomic_radius: false,
    covalent_radius: false,
    van_der_walls_radius: false,
    crystall_structure: false,
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
      <h1 className="text-xl">Atomic Properties</h1>
      <div className="flex flex-col w-full justify-start items-start gap-3 mt-3">
        <div className="flex flex-row justify-start items-center w-full gap-2">
          <Link
            className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm"
            href="https://en.wikipedia.org/wiki/Standard_atomic_weight"
          >
            Atomic Weight
          </Link>
          <div
            className={`w-[55%] ${
              theme === "dark"
                ? "bg-bg_dark_placeholder"
                : "bg-bg_light_placeholder"
            } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
          >
            <p>{atomic_weight}</p>
            <button
              onClick={() =>
                handleCopy(atomic_weight.toString(), "atomic_weight")
              }
            >
              {!isCopying.atomic_weight ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
          <div
            className={`w-[20%] px-2 py-2 text-sm rounded-[4px] ${
              theme === "dark"
                ? "bg-bg_dark_placeholder"
                : "bg-bg_light_placeholder"
            }`}
          >
            amu
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-2">
          <Link
            className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm"
            href="https://en.wikipedia.org/wiki/Electron_shell"
          >
            Electron Shell Configuration
          </Link>
          <div
            className={`w-[75%] ${
              theme === "dark"
                ? "bg-bg_dark_placeholder"
                : "bg-bg_light_placeholder"
            } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
          >
            <p>{electron_shell_configuration}</p>
            <button
              onClick={() =>
                handleCopy(
                  electron_shell_configuration.toString(),
                  "electron_shell_configuration"
                )
              }
            >
              {!isCopying.electron_shell_configuration ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-start w-full gap-2">
          <Link
            className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm"
            href="https://en.wikipedia.org/wiki/Electron_shell"
          >
            Electron Configuration
          </Link>
          <div
            className={`w-[75%] ${
              theme === "dark"
                ? "bg-bg_dark_placeholder"
                : "bg-bg_light_placeholder"
            } px-2 py-1 rounded-[4px] flex justify-between items-center`}
          >
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(electron_configuration),
              }}
            ></p>
            <button
              onClick={() =>
                handleCopy(
                  electron_configuration.toString(),
                  "electron_configuration"
                )
              }
            >
              {!isCopying.electron_configuration ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
        {gas_atom_multiplicities && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <p className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm">
              Gas Atomic Multiplicities
            </p>
            <div
              className={`w-[75%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{gas_atom_multiplicities}</p>
              <button
                onClick={() =>
                  handleCopy(
                    gas_atom_multiplicities.toString(),
                    "gas_atom_multiplicities"
                  )
                }
              >
                {!isCopying.gas_atom_multiplicities ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {atomic_radius && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className="pr-2 py-1 rounded-[4px] w-[25%] text-sm"
              href="https://en.wikipedia.org/wiki/Atomic_radius"
            >
              Atomic Radius
            </Link>
            <div
              className={`w-[55%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{atomic_radius}</p>
              <button
                onClick={() =>
                  handleCopy(atomic_radius.toString(), "atomic_radius")
                }
              >
                {!isCopying.atomic_radius ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <div
              className={`w-[20%] px-2 py-2 text-sm rounded-[4px] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              }`}
            >
              Pm (10<sup>-12</sup>m)
            </div>
          </div>
        )}
        {covalent_radius && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm"
              href="https://en.wikipedia.org/wiki/Covalent_radius"
            >
              Covalent Radius
            </Link>
            <div
              className={`w-[55%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{covalent_radius}</p>
              <button
                onClick={() =>
                  handleCopy(covalent_radius.toString(), "covalent_radius")
                }
              >
                {!isCopying.covalent_radius ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <div
              className={`w-[20%] px-2 py-2 text-sm rounded-[4px] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              }`}
            >
              Pm (10<sup>-12</sup>m)
            </div>
          </div>
        )}
        {van_der_walls_radius && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm"
              href="https://en.wikipedia.org/wiki/Van_der_Waals_radius"
            >
              Van Der Walls Radius
            </Link>
            <div
              className={`w-[55%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{van_der_walls_radius}</p>
              <button
                onClick={() =>
                  handleCopy(
                    van_der_walls_radius.toString(),
                    "van_der_walls_radius"
                  )
                }
              >
                {!isCopying.van_der_walls_radius ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
            <div
              className={`w-[20%] px-2 py-2 text-sm rounded-[4px] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              }`}
            >
              Pm (10<sup>-12</sup>m)
            </div>
          </div>
        )}
        {crystall_structure && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm"
              href="https://en.wikipedia.org/wiki/Crystal_structure"
            >
              Crystall Structure
            </Link>
            <div
              className={`w-[75%] ${
                theme === "dark"
                  ? "bg-bg_dark_placeholder"
                  : "bg-bg_light_placeholder"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{crystall_structure}</p>
              <button
                onClick={() =>
                  handleCopy(
                    crystall_structure.toString(),
                    "crystall_structure"
                  )
                }
              >
                {!isCopying.crystall_structure ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {oxidation_states && (
          <div className="flex flex-row justify-start items-center w-full gap-2">
            <Link
              className=" pr-2 py-1 rounded-[4px] w-[25%] text-sm"
              href="https://en.wikipedia.org/wiki/Oxidation_state"
            >
              Oxidation States
            </Link>
            <div className="w-[75%] py-1 flex justify-start items-center select-none">
              {oxidation_states.map((state) => {
                return (
                  <p
                    className={`mr-2 h-[30px] w-[30px] flex justify-center items-center ${
                      theme === "dark"
                        ? "bg-bg_dark_placeholder"
                        : "bg-bg_light_placeholder"
                    } rounded-full text-sm`}
                    key={state}
                  >
                    {state}
                  </p>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AtomicProperty;
