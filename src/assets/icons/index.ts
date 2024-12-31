import arrowDown from "@/assets/icons/arrow-down.svg";
import check from "@/assets/icons/check.svg";
import chevron from "@/assets/icons/chevron.svg";

export type BasicIconsType = {
  arrow: { [key: string]: string };
  basic: { [key: string]: string };
};

export const BasicIcons: BasicIconsType = {
  arrow: {
    right: chevron,
    down: arrowDown
  },
  basic: {
    check: check
  }
};