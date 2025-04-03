"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { InputProps } from "@/types";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({
  wrapperClassName = "",
  inputClassName = "",
  prefixClassName = "",
  prefixComponent,
  label = "",
  labelClassName = "",
  errorClassName = "",
  error = "",
  ...props
}: InputProps) => {
  const { type } = props;
  const isPassword = type === "password";
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("focus", () => {
        wrapperRef.current?.classList.add(styles.focus);
      });
      inputRef.current.addEventListener("focusout", () => {
        wrapperRef.current?.classList.remove(styles.focus);
      });
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener("focus", () => {});
        inputRef.current.removeEventListener("focusout", () => {});
      }
    };
  }, []);

  return (
    <div className={`${wrapperClassName}`}>
      {label && (
        <div className={`pl-5 mb-2 text-sm ${labelClassName}`}>{label}</div>
      )}
      <div
        ref={wrapperRef}
        className={`min-h-[50px] border-2 border-white/70 px-4 rounded-full flex items-center transition-all`}
      >
        {prefixComponent && (
          <div
            className={`mr-3 pr-3 border-r-2 border-white/70 ${prefixClassName}`}
          >
            {prefixComponent}
          </div>
        )}
        <input
          ref={inputRef}
          className="grow hover:border-none hover:outline-none focus:border-none focus:outline-none autofill:!bg-transparent min-w-0"
          {...props}
          type={type !== "password" ? type : show ? "text" : "password"}
        />
        {isPassword && (
          <div className={`abosolute right-4 cursor-pointer`}>
            {show ? (
              <FaRegEye
                className="w-6 h-6 text-white/70 transition-all"
                onClick={() => setShow(false)}
              />
            ) : (
              <FaRegEyeSlash
                className="w-6 h-6 text-white/70 transition-all"
                onClick={() => setShow(true)}
              />
            )}
          </div>
        )}
      </div>
      {error && (
        <div className={`pl-5 mt-2 text-sm text-[#ff6d6d] ${errorClassName}`}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
