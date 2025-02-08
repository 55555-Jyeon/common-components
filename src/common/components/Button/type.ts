export type ButtonListType = {
    label: string;
    designType:
        | "solidBlue"
        | "solidBlack"
        | "outlineBlue"
        | "outlineBlack"
        | "lightSolidBlue";
    onClick: () => void;
};

export type ButtonType = ButtonListType & {
    sizes: {
        width: string;
        height: string;
    };
    spacing: {
        padding: string;
        margin: string;
    };
    disabled: boolean;
};
