import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 591 591" {...props}>
      <g id="#1d99ccff">
        <path
          fill="#1d99cc"
          opacity="1.00"
          d=" M 270.58 36.82 C 303.33 34.11 336.65 37.36 368.06 47.16 C 418.92 62.77 464.48 94.97 496.28 137.62 C 521.80 171.49 538.55 211.89 544.44 253.88 C 550.61 297.12 545.58 341.96 529.60 382.63 C 515.11 419.78 491.63 453.38 461.84 479.87 C 435.41 503.47 403.96 521.41 370.21 532.18 C 326.30 546.19 278.58 547.86 233.75 537.24 C 195.02 528.07 158.58 509.52 128.29 483.72 C 82.67 445.16 51.35 390.05 42.00 331.02 C 34.91 287.19 39.30 241.48 55.11 199.96 C 71.52 156.40 100.29 117.62 137.09 89.14 C 175.31 59.33 222.27 40.90 270.58 36.82 M 385.72 180.98 L 385.75 181.22 C 383.92 182.68 381.89 184.40 381.85 186.96 C 381.43 196.15 382.12 205.39 381.53 214.58 C 377.63 214.49 373.74 214.48 369.84 214.50 C 365.18 214.51 360.52 214.48 355.86 214.50 C 350.83 214.51 345.80 214.48 340.78 214.50 C 328.20 214.51 315.61 214.49 303.03 214.50 C 290.10 214.50 277.16 214.50 264.23 214.50 C 256.23 214.47 248.23 214.53 240.23 214.50 C 232.26 214.46 224.28 214.53 216.31 214.49 C 210.82 214.45 205.33 214.55 199.84 214.50 C 194.81 214.46 189.78 214.53 184.75 214.51 C 177.91 214.70 169.81 213.03 164.42 218.41 C 157.48 224.27 158.20 236.28 165.59 241.45 C 171.07 245.70 178.37 243.91 184.76 244.24 C 189.93 244.23 195.09 244.27 200.26 244.25 C 205.61 244.23 210.96 244.27 216.31 244.25 C 224.29 244.24 232.27 244.27 240.25 244.25 C 248.24 244.24 256.23 244.27 264.22 244.25 C 277.17 244.25 290.11 244.25 303.06 244.25 C 315.63 244.26 328.21 244.24 340.79 244.25 C 345.80 244.26 350.82 244.24 355.83 244.25 C 360.51 244.26 365.19 244.24 369.87 244.25 C 373.75 244.28 377.64 244.26 381.52 244.16 C 382.15 253.41 381.40 262.70 381.86 271.95 C 381.85 274.45 383.88 276.05 385.64 277.48 L 385.59 277.87 C 388.09 278.08 390.94 278.84 393.13 277.15 C 396.47 274.60 399.11 271.28 402.16 268.40 C 405.28 265.42 408.27 262.31 411.33 259.27 C 419.52 251.12 427.68 242.96 435.83 234.77 C 438.88 232.06 438.95 226.81 435.92 224.06 C 427.78 215.90 419.64 207.75 411.47 199.62 C 408.44 196.60 405.46 193.53 402.39 190.57 C 399.32 187.66 396.61 184.36 393.32 181.71 C 391.10 180.05 388.24 180.55 385.72 180.98 M 189.06 303.55 C 185.68 306.91 182.33 310.31 178.97 313.70 C 169.37 323.22 159.81 332.78 150.29 342.37 C 147.33 345.09 146.93 350.21 149.93 353.04 C 159.62 362.78 169.34 372.48 179.07 382.18 C 182.42 385.54 185.76 388.91 189.12 392.26 C 191.08 394.14 193.02 396.65 195.99 396.74 C 200.31 397.31 204.69 393.51 204.26 389.06 C 204.22 380.28 204.44 371.50 204.12 362.73 C 213.50 362.71 222.88 362.94 232.26 362.72 C 241.57 362.67 250.89 362.93 260.21 362.64 C 264.42 362.96 268.65 362.67 272.87 362.76 C 284.27 362.76 295.66 362.74 307.06 362.75 C 318.48 362.77 329.89 362.72 341.31 362.75 C 349.58 362.72 357.86 362.86 366.13 362.61 C 373.83 362.94 381.57 362.69 389.28 362.61 C 397.57 363.01 405.87 362.68 414.17 362.63 C 417.48 362.02 420.55 360.25 422.78 357.73 C 427.94 352.03 427.58 342.38 421.89 337.17 C 418.39 333.47 413.10 332.62 408.23 332.98 C 404.53 333.04 400.83 332.98 397.13 333.00 C 394.76 333.00 392.40 333.00 390.04 333.00 C 387.61 333.00 385.17 333.00 382.75 333.02 C 376.07 333.05 369.40 332.96 362.73 333.01 C 355.58 333.03 348.44 332.97 341.29 333.01 C 329.87 333.02 318.44 332.98 307.02 333.00 C 295.65 333.01 284.29 332.99 272.92 333.00 C 267.21 332.98 261.50 333.03 255.80 333.00 C 248.27 332.98 240.74 333.03 233.21 333.01 C 230.16 332.99 227.10 333.00 224.05 333.00 C 221.00 332.99 217.95 333.01 214.90 333.00 C 211.31 332.99 207.72 333.01 204.13 333.04 C 204.40 324.02 204.28 314.98 204.21 305.96 C 204.26 301.76 199.97 298.45 195.93 299.04 C 193.01 299.30 191.04 301.67 189.06 303.55 Z"
        />
      </g>
      <g id="#e2bf67ff">
        <path
          fill="#e2bf67"
          opacity="1.00"
          d=" M 385.72 180.98 C 388.24 180.55 391.10 180.05 393.32 181.71 C 396.61 184.36 399.32 187.66 402.39 190.57 C 401.93 194.35 401.56 198.16 401.58 201.98 C 401.71 217.98 401.61 233.99 401.65 250.00 C 401.57 256.14 401.51 262.29 402.16 268.40 C 399.11 271.28 396.47 274.60 393.13 277.15 C 390.94 278.84 388.09 278.08 385.59 277.87 L 385.64 277.48 C 386.05 274.33 386.39 271.17 386.41 268.00 C 386.25 246.99 386.43 225.97 386.33 204.96 C 386.22 197.04 386.78 189.09 385.75 181.22 L 385.72 180.98 Z"
        />
        <path
          fill="#e2bf67"
          opacity="1.00"
          d=" M 390.04 333.00 C 392.40 333.00 394.76 333.00 397.13 333.00 C 397.10 342.54 397.51 352.09 396.89 361.62 C 394.67 361.91 392.45 362.25 390.23 362.51 C 389.89 352.68 389.91 342.83 390.04 333.00 Z"
        />
      </g>
      <g id="#edcf71ff">
        <path
          fill="#edcf71"
          opacity="1.00"
          d=" M 381.85 186.96 C 381.89 184.40 383.92 182.68 385.75 181.22 C 386.78 189.09 386.22 197.04 386.33 204.96 C 386.43 225.97 386.25 246.99 386.41 268.00 C 386.39 271.17 386.05 274.33 385.64 277.48 C 383.88 276.05 381.85 274.45 381.86 271.95 C 381.40 262.70 382.15 253.41 381.52 244.16 C 380.31 234.36 380.37 224.38 381.53 214.58 C 382.12 205.39 381.43 196.15 381.85 186.96 Z"
        />
      </g>
      <g id="#d5ab5bff">
        <path
          fill="#d5ab5b"
          opacity="1.00"
          d=" M 402.39 190.57 C 405.46 193.53 408.44 196.60 411.47 199.62 C 410.90 219.50 411.18 239.39 411.33 259.27 C 408.27 262.31 405.28 265.42 402.16 268.40 C 401.51 262.29 401.57 256.14 401.65 250.00 C 401.61 233.99 401.71 217.98 401.58 201.98 C 401.56 198.16 401.93 194.35 402.39 190.57 Z"
        />
      </g>
      <g id="#1d99ccff">
        <path
          fill="#1d99cc"
          opacity="1.00"
          d=" M 411.47 199.62 C 419.64 207.75 427.78 215.90 435.92 224.06 C 438.95 226.81 438.88 232.06 435.83 234.77 C 427.68 242.96 419.52 251.12 411.33 259.27 C 411.18 239.39 410.90 219.50 411.47 199.62 Z"
        />
        <path
          fill="#1d99cc"
          opacity="1.00"
          d=" M 164.42 218.41 C 169.81 213.03 177.91 214.70 184.75 214.51 C 184.67 224.42 184.64 234.33 184.76 244.24 C 178.37 243.91 171.07 245.70 165.59 241.45 C 158.20 236.28 157.48 224.27 164.42 218.41 Z"
        />
        <path
          fill="#1d99cc"
          opacity="1.00"
          d=" M 150.29 342.37 C 159.81 332.78 169.37 323.22 178.97 313.70 C 179.46 336.52 179.27 359.35 179.07 382.18 C 169.34 372.48 159.62 362.78 149.93 353.04 C 146.93 350.21 147.33 345.09 150.29 342.37 Z"
        />
      </g>
      <g id="#dbb460ff">
        <path
          fill="#dbb460"
          opacity="1.00"
          d=" M 184.75 214.51 C 189.78 214.53 194.81 214.46 199.84 214.50 C 200.70 224.39 200.25 234.33 200.26 244.25 C 195.09 244.27 189.93 244.23 184.76 244.24 C 184.64 234.33 184.67 224.42 184.75 214.51 Z"
        />
      </g>
      <g id="#ecce70ff">
        <path
          fill="#ecce70"
          opacity="1.00"
          d=" M 199.84 214.50 C 205.33 214.55 210.82 214.45 216.31 214.49 C 215.85 224.42 215.92 234.33 216.31 244.25 C 210.96 244.27 205.61 244.23 200.26 244.25 C 200.25 234.33 200.70 224.39 199.84 214.50 Z"
        />
      </g>
      <g id="#f6e286ff">
        <path
          fill="#f6e286"
          opacity="1.00"
          d=" M 216.31 214.49 C 224.28 214.53 232.26 214.46 240.23 214.50 C 240.36 224.42 240.30 234.33 240.25 244.25 C 232.27 244.27 224.29 244.24 216.31 244.25 C 215.92 234.33 215.85 224.42 216.31 214.49 Z"
        />
        <path
          fill="#f6e286"
          opacity="1.00"
          d=" M 224.05 333.00 C 227.10 333.00 230.16 332.99 233.21 333.01 C 232.89 342.74 234.37 352.65 232.39 362.25 C 229.59 362.27 226.80 362.28 224.01 362.22 C 223.95 352.48 224.03 342.74 224.05 333.00 Z"
        />
      </g>
      <g id="#f6eca3ff">
        <path
          fill="#f6eca3"
          opacity="1.00"
          d=" M 240.23 214.50 C 248.23 214.53 256.23 214.47 264.23 214.50 C 264.22 224.42 264.36 234.33 264.22 244.25 C 256.23 244.27 248.24 244.24 240.25 244.25 C 240.30 234.33 240.36 224.42 240.23 214.50 Z"
        />
      </g>
      <g id="#f6f4c0ff">
        <path
          fill="#f6f4c0"
          opacity="1.00"
          d=" M 264.23 214.50 C 277.16 214.50 290.10 214.50 303.03 214.50 C 303.06 224.42 302.96 234.33 303.06 244.25 C 290.11 244.25 277.17 244.25 264.22 244.25 C 264.36 234.33 264.22 224.42 264.23 214.50 Z"
        />
        <path
          fill="#f6f4c0"
          opacity="1.00"
          d=" M 272.92 333.00 C 284.29 332.99 295.65 333.01 307.02 333.00 C 307.09 342.92 306.79 352.83 307.06 362.75 C 295.66 362.74 284.27 362.76 272.87 362.76 C 272.87 352.84 272.77 342.92 272.92 333.00 Z"
        />
      </g>
      <g id="#f6ecc0ff">
        <path
          fill="#f6ecc0"
          opacity="1.00"
          d=" M 303.03 214.50 C 315.61 214.49 328.20 214.51 340.78 214.50 C 340.67 224.42 340.68 234.33 340.79 244.25 C 328.21 244.24 315.63 244.26 303.06 244.25 C 302.96 234.33 303.06 224.42 303.03 214.50 Z"
        />
      </g>
      <g id="#f6e5a4ff">
        <path
          fill="#f6e5a4"
          opacity="1.00"
          d=" M 340.78 214.50 C 345.80 214.48 350.83 214.51 355.86 214.50 C 355.73 224.42 355.80 234.33 355.83 244.25 C 350.82 244.24 345.80 244.26 340.79 244.25 C 340.68 234.33 340.67 224.42 340.78 214.50 Z"
        />
      </g>
      <g id="#f6e18dff">
        <path
          fill="#f6e18d"
          opacity="1.00"
          d=" M 355.86 214.50 C 360.52 214.48 365.18 214.51 369.84 214.50 C 369.79 224.42 369.76 234.33 369.87 244.25 C 365.19 244.24 360.51 244.26 355.83 244.25 C 355.80 234.33 355.73 224.42 355.86 214.50 Z"
        />
      </g>
      <g id="#f5dc79ff">
        <path
          fill="#f5dc79"
          opacity="1.00"
          d=" M 369.84 214.50 C 373.74 214.48 377.63 214.49 381.53 214.58 C 380.37 224.38 380.31 234.36 381.52 244.16 C 377.64 244.26 373.75 244.28 369.87 244.25 C 369.76 234.33 369.79 224.42 369.84 214.50 Z"
        />
      </g>
      <g id="#dfbb64ff">
        <path
          fill="#dfbb64"
          opacity="1.00"
          d=" M 189.06 303.55 C 191.04 301.67 193.01 299.30 195.93 299.04 C 199.97 298.45 204.26 301.76 204.21 305.96 C 204.28 314.98 204.40 324.02 204.13 333.04 C 203.45 342.92 203.43 352.85 204.12 362.73 C 204.44 371.50 204.22 380.28 204.26 389.06 C 204.69 393.51 200.31 397.31 195.99 396.74 C 193.02 396.65 191.08 394.14 189.12 392.26 C 189.53 369.51 189.23 346.75 189.33 323.99 C 189.34 317.18 189.44 310.36 189.06 303.55 Z"
        />
      </g>
      <g id="#d3a758ff">
        <path
          fill="#d3a758"
          opacity="1.00"
          d=" M 178.97 313.70 C 182.33 310.31 185.68 306.91 189.06 303.55 C 189.44 310.36 189.34 317.18 189.33 323.99 C 189.23 346.75 189.53 369.51 189.12 392.26 C 185.76 388.91 182.42 385.54 179.07 382.18 C 179.27 359.35 179.46 336.52 178.97 313.70 Z"
        />
      </g>
      <g id="#edd071ff">
        <path
          fill="#edd071"
          opacity="1.00"
          d=" M 204.13 333.04 C 207.72 333.01 211.31 332.99 214.90 333.00 C 214.87 342.59 214.45 352.20 215.12 361.78 C 218.08 361.97 221.04 362.15 224.01 362.22 C 226.80 362.28 229.59 362.27 232.39 362.25 L 232.26 362.72 C 222.88 362.94 213.50 362.71 204.12 362.73 C 203.43 352.85 203.45 342.92 204.13 333.04 Z"
        />
      </g>
      <g id="#f6df7cff">
        <path
          fill="#f6df7c"
          opacity="1.00"
          d=" M 214.90 333.00 C 217.95 333.01 221.00 332.99 224.05 333.00 C 224.03 342.74 223.95 352.48 224.01 362.22 C 221.04 362.15 218.08 361.97 215.12 361.78 C 214.45 352.20 214.87 342.59 214.90 333.00 Z"
        />
      </g>
      <g id="#f6e999ff">
        <path
          fill="#f6e999"
          opacity="1.00"
          d=" M 233.21 333.01 C 240.74 333.03 248.27 332.98 255.80 333.00 C 255.89 342.54 255.27 352.10 256.12 361.61 C 257.47 361.97 258.84 362.31 260.21 362.64 C 250.89 362.93 241.57 362.67 232.26 362.72 L 232.39 362.25 C 234.37 352.65 232.89 342.74 233.21 333.01 Z"
        />
      </g>
      <g id="#f6f2b1ff">
        <path
          fill="#f6f2b1"
          opacity="1.00"
          d=" M 255.80 333.00 C 261.50 333.03 267.21 332.98 272.92 333.00 C 272.77 342.92 272.87 352.84 272.87 362.76 C 268.65 362.67 264.42 362.96 260.21 362.64 C 258.84 362.31 257.47 361.97 256.12 361.61 C 255.27 352.10 255.89 342.54 255.80 333.00 Z"
        />
      </g>
      <g id="#f6ebc0ff">
        <path
          fill="#f6ebc0"
          opacity="1.00"
          d=" M 307.02 333.00 C 318.44 332.98 329.87 333.02 341.29 333.01 C 341.41 342.92 341.39 352.83 341.31 362.75 C 329.89 362.72 318.48 362.77 307.06 362.75 C 306.79 352.83 307.09 342.92 307.02 333.00 Z"
        />
      </g>
      <g id="#f6e49eff">
        <path
          fill="#f6e49e"
          opacity="1.00"
          d=" M 341.29 333.01 C 348.44 332.97 355.58 333.03 362.73 333.01 C 362.76 342.55 362.24 352.13 363.33 361.63 C 364.26 361.97 365.19 362.29 366.13 362.61 C 357.86 362.86 349.58 362.72 341.31 362.75 C 341.39 352.83 341.41 342.92 341.29 333.01 Z"
        />
      </g>
      <g id="#f6de7bff">
        <path
          fill="#f6de7b"
          opacity="1.00"
          d=" M 362.73 333.01 C 369.40 332.96 376.07 333.05 382.75 333.02 C 382.58 342.58 382.29 352.15 382.86 361.69 C 385.32 361.95 387.77 362.23 390.23 362.51 L 389.28 362.61 C 381.57 362.69 373.83 362.94 366.13 362.61 C 365.19 362.29 364.26 361.97 363.33 361.63 C 362.24 352.13 362.76 342.55 362.73 333.01 Z"
        />
      </g>
      <g id="#e9ca6eff">
        <path
          fill="#e9ca6e"
          opacity="1.00"
          d=" M 382.75 333.02 C 385.17 333.00 387.61 333.00 390.04 333.00 C 389.91 342.83 389.89 352.68 390.23 362.51 C 387.77 362.23 385.32 361.95 382.86 361.69 C 382.29 352.15 382.58 342.58 382.75 333.02 Z"
        />
      </g>
      <g id="#d9b15fff">
        <path
          fill="#d9b15f"
          opacity="1.00"
          d=" M 397.13 333.00 C 400.83 332.98 404.53 333.04 408.23 332.98 C 408.42 342.49 408.12 352.00 408.34 361.51 C 410.28 361.91 412.21 362.31 414.17 362.63 C 405.87 362.68 397.57 363.01 389.28 362.61 L 390.23 362.51 C 392.45 362.25 394.67 361.91 396.89 361.62 C 397.51 352.09 397.10 342.54 397.13 333.00 Z"
        />
      </g>
      <g id="#cc9d52ff">
        <path
          fill="#cc9d52"
          opacity="1.00"
          d=" M 408.23 332.98 C 413.10 332.62 418.39 333.47 421.89 337.17 C 427.58 342.38 427.94 352.03 422.78 357.73 C 420.55 360.25 417.48 362.02 414.17 362.63 C 412.21 362.31 410.28 361.91 408.34 361.51 C 408.12 352.00 408.42 342.49 408.23 332.98 Z"
        />
      </g>
    </Svg>
  );
};

export default Icon;