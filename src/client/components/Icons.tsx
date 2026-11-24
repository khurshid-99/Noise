interface IconStyle {
  className?: string;
}

export const ShadowIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="145"
      height="17"
      viewBox="0 0 145 17"
      fill="none"
      className={`podium ${className}`}
    >
      <g opacity="0.66" filter="url(#filter0_f_2177_1138)">
        <ellipse
          cx="72.5778"
          cy="8.9021"
          rx="68.4038"
          ry="3.92481"
          fill="url(#paint0_radial_2177_1138)"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter0_f_2177_1138"
          x="0.174072"
          y="0.977295"
          width="144.808"
          height="15.8496"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="2"
            result="effect1_foregroundBlur_2177_1138"
          ></feGaussianBlur>
        </filter>
        <radialGradient
          id="paint0_radial_2177_1138"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(72.5778 8.9021) scale(68.4038 3.92481)"
        >
          <stop></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

export const Star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 8 8"
      fill="none"
    >
      <path
        d="M4.43638 0.264471C4.39643 0.185145 4.33435 0.1183 4.25721 0.0715445C4.18006 0.0247887 4.09094 0 4 0C3.90906 0 3.81994 0.0247887 3.74279 0.0715445C3.66565 0.1183 3.60357 0.185145 3.56362 0.264471L2.58991 2.2108L0.413641 2.5223C0.324527 2.53511 0.240855 2.57178 0.172017 2.6282C0.103179 2.68462 0.0518998 2.75855 0.0239373 2.84169C-0.00402531 2.92484 -0.00756482 3.0139 0.013716 3.09889C0.0349969 3.18388 0.0802557 3.26143 0.144412 3.32283L1.72277 4.84003L1.34921 6.98458C1.3341 7.07152 1.34438 7.16082 1.37889 7.24237C1.41341 7.32391 1.47078 7.39443 1.54448 7.44592C1.61819 7.49741 1.70529 7.52781 1.79589 7.53367C1.88649 7.53952 1.97697 7.52061 2.05706 7.47906L4.00112 6.47159L5.94855 7.47797C6.02864 7.51952 6.11912 7.53843 6.20972 7.53258C6.30032 7.52672 6.38742 7.49632 6.46113 7.44483C6.53483 7.39334 6.5922 7.32282 6.62672 7.24128C6.66123 7.15973 6.67151 7.07043 6.6564 6.9835L6.27948 4.84003L7.85559 3.32392C7.91974 3.26252 7.965 3.18497 7.98628 3.09998C8.00756 3.01499 8.00403 2.92593 7.97606 2.84278C7.9481 2.75964 7.89682 2.68571 7.82798 2.62929C7.75915 2.57287 7.67547 2.5362 7.58636 2.52339L5.41121 2.2108L4.43638 0.264471Z"
        fill="#FFAA00"
        stroke="none"
        strokeWidth="0"
      ></path>
    </svg>
  );
};

export const LoveIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="none"
        stroke="#000000"
        strokeWidth={1.5}
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      ></path>
    </svg>
  );
};

export const ArrowRight = ({ className }: IconStyle) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 13"
      className={`${className} `}
    >
      <path
        fill="currentColor"
        d="M0.935303 5.60455C0.500089 5.60455 0.147278 5.95736 0.147278 6.39258C0.147278 6.82779 0.500089 7.1806 0.935303 7.1806V6.39258V5.60455ZM23.5572 6.9498C23.865 6.64205 23.865 6.1431 23.5572 5.83536L18.5423 0.8204C18.2345 0.512657 17.7356 0.512657 17.4278 0.8204C17.1201 1.12814 17.1201 1.62709 17.4278 1.93484L21.8856 6.39258L17.4278 10.8503C17.1201 11.1581 17.1201 11.657 17.4278 11.9648C17.7356 12.2725 18.2345 12.2725 18.5423 11.9648L23.5572 6.9498ZM0.935303 6.39258V7.1806H23V6.39258V5.60455H0.935303V6.39258Z"
      />
    </svg>
  );
};

export const DownArrow = () => {
  return (
    <svg
      className="site-footer__chevron"
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export const InstaIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.64.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.22-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85 0-3.2.01-3.58.07-4.85.15-3.23 1.66-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.85a1.44 1.44 0 1 0 0 2.89 1.44 1.44 0 0 0 0-2.89Z"></path>
    </svg>
  );
};

export const FacebookIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2C11.54 2 9.68 3.66 9.68 6.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.02.28-1.73 1.76-1.73Z"></path>
    </svg>
  );
};

export const YoutubeIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.54 12 3.54 12 3.54s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z"></path>
    </svg>
  );
};

export const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M18.3422 18.3422L14.4029 14.3959M16.5859 9.12182C16.5859 13.2441 13.2441 16.5859 9.12182 16.5859C4.99951 16.5859 1.65772 13.2441 1.65771 9.12182C1.65771 4.99951 4.99951 1.65771 9.12182 1.65771C13.2441 1.65771 16.5859 4.99951 16.5859 9.12182Z"
        stroke="#fff"
        strokeWidth={1.8}
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

export const AccountIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10.0007 9.99984C12.3018 9.99984 14.1673 8.13436 14.1673 5.83317C14.1673 3.53198 12.3018 1.6665 10.0007 1.6665C7.69946 1.6665 5.83398 3.53198 5.83398 5.83317C5.83398 8.13436 7.69946 9.99984 10.0007 9.99984Z"
        stroke="white"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M17.1585 18.3333C17.1585 15.1083 13.9501 12.5 10.0001 12.5C6.05013 12.5 2.8418 15.1083 2.8418 18.3333"
        stroke="white"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export const CartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M6.32373 6.75317H20.0286C20.5901 6.75317 21.1254 6.99071 21.5023 7.40707C21.8791 7.8235 22.0622 8.37983 22.0063 8.9386L21.41 14.9016C21.3084 15.9176 20.4534 16.6914 19.4323 16.6914H9.94126C8.9934 16.6918 8.17716 16.0228 7.99137 15.0934L6.32373 6.75317Z"
        stroke="white"
        strokeWidth="1.8"
        strokeLinejoin="round"
      ></path>
      <path
        d="M6.32364 6.75314L5.51865 3.53016C5.40787 3.08797 5.01048 2.77784 4.55463 2.77783H3.34216M9.30513 20.6667H11.2928M17.2557 20.6667H19.2434"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
