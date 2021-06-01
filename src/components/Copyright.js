import React from "react";
import { FaCopyright } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Copyright() {
  const { selectedTheme } = useSelector((state) => state.ThemeReducer);
  return (
    <div>
      <p>
        <FaCopyright
          style={{ height: "1.25rem", width: "1.25rem" }}
          fill={selectedTheme.buttonColor}
        />
        <span
          style={{
            position: "relative",
            bottom: "4px",
            marginLeft: "10px",
            fontSize: "1rem",
            color: `${selectedTheme.secondaryColor}`,
          }}
        >
          2021 Huy Nguyen
        </span>
      </p>
    </div>
  );
}
