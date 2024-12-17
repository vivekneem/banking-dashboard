import React from "react";
import { IconProps } from "./types";

interface IconWrapperProps extends IconProps {
  children: React.ReactNode;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  size,
  width,
  height,
  viewBoxWidth,
  viewBoxHeight,
  color = "currentColor",
  className = "",
  children,
}) => {
  // If size is provided, use it for both width and height
  const finalWidth = width || size || 24;
  const finalHeight = height || size || 24;

  // Use provided viewBox dimensions or fallback to width/height
  const viewBoxW = viewBoxWidth || finalWidth;
  const viewBoxH = viewBoxHeight || finalHeight;

  const viewBox = `0 0 ${viewBoxW} ${viewBoxH}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={finalWidth}
      height={finalHeight}
      viewBox={viewBox}
      fill="none"
      stroke={color}
      className={className}
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
};
