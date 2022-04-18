import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="ak-btn">
      {children}
    </button>
  );
};

export default Button;
