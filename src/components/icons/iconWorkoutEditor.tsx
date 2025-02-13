import { h, JSX } from "preact";

interface IProps {
  style?: { [key: string]: string | number };
  size?: number;
  color?: string;
  className?: string;
}

export function IconWorkoutEditor(props: IProps): JSX.Element {
  const color = props.color || "#607284";
  const size = props.size || 24;
  return (
    <svg
      width={size}
      height={size}
      style={props.style}
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.94588 19C4.58011 19 3.47294 17.9554 3.47294 16.6667V16.0416C3.47294 14.3743 2.53029 12.8337 1 12.0001C2.53029 11.1665 3.47294 9.62591 3.47294 7.9586V7.33345C3.47294 6.04481 4.58011 5.00017 5.94588 5.00017M18.0542 5C19.42 5 20.5272 6.04472 20.5272 7.33328V7.95843C20.5272 9.62574 21.4698 11.1663 23 11.9999C21.4698 12.8335 20.5272 14.3741 20.5272 16.0414V16.6666C20.5272 17.9552 19.42 18.9998 18.0542 18.9998M17.8344 12H18.732M9.75604 12H14.244M5.2682 12H6.16578M8.14047 9.43333H9.75613V14.5667H8.14047C7.546 14.5667 7.06337 14.1066 7.06337 13.54V10.46C7.06337 9.89336 7.546 9.43333 8.14047 9.43333ZM15.8597 14.5667H14.2441V9.43333H15.8597C16.4542 9.43333 16.9368 9.89336 16.9368 10.46V13.54C16.9368 14.1066 16.4542 14.5667 15.8597 14.5667Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
