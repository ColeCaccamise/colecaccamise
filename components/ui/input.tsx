"use client";

import Link from "next/link";
import React, { forwardRef, ForwardedRef } from "react";
import Spinner from "@/components/ui/spinner";

interface InputProps {
  className?: string;
  variant?: string;
  size?: string;
  weight?: string;
  type: string;
  placeholder?: string;
  value?: string;
  name?: string;
  label?: string;
  htmlFor?: string;
  handleChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  link?: string;
  linkText?: string;
  autoFocus?: boolean;
  placeholderStyle?: string;
  loading?: boolean;
  icon?: JSX.Element;
  prefix?: string | JSX.Element;
  required?: boolean;
  disabled?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    className,
    variant,
    size = "text-sm",
    weight = "font-regular",
    type = "text",
    placeholder,
    value,
    name,
    label,
    htmlFor,
    handleChange,
    link,
    linkText,
    autoFocus = false,
    placeholderStyle = "placeholder-low-contrast-text",
    loading,
    icon,
    prefix,
    required,
    disabled,
  },
  ref: ForwardedRef<HTMLInputElement>,
) {
  if (variant == "unstyled") {
    return (
      <input
        disabled={disabled}
        ref={ref}
        value={value}
        type={type}
        placeholder={placeholder}
        name={name}
        id={htmlFor}
        className={`${className} ${size} ${weight} text-high-contrast-text ${placeholderStyle} outline-none`}
        onChange={handleChange}
        autoFocus={autoFocus}
        required={required}
      />
    );
  }

  if (variant == "textarea") {
    if (!handleChange) {
      return null;
    }

    return (
      <textarea
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        name={name}
        id={htmlFor}
        className={`${size} ${weight} transition-effect group flex items-center justify-between overflow-hidden rounded-lg border border-subtle-borders-interactive bg-app-bg p-3 outline-none hover:border-stronger-borders-interactive-focus-rings dark:bg-ui-component-default ${className}`}
        onChange={handleChange}
        autoFocus={autoFocus}
        required={required}
      />
    );
  }

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex justify-between">
        {label && (
          <label htmlFor={htmlFor} className={`text-sm ${weight}`}>
            {label}
          </label>
        )}
        {link && (
          <Link href={link} className="text-sm font-medium" tabIndex={2}>
            {linkText}
          </Link>
        )}
      </div>
      <div
        className={`transition-effect group flex items-center justify-between overflow-hidden rounded-lg border border-subtle-borders-interactive bg-app-bg p-2 pr-4 hover:border-stronger-borders-interactive-focus-rings dark:bg-ui-component-default`}
      >
        <div className="flex w-full">
          {prefix && (
            <div className="select-none border-r border-subtle-borders-interactive bg-ui-component-hover p-2 font-medium group-hover:border-stronger-borders-interactive-focus-rings">
              <span className={`${size} font-medium`}>{prefix}</span>
            </div>
          )}

          <input
            disabled={disabled}
            ref={ref}
            value={value}
            type={type}
            placeholder={placeholder}
            name={name}
            id={htmlFor}
            className={`${className} ${size} ${weight} placeholder-high-contrast-text/50 flex-grow bg-transparent p-2 text-high-contrast-text outline-none`}
            onChange={handleChange}
            autoFocus={autoFocus}
            required={required}
          />
        </div>

        {icon && (
          <div className="flex items-center justify-center">
            {loading ? (
              <span>
                <Spinner variant="light" />
              </span>
            ) : (
              icon
            )}
          </div>
        )}
      </div>
    </div>
  );
});

export default Input;
