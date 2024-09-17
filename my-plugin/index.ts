import tailwindPlugin from "tailwindcss/plugin"
import { colorObject, componentObject } from "./src/color-object"
import themeMap from "./src/theme"

function main({
  addUtilities,
  matchUtilities,
  addComponents,
  matchComponents,
  addBase,
  addVariant,
  matchVariant,
  theme,
  config,
  corePlugins,
  e,
}) {
  addComponents({
    ".dark": themeMap.dark,
    ".light": themeMap.light,
    ...componentObject,
  })
}

export default tailwindPlugin(main, {
  theme: {
    extend: {
      colors: {
        ...colorObject,
      },
    },
  },
})
