module.exports = {
  purge: {
    layers: ["utilities"],
    content: ["./src/**/*.html", "./src/**/*.liquid"]
  },
  theme: {
    typography: theme => ({
      default: {
        css: {
          color: theme("colors.white"),
          a: {
            color: theme("colors.white"),
            "&:hover": {
              color: theme("colors.blue.500")
            }
          },
          h1: {
            color: theme("colors.white")
          },
          h2: {
            color: theme("colors.white")
          },
          h3: {
            color: theme("colors.white")
          },
          h4: {
            color: theme("colors.white")
          },
          h5: {
            color: theme("colors.white")
          },
          h6: {
            color: theme("colors.white")
          },
          strong: {
            color: theme("colors.white")
          },
          em: {
            color: theme("colors.white")
          },
          blockquote: {
            color: theme("colors.white")
          }
        }
      }
    }),
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
