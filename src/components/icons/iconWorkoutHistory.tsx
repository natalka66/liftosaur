import { h, JSX } from "preact";

interface IProps {
  style?: { [key: string]: string | number };
  size?: number;
  color?: string;
  className?: string;
}

export function IconWorkoutHistory(props: IProps): JSX.Element {
  const color = props.color || "#130E2F";
  const size = props.size || 24;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 9.5627H21M8 3V6.2423M17 3V6.2423M7 4.5627H18C19.6569 4.5627 21 5.90585 21 7.5627V17.5627C21 19.2196 19.6569 20.5627 18 20.5627H7C5.34315 20.5627 4 19.2196 4 17.5627V7.5627C4 5.90585 5.34315 4.5627 7 4.5627Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
