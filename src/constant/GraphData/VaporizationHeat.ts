import { LanthanideElem } from "../ElementDetails/LanthanideElem";
import { ActinideElem } from "../ElementDetails/ActinideElem";
import { RowOneElem } from "../ElementDetails/RowOneElem";
import { RowTwoElem } from "../ElementDetails/RowTwoElem";
import { RowThreeElem } from "../ElementDetails/RowThreeElem";
import { RowFourElem } from "../ElementDetails/RowFourElem";
import { RowFiveElem } from "../ElementDetails/RowFiveElem";
import { RowSixElem } from "../ElementDetails/RowSixElem";
import { RowSevenElem } from "../ElementDetails/RowSevenElem";

const vhData: number[] = [];
const labelData: string[] = [];

RowOneElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.vaporization_heat) {
    labelData.push(elem.general_properties.symbol);
    vhData.push(elem.thermodynamic_properties.vaporization_heat);
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.vaporization_heat) {
    labelData.push(elem.general_properties.symbol);
    vhData.push(elem.thermodynamic_properties.vaporization_heat);
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.vaporization_heat) {
    labelData.push(elem.general_properties.symbol);
    vhData.push(elem.thermodynamic_properties.vaporization_heat);
  }
});
RowFourElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.vaporization_heat) {
    labelData.push(elem.general_properties.symbol);
    vhData.push(elem.thermodynamic_properties.vaporization_heat);
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.vaporization_heat) {
    labelData.push(elem.general_properties.symbol);
    vhData.push(elem.thermodynamic_properties.vaporization_heat);
  }
});
if (RowSixElem[0].thermodynamic_properties?.vaporization_heat) {
  labelData.push(RowSixElem[0].general_properties.symbol);
  vhData.push(RowSixElem[0].thermodynamic_properties.vaporization_heat);
}
if (RowSixElem[1].thermodynamic_properties?.vaporization_heat) {
  labelData.push(RowSixElem[1].general_properties.symbol);
  vhData.push(RowSixElem[1].thermodynamic_properties.vaporization_heat);
}
LanthanideElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.vaporization_heat) {
    labelData.push(elem.general_properties.symbol);
    vhData.push(elem.thermodynamic_properties.vaporization_heat);
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.thermodynamic_properties?.vaporization_heat) {
      labelData.push(elem.general_properties.symbol);
      vhData.push(elem.thermodynamic_properties.vaporization_heat);
    }
  }
});
if (RowSevenElem[0].thermodynamic_properties?.vaporization_heat) {
  labelData.push(RowSevenElem[0].general_properties.symbol);
  vhData.push(RowSevenElem[0].thermodynamic_properties.vaporization_heat);
}
if (RowSevenElem[1].thermodynamic_properties?.vaporization_heat) {
  labelData.push(RowSevenElem[1].general_properties.symbol);
  vhData.push(RowSevenElem[1].thermodynamic_properties.vaporization_heat);
}
ActinideElem.forEach((elem) => {
  if (elem.thermodynamic_properties?.vaporization_heat) {
    labelData.push(elem.general_properties.symbol);
    vhData.push(elem.thermodynamic_properties.vaporization_heat);
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.thermodynamic_properties?.vaporization_heat) {
      labelData.push(elem.general_properties.symbol);
      vhData.push(elem.thermodynamic_properties.vaporization_heat);
    }
  }
});

export default labelData;
export { vhData };
