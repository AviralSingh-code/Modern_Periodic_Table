import { LanthanideElem } from "../ElementDetails/LanthanideElem";
import { ActinideElem } from "../ElementDetails/ActinideElem";
import { RowOneElem } from "../ElementDetails/RowOneElem";
import { RowTwoElem } from "../ElementDetails/RowTwoElem";
import { RowThreeElem } from "../ElementDetails/RowThreeElem";
import { RowFourElem } from "../ElementDetails/RowFourElem";
import { RowFiveElem } from "../ElementDetails/RowFiveElem";
import { RowSixElem } from "../ElementDetails/RowSixElem";
import { RowSevenElem } from "../ElementDetails/RowSevenElem";

const youngmData: number[] = [];
const labelData: string[] = [];

RowOneElem.forEach((elem) => {
  if (elem.material_properties?.young_modulus) {
    labelData.push(elem.general_properties.symbol);
    youngmData.push(elem.material_properties.young_modulus);
  }
});
RowTwoElem.forEach((elem) => {
  if (elem.material_properties?.young_modulus) {
    labelData.push(elem.general_properties.symbol);
    youngmData.push(elem.material_properties.young_modulus);
  }
});
RowThreeElem.forEach((elem) => {
  if (elem.material_properties?.young_modulus) {
    labelData.push(elem.general_properties.symbol);
    youngmData.push(elem.material_properties.young_modulus);
  }
});
RowFourElem.forEach((elem) => {
  if (elem.material_properties?.young_modulus) {
    labelData.push(elem.general_properties.symbol);
    youngmData.push(elem.material_properties.young_modulus);
  }
});
RowFiveElem.forEach((elem) => {
  if (elem.material_properties?.young_modulus) {
    labelData.push(elem.general_properties.symbol);
    youngmData.push(elem.material_properties.young_modulus);
  }
});
if (RowSixElem[0].material_properties?.young_modulus) {
  labelData.push(RowSixElem[0].general_properties.symbol);
  youngmData.push(RowSixElem[0].material_properties.young_modulus);
}
if (RowSixElem[1].material_properties?.young_modulus) {
  labelData.push(RowSixElem[1].general_properties.symbol);
  youngmData.push(RowSixElem[1].material_properties.young_modulus);
}
LanthanideElem.forEach((elem) => {
  if (elem.material_properties?.young_modulus) {
    labelData.push(elem.general_properties.symbol);
    youngmData.push(elem.material_properties.young_modulus);
  }
});
RowSixElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 72) {
    if (elem.material_properties?.young_modulus) {
      labelData.push(elem.general_properties.symbol);
      youngmData.push(elem.material_properties.young_modulus);
    }
  }
});
if (RowSevenElem[0].material_properties?.young_modulus) {
  labelData.push(RowSevenElem[0].general_properties.symbol);
  youngmData.push(RowSevenElem[0].material_properties.young_modulus);
}
if (RowSevenElem[1].material_properties?.young_modulus) {
  labelData.push(RowSevenElem[1].general_properties.symbol);
  youngmData.push(RowSevenElem[1].material_properties.young_modulus);
}
ActinideElem.forEach((elem) => {
  if (elem.material_properties?.young_modulus) {
    labelData.push(elem.general_properties.symbol);
    youngmData.push(elem.material_properties.young_modulus);
  }
});
RowSevenElem.forEach((elem) => {
  if (elem.general_properties.atomic_number >= 104) {
    if (elem.material_properties?.young_modulus) {
      labelData.push(elem.general_properties.symbol);
      youngmData.push(elem.material_properties.young_modulus);
    }
  }
});

export default labelData;
export { youngmData };
