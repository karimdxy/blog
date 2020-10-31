module.exports = {
  purge: {
    layers: ["utilities"],
    content: ["./src/**/*.html", "./src/**/*.liquid"]
  },
  theme: {
    typography: {
      default: {
        css: {
          color: "#fff",
          a: {
            color: "#fff"
          },
          h1: {
            color: "#fff"
          },
          h2: {
            color: "#fff"
          },
          h3: {
            color: "#fff"
          },
          h4: {
            color: "#fff"
          },
          h5: {
            color: "#fff"
          },
          h6: {
            color: "#fff"
          }
        }
      }
    },
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
