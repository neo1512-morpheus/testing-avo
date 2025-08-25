import React, { CSSProperties } from "react";
import { cn } from "../../lib/utils";

export interface OrderNowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

const OrderNowButton = React.forwardRef<HTMLButtonElement, OrderNowButtonProps>(
  (
    {
      shimmerColor = "#34D399", // A vibrant green for the shimmer
      shimmerSize = "0.1em",
      shimmerDuration = "4s",
      borderRadius = "100px",
      background = "#1F2937", // A dark charcoal background
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          "group relative z-10 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-8 py-4 text-white [background:var(--bg)] [border-radius:var(--radius)]",
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className={cn("-z-30 blur-[2px]", "absolute inset-0 overflow-visible [container-type:size]")}>
          <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
            <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
          </div>
        </div>
        {children}
        <div className={cn("insert-0 absolute size-full", "rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]", "transform-gpu transition-all duration-300 ease-in-out", "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]", "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]")} />
        <div className={cn("absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]")} />
      </button>
    );
  },
);

OrderNowButton.displayName = "OrderNowButton";
export { OrderNowButton };