/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      primarycolor01: "#69e3fc",
      primarycolor02: "#ffea80",
      primarycolor: "#69e3fc",
      blue: "#1fb6ff",
      primarycolorvariant01: "#b4f1fd",
      primarycolorvariant02: "#e6fafe",
      primarycolorvariant03: "#e5c000",
      secondarycolor: "#ff7733",
      primarytextcolor: "#000",
      inputfieldcolor: "#ccc",
      tabbordercolor: "#666",
      bgcolor: "#f7f6e8",
      tabbgcolor: "#F9F9FA",
      tabtopnotactive: "#D9D9D9",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
