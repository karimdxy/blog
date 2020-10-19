module.exports = {
  purge: {
    layers: ["utilities"],
    content: ["./src/**/*.html", "./src/**/*.liquid"]
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  }
};
