import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        disabled={disabled}
        ref={ref}
        {...props}
        className={twMerge(
          `w-full rounded-full bg-green-500 border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition`,
          className
        )}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
