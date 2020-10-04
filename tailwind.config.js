module.exports = {
  purge: {
    layers: ["utilities"],
    content: ["./src/**/*.html"]
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
};
