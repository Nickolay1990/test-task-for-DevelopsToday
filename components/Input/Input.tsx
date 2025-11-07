"use client";

import { ChangeEvent, useState } from "react";
import css from "./Input.module.css";

interface InputProps {
  placeholder: string;
  clearable?: boolean;
  type: "number" | "text" | "password";
}

export const Input = ({ type, placeholder, clearable }: InputProps) => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string | number>("");

  const handleShowText = () => {
    setIsShow(!isShow);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const handleClearText = () => {
    setInputValue("");
  };

  return (
    <div className={css.wrapper}>
      <input
        type={!isShow ? "text" : type}
        className={`${css.field} ${type === "password" ? css.pass : css.text}`}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      {type === `password` && (
        <button className={`${css.eye} ${css.btn}`} onClick={handleShowText}>
          {isShow && inputValue ? "👁️" : "👁️‍🗨️"}
        </button>
      )}
      {clearable && (
        <button
          className={`${css.clear} ${css.btn} ${type === "password" && css.clearWithEye}`}
          onClick={handleClearText}
        >
          ❌
        </button>
      )}
    </div>
  );
};
