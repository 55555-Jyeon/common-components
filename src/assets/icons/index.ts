import arrowDown from "@/assets/icons/arrow-down.svg";
import check from "@/assets/icons/check.svg";
import chevron from "@/assets/icons/chevron.svg";

export type BasicIconsType = {
    arrow: Record<string, string>;
    basic: Record<string, string>;
};

export const BasicIcons: BasicIconsType = {
    arrow: {
        right: chevron,
        down: arrowDown,
    },
    basic: {
        check,
    },
};
