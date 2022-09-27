/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1400px",
        // => @media (min-width: 1400px) { ... }

        "2xl": "1512px",
        // => @media (min-width: 1512px) { ... }
      },
      fontSize: {
        "9px": ["0.5625rem", "0.84375rem"], // 9px, 13.5px
        "12px": ["0.75rem", "1.125rem"], // 12px, 18px
        "13px": ["0.8125rem", "1.25rem"], // 13px, 20px
        "14px": ["0.875rem", "1.3125rem"], // 14px, 21px
        "16px": ["1rem", "1.5rem"], // 16px, 24px
        "18px": ["1.125rem", "1.6875rem"], // 18px, 27px
        "20px": ["1.25rem", "1.875rem"], // 20px, 30px
        "24px": ["1.5rem", "2.25rem"], // 24px, 36px
        "26px": ["1.625rem", "2.4375rem"], // 26px, 39px
      },
      width: {
        '92px': '5.75rem', // 92px
        '108px': '6.75rem', // 108px
      },
      height: {
        '72px': '4.5rem', // 72px
        '108px': '6.75rem', // 108px
        '93.5%': '93.5%',
      },
      maxWidth: {
        "30px": "1.875rem", // 30px
        "68px": "4.25rem", // 68px
        "74px": "4.625rem", // 74px
        "110px": "6.875rem", // 110px
        "124px": "7.75rem", // 124px
        "134px": "8.375rem", // 124px
        "216px": "13.5rem", // 216px
        "238px": "14.875rem", // 238px
        "244px": "15.25rem", // 244px
        "252px": "15.75rem", // 252px
        "290px": "18.125rem", // 190px
        "374px": "23.375rem", // 374px
        "536px": "33.5rem", // 536px
        "872px": "54.5rem", // 872px
      },
      maxHeight: {
        "30px": "1.875rem", // 30px
        "35px": "2.1875rem", // 35px
        "46px": "2.875rem", // 46px
        "70px": "4.375rem", // 70px
        "72px": "4.5rem", // 72px
        "104px": "6.5rem", // 104px
        "140px": "8.75rem", // 168px
        "168px": "10.5rem", // 168px
        "184px": "11.5rem", // 184px
        "200px": "12.5rem", // 200px
        "254px": "15.875rem", // 254px
        "392px": "24.5rem", // 392px
        "446px": "27.875rem", // 446px
        "470px": "29.375rem", // 470px
      },
      padding: {
        "6px": "0.375rem", // 6px
        "10px": "0.625rem", // 10px
        "14px": "0.875rem", // 14px
        "18px": "1.125rem", // 18px
        "22px": "1.375rem", // 22px
        "26px": "1.625rem", // 26px
        "30px": "1.875rem", // 30px
        "44px": "2.75rem", // 44px
        "52px": "3.25rem", // 52px
        "62px": "3.875rem", // 62px
      },
      margin: {
        "14px": "0.875rem", // 14px
        "18px": "1.125rem", // 18px
        "30px": "1.875rem", // 30px
      },
      gap: {
        "my-16": "16px",
        "10px": "0.625rem", // 10px
        "14px": "0.875rem", // 14px
        "46px": "2.875rem", // 46px
        "50px": "3.125rem", // 50px
        "60px": "3.75rem", // 60px
        "74px": "4.625rem", // 74px
      },
      colors: {
        grey: {
          150: "#F4F7FF",
          200: "#646262",
          250: "#545454",
          300: "#4F4F4F",
          350: "#434343",
          400: "#1B1B1B",
          450: "#0F0F0F",
          500: "rgba(0, 0, 0, 0.36)",
        },
        blue: {
          450: "#00438B",
          500: "#0560CB",
        },
        purple: {
          500: "#E9D8FF",
        },
        red: {
          500: "#FFE3E3",
        },
        cyan: {
          500: "rgba(64, 230, 218, 0.07)",
        },
      },
      borderRadius: {
        "4px": "0.25rem", // 4px
        "5px": "0.3125rem", // 5px
        "7px": "0.4375rem", // 7px
        "10px": "0.625rem", // 10px
      },
      boxShadow: {
        "side-bar-icons": "0px 1px 10px rgba(0, 0, 0, 0.1)",
      },
      inset: {
        "52px": "3.25rem", // 52px
      },
    },
  },
  plugins: [],
};
