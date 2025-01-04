import type { Metric } from "web-vitals";
import { onCLS, onFID, onFCP, onLCP, onTTFB } from "web-vitals";

// 반환 타입을 명시적으로 지정
const reportWebVitals = (onPerfEntry?: (metric: Metric) => void): void => {
    // null과 undefined를 명시적으로 체크
    if (
        onPerfEntry !== null &&
        onPerfEntry !== undefined &&
        onPerfEntry instanceof Function
    ) {
        onCLS(onPerfEntry);
        onFID(onPerfEntry);
        onFCP(onPerfEntry);
        onLCP(onPerfEntry);
        onTTFB(onPerfEntry);
    }
};

export default reportWebVitals;
