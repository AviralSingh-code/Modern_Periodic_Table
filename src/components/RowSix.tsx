import React from "react";
import RowBox from "./RowBox";
import Box from "./Box";
import BlankBox from "./BlankBox";
import { RowSixLeftElements, RowSixRightElements } from "@/constant/RowSix";

const RowSix = () => {
  return (
    <div className="flex gap-1.5">
      <RowBox value="6" />
      {RowSixLeftElements.map((elements) => {
        return (
          <Box
            name={elements.name}
            id={elements.id}
            key={elements.id}
            category={elements.category}
            color={elements.color}
          />
        );
      })}
      <BlankBox limit="La-Lu" />
      {RowSixRightElements.map((elements) => {
        return (
          <Box
            name={elements.name}
            category={elements.category}
            color={elements.color}
            id={elements.id}
            key={elements.id}
          />
        );
      })}
    </div>
  );
};

export default RowSix;