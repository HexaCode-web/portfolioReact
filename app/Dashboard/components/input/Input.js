import React, { useEffect } from "react";
import "./input.css";
const Input = ({
  label,
  type,
  customClass,
  value,
  onChangeFunction,
  required,
  name,
}) => {
  useEffect(() => {
    const input = document.getElementById(name);
    const label = document.querySelector(`label[for=${name}]`);

    const handleFocus = () => {
      label.classList.add("focused-label");
    };

    const handleBlur = () => {
      if (input.value === "") {
        label.classList.remove("focused-label");
      }
    };

    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);

    // Cleanup the event listeners when the component unmounts
    return () => {
      input.removeEventListener("focus", handleFocus);
      input.removeEventListener("blur", handleBlur);
    };

    // Include input and label in the dependency array
  }, []);
  return (
    <div className="form-group">
      <input
        type={type}
        className={`${customClass ? customClass : ""} input-lg`}
        value={value}
        name={name}
        id={name}
        required={required}
        onChange={onChangeFunction}
      />
      <label className="label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default Input;
