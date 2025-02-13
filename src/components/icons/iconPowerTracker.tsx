import { h, JSX } from "preact";
interface IProps {
  style?: { [key: string]: string | number };
  size?: number;
  color?: string;
  className?: string;
}

export function IconPoverTracker(props: IProps): JSX.Element {
  const color = props.color || "#FF543E";
  const size = props.size || 24;

  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 19L20 19" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M2 12.5L5 15L10.5 8.5L14.5 12L20 5.5"
        stroke="#FF543E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
