module.exports = {
  purge: {
    layers: ["utilities"],
    content: ["./src/**/*.html"]
  },
  theme: {
    extend: {
      typography: theme => ({
        default: {
          css: {
            color: theme("colors.gray.100"),
            h1: {
              color: theme("colors.gray.100")
            },
            h2: {
              color: theme("colors.gray.100")
            },
            h3: {
              color: theme("colors.gray.100")
            },
            h4: {
              color: theme("colors.gray.100")
            },
            h5: {
              color: theme("colors.gray.100")
            },
            h6: {
              color: theme("colors.gray.100")
            },
            strong: {
              color: theme("colors.gray.100")
            },
            a: {
              color: theme("colors.gray.100")
            },
            blockquote: {
              color: theme("colors.gray.400")
            },
            code: {
              color: theme("colors.gray.200")
            }
          }
        }
      })
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
};
