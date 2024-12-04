import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div style={{ margin: "20px 0" }}>
      <div
        style={{
          height: "20px",
          width: "100%",
          backgroundColor: "#f3f3f3",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "#4caf50",
            transition: "width 0.3s",
          }}
        ></div>
      </div>
      <span>{Math.round(progress)}% Complete</span>
    </div>
  );
};

export default ProgressBar;
