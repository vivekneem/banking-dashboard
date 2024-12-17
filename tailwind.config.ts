import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#343C6A",
        secondary: "#232323",
        inactive: "#B1B1B1",
        "quick-transfer-bg": "#EDF1F7",
        "dashboard-bg": "#F5F7FA",
        "link-color": "#8BA3CB",
        "tab-inactive": "#718EBF",
      },
      spacing: {
        "730": "730px",
        "350": "350px",
        "445": "445px",
        "635": "635px",
        "282": "282px",
        "367": "367px",
        "323": "323px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        logo: [
          "25px",
          {
            lineHeight: "30.26px",
            fontWeight: "800",
          },
        ],
        sidebar: [
          "18px",
          {
            lineHeight: "21.78px",
            fontWeight: "500",
          },
        ],
        header: [
          "28px",
          {
            lineHeight: "33.89px",
            fontWeight: "600",
          },
        ],
        card: [
          "22px",
          {
            lineHeight: "26.63px",
            fontWeight: "600",
          },
        ],
        tab: [
          "16px",
          {
            lineHeight: "19.36px",
            fontWeight: "500",
          },
        ],
        label: [
          "16px",
          {
            lineHeight: "19.36px",
            fontWeight: "400",
          },
        ],
        input: [
          "15px",
          {
            lineHeight: "18.15px",
            fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
