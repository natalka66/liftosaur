import { h, JSX } from "preact";

interface IIconWProps {
  style?: { [key: string]: string | number };
  size?: number;
  color?: string;
  className?: string;
}

export function IconWorkoutProgress(props: IIconWProps): JSX.Element {
  const color = props.color || "#3C5063";
  const size = props.size || 24;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_19_81)">
        <rect width="24" height="24" fill="white" />
        <g clip-path="url(#clip1_19_81)">
          <path
            d="M5.47155 11.2417L12.0426 17.8127L10.6194 19.2359C10.2764 19.579 9.73012 19.5889 9.39933 19.2581L4.02617 13.8849C3.69538 13.5542 3.70531 13.0079 4.04835 12.6649L5.47155 11.2417Z"
            stroke={color}
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M4.74143 14.6002L8.68407 18.5428L7.26087 19.966C6.91784 20.3091 6.37157 20.319 6.04079 19.9882L3.29605 17.2435C2.96526 16.9127 2.9752 16.3664 3.31823 16.0234L4.74143 14.6002Z"
            stroke={color}
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M12.8849 5.02617L18.2581 10.3993C18.5889 10.7301 18.579 11.2764 18.2359 11.6194L16.8127 13.0426L10.2417 6.47155L11.6648 5.04835C12.0079 4.70531 12.5542 4.69538 12.8849 5.02617Z"
            stroke={color}
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M16.2435 4.29605L18.9882 7.04079C19.319 7.37157 19.3091 7.91784 18.966 8.26088L17.5428 9.68407L13.6002 5.74143L15.0234 4.31823C15.3664 3.9752 15.9127 3.96526 16.2435 4.29605Z"
            stroke={color}
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M17.9334 5.35086L19.6602 3.62409"
            stroke={color}
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M8.84076 14.4435L13.0314 10.2529"
            stroke={color}
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M2.62408 20.6602L4.50685 18.7774"
            stroke={color}
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
        </g>
        <path
          d="M17.1592 20.1927L15.609 18.6408C15.4363 18.4678 15.1616 18.4678 14.9889 18.6408C14.8162 18.8137 14.8162 19.0886 14.9889 19.2615L16.8447 21.1194C17.0175 21.2923 17.2965 21.2923 17.4692 21.1194L22.1641 16.4238C22.3369 16.2508 22.3369 15.9759 22.1641 15.803C21.9914 15.6301 21.7168 15.6301 21.544 15.803L17.1592 20.1927Z"
          fill="#FF543E"
          stroke={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_19_81">
          <rect width={size} height={size} fill="white" />
        </clipPath>
        <clipPath id="clip1_19_81">
          <rect width="26.0201" height="11.1515" fill="white" transform="translate(-2 17.399) rotate(-45)" />
        </clipPath>
      </defs>
    </svg>
  );
}
