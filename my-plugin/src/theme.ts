import { objectMap, rgba2rgb, objectKeyFilter, array2map } from "./utils"

const common = {
  "blue-50": "230 241 254",
  "blue-100": "204 227 253",
  "blue-200": "153 199 251",
  "blue-300": "102 170 249",
  "blue-400": "51 142 247",
  "blue-500": "0 111 238",
  "blue-600": "0 91 196",
  "blue-700": "0 68 147",
  "blue-800": "0 46 98",
  "blue-900": "0 23 49",
  blue: "0 111 238",
  "green-50": "232 250 240",
  "green-100": "209 244 224",
  "green-200": "162 233 193",
  "green-300": "116 223 162",
  "green-400": "69 212 131",
  "green-500": "23 201 100",
  "green-600": "18 161 80",
  "green-700": "14 121 60",
  "green-800": "9 80 40",
  "green-900": "5 40 20",
  green: "23 201 100",
  "pink-50": "255 237 250",
  "pink-100": "255 220 245",
  "pink-200": "255 184 235",
  "pink-300": "255 149 225",
  "pink-400": "255 113 215",
  "pink-500": "255 78 205",
  "pink-600": "204 62 164",
  "pink-700": "153 47 123",
  "pink-800": "102 31 82",
  "pink-900": "51 16 41",
  pink: "255 78 205",
  "purple-50": "242 234 250",
  "purple-100": "228 212 244",
  "purple-200": "201 169 233",
  "purple-300": "174 126 222",
  "purple-400": "147 83 211",
  "purple-500": "120 40 200",
  "purple-600": "96 32 160",
  "purple-700": "72 24 120",
  "purple-800": "48 16 80",
  "purple-900": "24 8 40",
  purple: "120 40 200",
  "red-50": "254 231 239",
  "red-100": "253 208 223",
  "red-200": "250 160 191",
  "red-300": "248 113 160",
  "red-400": "245 65 128",
  "red-500": "243 18 96",
  "red-600": "194 14 77",
  "red-700": "146 11 58",
  "red-800": "97 7 38",
  "red-900": "49 4 19",
  red: "243 18 96",
  "yellow-50": "254 252 232",
  "yellow-100": "253 237 211",
  "yellow-200": "251 219 167",
  "yellow-300": "249 201 124",
  "yellow-400": "247 183 80",
  "yellow-500": "245 165 36",
  "yellow-600": "196 132 29",
  "yellow-700": "147 99 22",
  "yellow-800": "98 66 14",
  "yellow-900": "49 33 7",
  yellow: "245 165 36",
  "cyan-50": "240 252 255",
  "cyan-100": "230 250 254",
  "cyan-200": "215 248 254",
  "cyan-300": "195 244 253",
  "cyan-400": "165 238 253",
  "cyan-500": "126 231 252",
  "cyan-600": "6 183 219",
  "cyan-700": "9 170 205",
  "cyan-800": "14 138 170",
  "cyan-900": "5 59 72",
  cyan: "126 231 252",
  "zinc-50": "250 250 250",
  "zinc-100": "244 244 245",
  "zinc-200": "228 228 231",
  "zinc-300": "212 212 216",
  "zinc-400": "161 161 170",
  "zinc-500": "113 113 122",
  "zinc-600": "82 82 91",
  "zinc-700": "63 63 70",
  "zinc-800": "39 39 42",
  "zinc-900": "24 24 27",
  zinc: "113 113 122",
}

let light = {
  background: "255 255 255",
  "foreground-50": "250 250 250",
  "foreground-100": "244 244 245",
  "foreground-200": "228 228 231",
  "foreground-300": "212 212 216",
  "foreground-400": "161 161 170",
  "foreground-500": "113 113 122",
  "foreground-600": "82 82 91",
  "foreground-700": "63 63 70",
  "foreground-800": "39 39 42",
  "foreground-900": "24 24 27",
  foreground: "17 24 28",
  divider: "219 219 219",
  focus: "0 111 238",
  overlay: "0 0 0",
  content1: "255 255 255",
  "content1-foreground": "17 24 28",
  content2: "244 244 245",
  "content2-foreground": "39 39 42",
  content3: "228 228 231",
  "content3-foreground": "63 63 70",
  content4: "212 212 216",
  "content4-foreground": "82 82 91",
  "default-50": "250 250 250",
  "default-100": "244 244 245",
  "default-200": "228 228 231",
  "default-300": "212 212 216",
  "default-400": "161 161 170",
  "default-500": "113 113 122",
  "default-600": "82 82 91",
  "default-700": "63 63 70",
  "default-800": "39 39 42",
  "default-900": "24 24 27",
  "default-foreground": "0 0 0",
  default: "212 212 216",
  "primary-50": "230 241 254",
  "primary-100": "204 227 253",
  "primary-200": "153 199 251",
  "primary-300": "102 170 249",
  "primary-400": "51 142 247",
  "primary-500": "0 111 238",
  "primary-600": "0 91 196",
  "primary-700": "0 68 147",
  "primary-800": "0 46 98",
  "primary-900": "0 23 49",
  "primary-foreground": "255 255 255",
  primary: "0 111 238",
  "secondary-50": "242 234 250",
  "secondary-100": "228 212 244",
  "secondary-200": "201 169 233",
  "secondary-300": "174 126 222",
  "secondary-400": "147 83 211",
  "secondary-500": "120 40 200",
  "secondary-600": "96 32 160",
  "secondary-700": "72 24 120",
  "secondary-800": "48 16 80",
  "secondary-900": "24 8 40",
  "secondary-foreground": "255 255 255",
  secondary: "120 40 200",
  "success-50": "232 250 240",
  "success-100": "209 244 224",
  "success-200": "162 233 193",
  "success-300": "116 223 162",
  "success-400": "69 212 131",
  "success-500": "23 201 100",
  "success-600": "18 161 80",
  "success-700": "14 121 60",
  "success-800": "9 80 40",
  "success-900": "5 40 20",
  "success-foreground": "0 0 0",
  success: "23 201 100",
  "warning-50": "254 252 232",
  "warning-100": "253 237 211",
  "warning-200": "251 219 167",
  "warning-300": "249 201 124",
  "warning-400": "247 183 80",
  "warning-500": "245 165 36",
  "warning-600": "196 132 29",
  "warning-700": "147 99 22",
  "warning-800": "98 66 14",
  "warning-900": "49 33 7",
  "warning-foreground": "0 0 0",
  warning: "245 165 36",
  "danger-50": "254 231 239",
  "danger-100": "253 208 223",
  "danger-200": "250 160 191",
  "danger-300": "248 113 160",
  "danger-400": "245 65 128",
  "danger-500": "243 18 96",
  "danger-600": "194 14 77",
  "danger-700": "146 11 58",
  "danger-800": "97 7 38",
  "danger-900": "49 4 19",
  "danger-foreground": "255 255 255",
  danger: "243 18 96",
}

let dark = {
  background: "0 0 0",
  "foreground-50": "24 24 27",
  "foreground-100": "39 39 42",
  "foreground-200": "63 63 70",
  "foreground-300": "82 82 91",
  "foreground-400": "113 113 122",
  "foreground-500": "161 161 170",
  "foreground-600": "212 212 216",
  "foreground-700": "228 228 231",
  "foreground-800": "244 244 245",
  "foreground-900": "250 250 250",
  foreground: "236 237 238",
  focus: "0 111 238",
  overlay: "0 0 0",
  divider: "38 38 38",
  content1: "24 24 27",
  "content1-foreground": "250 250 250",
  content2: "39 39 42",
  "content2-foreground": "244 244 245",
  content3: "63 63 70",
  "content3-foreground": "228 228 231",
  content4: "82 82 91",
  "content4-foreground": "212 212 216",
  "default-50": "24 24 27",
  "default-100": "39 39 42",
  "default-200": "63 63 70",
  "default-300": "82 82 91",
  "default-400": "113 113 122",
  "default-500": "161 161 170",
  "default-600": "212 212 216",
  "default-700": "228 228 231",
  "default-800": "244 244 245",
  "default-900": "250 250 250",
  "default-foreground": "255 255 255",
  default: "63 63 70",
  "primary-50": "0 23 49",
  "primary-100": "0 46 98",
  "primary-200": "0 68 147",
  "primary-300": "0 91 196",
  "primary-400": "0 111 238",
  "primary-500": "51 142 247",
  "primary-600": "102 170 249",
  "primary-700": "153 199 251",
  "primary-800": "204 227 253",
  "primary-900": "230 241 254",
  "primary-foreground": "255 255 255",
  primary: "0 111 238",
  "secondary-50": "24 8 40",
  "secondary-100": "48 16 80",
  "secondary-200": "72 24 120",
  "secondary-300": "96 32 160",
  "secondary-400": "120 40 200",
  "secondary-500": "147 83 211",
  "secondary-600": "174 126 222",
  "secondary-700": "201 169 233",
  "secondary-800": "228 212 244",
  "secondary-900": "242 234 250",
  "secondary-foreground": "255 255 255",
  secondary: "147 83 211",
  "success-50": "5 40 20",
  "success-100": "9 80 40",
  "success-200": "14 121 60",
  "success-300": "18 161 80",
  "success-400": "23 201 100",
  "success-500": "69 212 131",
  "success-600": "116 223 162",
  "success-700": "162 233 193",
  "success-800": "209 244 224",
  "success-900": "232 250 240",
  "success-foreground": "0 0 0",
  success: "23 201 100",
  "warning-50": "49 33 7",
  "warning-100": "98 66 14",
  "warning-200": "147 99 22",
  "warning-300": "196 132 29",
  "warning-400": "245 165 36",
  "warning-500": "247 183 80",
  "warning-600": "249 201 124",
  "warning-700": "251 219 167",
  "warning-800": "253 237 211",
  "warning-900": "254 252 232",
  "warning-foreground": "0 0 0",
  warning: "245 165 36",
  "danger-50": "49 4 19",
  "danger-100": "97 7 38",
  "danger-200": "146 11 58",
  "danger-300": "194 14 77",
  "danger-400": "243 18 96",
  "danger-500": "245 65 128",
  "danger-600": "248 113 160",
  "danger-700": "250 160 191",
  "danger-800": "253 208 223",
  "danger-900": "254 231 239",
  "danger-foreground": "255 255 255",
  danger: "243 18 96",
}

type Theme = { [key: string]: string }

const themeMap = objectMap({ dark, light }, (theme) => {
  return prepareTheme(theme)
})

export default themeMap

function prepareTheme(theme: Theme) {
  theme = { ...theme, ...common }
  const pseudoTransparencyColor = createPseudoTransparencyColor(theme)
  theme = addPrefixColor(theme)

  return { ...theme, ...pseudoTransparencyColor }
}

function createPseudoTransparencyColor(theme: Theme) {
  const background = theme.background

  const additionalTheme = Object.entries(
    objectKeyFilter(theme, (key) => !/-\d+$/.test(key as string))
  ).reduce(
    (obj, [key, value]) => {
      Array(9)
        .fill(0)
        .forEach((_, n) => {
          n = n + 1
          obj[`--var-color-${key}-${n}`] = rgba2rgb(value, background, n * 10)
        })
      return obj
    },
    {} as { [key: string]: string }
  )

  return additionalTheme
}

function addPrefixColor(theme: { [key: string]: string }) {
  return Object.entries(theme).reduce(
    (m, [key, value]) => {
      m["--color-" + key] = value
      m["--var-color-" + key] = value.replaceAll(" ", ", ")
      return m
    },
    {} as { [key: string]: string }
  )
}
