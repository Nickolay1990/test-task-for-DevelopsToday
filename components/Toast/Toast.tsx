"use client";

import { useEffect, useState } from "react";
import css from "./Toast.module.css";

interface ToastProps {
  type: "success" | "error";
  time: number;
}

export const Toast = ({ type, time }: ToastProps) => {
  const [isHideToast, setIsHideToast] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsHideToast(true);
      setTimeout(() => {
        setIsMounted(false);
      }, 1000);
    }, time);

    return () => {
      clearTimeout(timerId);
    };
  }, [time]);

  const handleOpenToast = () => {
    setIsHideToast(true);
    setTimeout(() => {
      setIsMounted(false);
    }, 1000);
  };

  return (
    <>
      {isMounted && (
        <div
          className={`${css.wrapper} ${css[type]} ${isHideToast ? css.hidden : ""}`}
        >
          <button className={css.btn} onClick={handleOpenToast}>
            ❌
          </button>
          {type === "success" && <p>Form submitted successfully.</p>}
          {type === "error" && <p>An error occurred, please try again.</p>}
        </div>
      )}
    </>
  );
};
