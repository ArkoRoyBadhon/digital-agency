const GradientEffectone = ({ width = 764, height = 661 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 547 1291"
      fill="none"
    >
      <g filter="url(#filter0_f_55_12)">
        <path
          d="M985 645.5C985 833.001 833.001 985 645.5 985C457.999 985 306 833.001 306 645.5C306 457.999 457.999 306 645.5 306C833.001 306 985 457.999 985 645.5Z"
          fill="#8EADD5"
          fillOpacity="0.3"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_55_12"
          x="0"
          y="0"
          width="1291"
          height="1291"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="153"
            result="effect1_foregroundBlur_55_12"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default GradientEffectone;
