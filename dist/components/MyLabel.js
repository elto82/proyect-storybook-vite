import { jsx as _jsx } from "react/jsx-runtime";
import "./MyLabel.css";
export const MyLabel = ({ backgroundColor = "transpatent", allCaps = false, color = "text-primary", fontColor, label, size = "normal" }) => {
    return (_jsx("span", { className: ` 
      ${size} ${color}`, style: { color: fontColor, backgroundColor }, children: allCaps ? label.toUpperCase() : label }));
};
