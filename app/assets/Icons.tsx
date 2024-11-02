import { FC } from "react";

interface StrokeIconProps {
  fill?: string;
  size?: number;
  color?: string;
  rotate?: number;
}

export const ArrowIcon:FC<StrokeIconProps> = ({size="20", fill="none", color="currentColor", rotate="0"}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      style={{transform: `rotate(${rotate}deg)`}}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-arrow-right group-hover:rotate-90 transition-transform"
    >
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  );
};


export const SquareArrowOutUpRight:FC<StrokeIconProps> = ({size="20", fill="none", color="currentColor"}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size}
      viewBox="0 0 24 24" 
      fill={fill}
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="lucide lucide-square-arrow-out-up-right"
    >
      <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path>
      <path d="m21 3-9 9"></path>
      <path d="M15 3h6v6"></path>
    </svg>
  );
}

export const DownloadIcon:FC<StrokeIconProps> = ({size="20", fill="none", color="currentColor"}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size}
      viewBox="0 0 24 24" 
      fill={fill}
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="lucide lucide-arrow-down-to-line"
    >
      <path d="M12 17V3"/>
      <path d="m6 11 6 6 6-6"/>
      <path d="M19 21H5"/>
    </svg>
  );
};