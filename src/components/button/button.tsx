import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import s from "./button.module.css";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";

type Props = {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "outlined" | "ghost";
  fullWidth?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const Button = forwardRef<ElementRef<"button">, Props>(
  ({ variant = "primary", fullWidth, className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        {...props}
        ref={ref}
        className={clsx(
          s.buttonRoot,
          s[variant],
          fullWidth && s.fullWidth,
          className,
        )}
      />
    );
  },
);
