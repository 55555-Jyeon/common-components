import React from "react";
import clsx from "clsx";
import { type JSX } from "react";
import styles from "./style.module.scss";
import { type ButtonType } from "./type";

/**
 * @component Button 공용 버튼 컴포넌트
 * @description 크기, 간격, 색상을 커스터마이징할 수 있도록 제작
 *
 * @param {Object} props - 공용 버튼 컴포넌트의 속성 객체
 * @param {string} props.label - 버튼에 표시될 텍스트
 * @param {"solidBlue" | "solidBlack" | "outlineBlue" | "outlineBlack" | "lightSolidBlue"} designType - 선택할 수 있는 디자인 타입
 * @param {function} props.onClick - 버튼 클릭 시 호출되는 함수
 * @param {Object} [props.sizes] - 버튼의 크기를 설정하는 객체
 * @param {string} [props.sizes.width] - 버튼의 너비
 * @param {string} [props.sizes.height] - 버튼의 높이
 * @param {Object} [props.spacing] - 버튼의 내부 패딩과 외부 마진을 설정하는 객체
 * @param {string} [props.spacing.padding] - 버튼 내부의 여백
 * @param {string} [props.spacing.margin] - 버튼 외부의 여백
 *
 * @returns {JSX.Element} 스타일이 적용된 버튼 컴포넌트
 */
const Button = ({
    label,
    designType,
    sizes,
    spacing,
    onClick,
    disabled,
}: ButtonType): JSX.Element => {
    // button styles
    const buttonDesignClass = clsx({
        [styles.base]: true,
        [styles.solidBlue]: designType === "solidBlue",
        [styles.solidBlack]: designType === "solidBlack",
        [styles.outlineBlue]: designType === "outlineBlue",
        [styles.outlineBlack]: designType === "outlineBlack",
        [styles.lightSolidBlue]: designType === "lightSolidBlue",
        [styles.disabled]: disabled,
    });

    return (
        <button
            onClick={disabled ? undefined : onClick}
            className={buttonDesignClass}
            style={{
                width: sizes.width,
                height: sizes.height,
                padding: spacing.padding,
                margin: spacing.margin,
            }}
            disabled={disabled}
        >
            {label}
        </button>
    );
};
export default Button;
