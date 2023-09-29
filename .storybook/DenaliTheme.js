import { create } from '@storybook/theming/create';

const logo = `<svg width="548" height="142" viewBox="0 0 548 142" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M190.5 96.33C190.5 73.87 202.09 59.74 219.93 59.74C230.28 59.74 238.29 64.88 241.87 72.83H242.26V38.18C242.26 28.42 250.17 20.5 259.94 20.5C260.68 20.5 261.27 21.1 261.27 21.83V130.93C261.27 131.67 260.67 132.26 259.94 132.26H243.86C243.12 132.26 242.53 131.66 242.53 130.93V120.02H242.2C238.68 127.9 230.42 133.11 219.87 133.11C202.03 133.11 190.51 118.92 190.51 96.33H190.5ZM209.96 96.4C209.96 109.55 216.27 117.75 226.17 117.75C236.07 117.75 242.38 109.42 242.38 96.46C242.38 83.5 236 75.11 226.17 75.11C216.34 75.11 209.96 83.38 209.96 96.4Z" fill="#303030"/>
<path d="M336.31 110.39C337.06 110.39 337.61 111.08 337.46 111.81C334.73 124.88 322.07 133.5 305.23 133.5C283.42 133.5 270.08 119.5 270.08 96.72C270.08 73.94 283.49 59.35 304.52 59.35C325.55 59.35 338.31 73.15 338.31 94.96V99.65C338.31 100.3 337.79 100.82 337.14 100.82H290.01C289.36 100.82 288.84 101.34 288.84 101.99C288.84 112.34 295.55 119.31 305.57 119.31C312.42 119.31 317.9 116.21 319.96 111.1C320.13 110.67 320.57 110.4 321.03 110.4H336.32L336.31 110.39ZM290.32 89.04H318.69C319.38 89.04 319.93 88.44 319.86 87.75C319.04 79.11 313.09 73.54 304.71 73.54C296.33 73.54 290.31 79.25 289.16 87.69C289.06 88.4 289.61 89.03 290.33 89.03L290.32 89.04Z" fill="#303030"/>
<path d="M348.36 60.59H364.37C365.02 60.59 365.54 61.11 365.54 61.76V73.41H365.93C370.03 64.36 377.32 59.54 388.32 59.54C404.2 59.54 413.19 69.57 413.19 86.3V131.09C413.19 131.74 412.67 132.26 412.02 132.26H395.35C394.7 132.26 394.18 131.74 394.18 131.09V90.27C394.18 80.77 389.75 75.36 380.77 75.36C371.79 75.36 366.19 81.87 366.19 91.37V131.08C366.19 131.73 365.67 132.25 365.02 132.25H348.35C347.7 132.25 347.18 131.73 347.18 131.08V61.76C347.18 61.11 347.7 60.59 348.35 60.59H348.36Z" fill="#303030"/>
<path d="M420.79 111.63C420.79 98.61 430.75 91.25 449.04 90.15L465.84 89.11C466.46 89.07 466.94 88.56 466.94 87.94V84.29C466.94 77.39 462.19 73.61 454.38 73.61C447.87 73.61 443.21 76.86 441.94 81.6C441.8 82.11 441.34 82.46 440.82 82.46H425.63C424.93 82.46 424.39 81.86 424.46 81.16C425.69 68.19 437.84 59.35 455.17 59.35C473.59 59.35 485.64 68.79 485.64 83.11V131.09C485.64 131.74 485.12 132.26 484.47 132.26H468.46C467.81 132.26 467.29 131.74 467.29 131.09V121.19H466.9C462.99 128.68 454.14 133.1 444.96 133.1C431.16 133.1 420.81 124.44 420.81 111.62L420.79 111.63ZM466.95 105.97V101.95C466.95 101.27 466.37 100.73 465.7 100.78L451.91 101.73C443.97 102.25 439.74 105.38 439.74 110.65C439.74 115.92 444.23 119.24 451.13 119.24C459.92 119.24 466.95 113.77 466.95 105.96V105.97Z" fill="#303030"/>
<path d="M515.08 20.5C515.82 20.5 516.41 21.1 516.41 21.83V130.93C516.41 131.67 515.81 132.26 515.08 132.26H498.74C498 132.26 497.41 131.66 497.41 130.93V38.18C497.41 28.42 505.32 20.5 515.09 20.5H515.08Z" fill="#303030"/>
<path d="M529.69 64.59H546.36C547.01 64.59 547.53 65.11 547.53 65.76V114.43C547.53 124.28 539.54 132.27 529.69 132.27C529.04 132.27 528.52 131.75 528.52 131.1V65.76C528.52 65.11 529.04 64.59 529.69 64.59Z" fill="#303030"/>
<path d="M547.5 49C547.5 43.7533 543.247 39.5 538 39.5C532.753 39.5 528.5 43.7533 528.5 49C528.5 54.2467 532.753 58.5 538 58.5C543.247 58.5 547.5 54.2467 547.5 49Z" fill="#303030"/>
<path d="M56.51 44.33L2.02001 135.95C0.560008 138.4 2.33001 141.5 5.19001 141.5L84.55 141.43C85.85 141.43 87.05 140.75 87.71 139.63L102.38 114.99C103.07 113.84 103.07 112.4 102.38 111.25L62.85 44.34C61.43 41.93 57.94 41.93 56.51 44.34V44.33Z" fill="url(#paint0_linear_2908_7183)"/>
<path d="M101.91 141.39L161.81 141.3C164.65 141.3 166.42 138.22 164.99 135.77L135.29 85.07C133.87 82.65 130.37 82.64 128.94 85.05L98.74 135.84C97.28 138.29 99.06 141.4 101.91 141.39Z" fill="url(#paint1_linear_2908_7183)"/>
<path d="M111.4 100.56L127.02 74.29C127.7 73.14 127.71 71.71 127.03 70.56L87.64 3.31999C86.22 0.899986 82.72 0.889986 81.29 3.29999L65.48 29.92C64.79 31.07 64.79 32.51 65.48 33.66L105.07 100.54C106.49 102.95 109.98 102.95 111.41 100.54L111.4 100.56Z" fill="url(#paint2_linear_2908_7183)"/>
<path d="M56.51 44.33L2.02001 135.95C0.560008 138.4 2.33001 141.5 5.19001 141.5L84.55 141.43C85.85 141.43 87.05 140.75 87.71 139.63L102.38 114.99C103.07 113.84 103.07 112.4 102.38 111.25L62.85 44.34C61.43 41.93 57.94 41.93 56.51 44.34V44.33Z" stroke="url(#paint3_linear_2908_7183)" stroke-miterlimit="10"/>
<path d="M101.91 141.39L161.81 141.3C164.65 141.3 166.42 138.22 164.99 135.77L135.29 85.07C133.87 82.65 130.37 82.64 128.94 85.05L98.74 135.84C97.28 138.29 99.06 141.4 101.91 141.39Z" stroke="url(#paint4_linear_2908_7183)" stroke-miterlimit="10"/>
<path d="M111.4 100.56L127.02 74.29C127.7 73.14 127.71 71.71 127.03 70.56L87.64 3.31999C86.22 0.899986 82.72 0.889986 81.29 3.29999L65.48 29.92C64.79 31.07 64.79 32.51 65.48 33.66L105.07 100.54C106.49 102.95 109.98 102.95 111.41 100.54L111.4 100.56Z" stroke="url(#paint5_linear_2908_7183)" stroke-miterlimit="10"/>
<defs>
<linearGradient id="paint0_linear_2908_7183" x1="22.39" y1="65.35" x2="67.36" y2="156.01" gradientUnits="userSpaceOnUse">
<stop stop-color="#0083EF"/>
<stop offset="1" stop-color="#36B7F2"/>
</linearGradient>
<linearGradient id="paint1_linear_2908_7183" x1="113.91" y1="108.01" x2="140.79" y2="145.38" gradientUnits="userSpaceOnUse">
<stop stop-color="#00B1EA"/>
<stop offset="1" stop-color="#76C5ED"/>
</linearGradient>
<linearGradient id="paint2_linear_2908_7183" x1="77.2" y1="18.95" x2="117.07" y2="88.33" gradientUnits="userSpaceOnUse">
<stop stop-color="#0034E8"/>
<stop offset="1" stop-color="#3570F4"/>
</linearGradient>
<linearGradient id="paint3_linear_2908_7183" x1="1.00001" y1="92.02" x2="103.41" y2="92.02" gradientUnits="userSpaceOnUse">
<stop stop-color="#0083EF"/>
<stop offset="1" stop-color="#36B7F2"/>
</linearGradient>
<linearGradient id="paint4_linear_2908_7183" x1="97.72" y1="112.31" x2="166" y2="112.31" gradientUnits="userSpaceOnUse">
<stop stop-color="#00B1EA"/>
<stop offset="1" stop-color="#76C5ED"/>
</linearGradient>
<linearGradient id="paint5_linear_2908_7183" x1="64.46" y1="51.93" x2="128.04" y2="51.93" gradientUnits="userSpaceOnUse">
<stop stop-color="#0034E8"/>
<stop offset="1" stop-color="#3570F4"/>
</linearGradient>
</defs>
</svg>
`;


export default create({
  base: 'light',
  // Colors
  colorPrimary: '#000',
  colorSecondary: '#1E293B',

  // UI
  appBg: '#fff',
  appContentBg: '#fff',
  appBorderColor: '#E2E8F0',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#000',
  textInverseColor: '#FFFFFF',

  // Toolbar default and active colors
  barTextColor: '#9CA3AF',
  barSelectedColor: '#000000',
  barBg: '#ffffff',
  barSelectedTextColor: '#fff',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#E2E8F0',
  inputTextColor: '#000',
  inputBorderRadius: 4,

  // Band 
  brandTitle: 'Denali',
  brandUrl: '/',
  brandImage: `data:image/svg+xml;base64,${btoa(logo)}`,
});