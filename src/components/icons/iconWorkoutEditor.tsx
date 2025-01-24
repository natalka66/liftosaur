import { h, JSX } from "preact";

interface IProps {
  style?: { [key: string]: string | number };
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export function IconWorkoutEditor(props: IProps): JSX.Element {
  const color = props.color || "#607284";
  return (
    <svg
      stroke={color}
      width={props.width}
      height={props.height}
      style={props.style}
      className={props.className}
      viewBox="0 0 27 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_51_161)">
        <path
          d="M6.5102 17.3636C4.9886 17.3636 3.7551 16.1426 3.7551 14.6364V13.9057C3.7551 11.9569 2.7049 10.1562 1 9.18188C2.7049 8.20758 3.7551 6.40688 3.7551 4.45808V3.72738C3.7551 2.22118 4.9886 1.00018 6.5102 1.00018"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20 1C21.5216 1 22.7551 2.2211 22.7551 3.7272V4.4579C22.7551 6.4067 23.8053 8.2074 25.5101 9.1817C23.8053 10.156 22.7551 11.9567 22.7551 13.9055V14.6362C22.7551 16.1424 21.5216 17.3634 20 17.3634"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M19.7551 9.18182H20.7551" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10.7549 9.18182H15.7549" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5.75513 9.18182H6.75513" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M8.95513 6.18182H10.7551V12.1818H8.95513C8.29283 12.1818 7.75513 11.6441 7.75513 10.9818V7.38182C7.75513 6.71952 8.29283 6.18182 8.95513 6.18182Z"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.5551 12.1818H15.7551V6.18182H17.5551C18.2174 6.18182 18.7551 6.71952 18.7551 7.38182V10.9818C18.7551 11.6441 18.2174 12.1818 17.5551 12.1818Z"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_51_161">
          <rect width="26.5101" height="18.3636" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
