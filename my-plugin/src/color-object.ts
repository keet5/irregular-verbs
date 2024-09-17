const colorTitleList = [
  "background",
  "foreground-50",
  "foreground-100",
  "foreground-200",
  "foreground-300",
  "foreground-400",
  "foreground-500",
  "foreground-600",
  "foreground-700",
  "foreground-800",
  "foreground-900",
  "foreground",
  "focus",
  "overlay",
  "divider",
  "content1",
  "content1-foreground",
  "content2",
  "content2-foreground",
  "content3",
  "content3-foreground",
  "content4",
  "content4-foreground",
  "default-50",
  "default-100",
  "default-200",
  "default-300",
  "default-400",
  "default-500",
  "default-600",
  "default-700",
  "default-800",
  "default-900",
  "default-foreground",
  "default",
  "primary-50",
  "primary-100",
  "primary-200",
  "primary-300",
  "primary-400",
  "primary-500",
  "primary-600",
  "primary-700",
  "primary-800",
  "primary-900",
  "primary-foreground",
  "primary",
  "secondary-50",
  "secondary-100",
  "secondary-200",
  "secondary-300",
  "secondary-400",
  "secondary-500",
  "secondary-600",
  "secondary-700",
  "secondary-800",
  "secondary-900",
  "secondary-foreground",
  "secondary",
  "success-50",
  "success-100",
  "success-200",
  "success-300",
  "success-400",
  "success-500",
  "success-600",
  "success-700",
  "success-800",
  "success-900",
  "success-foreground",
  "success",
  "warning-50",
  "warning-100",
  "warning-200",
  "warning-300",
  "warning-400",
  "warning-500",
  "warning-600",
  "warning-700",
  "warning-800",
  "warning-900",
  "warning-foreground",
  "warning",
  "danger-50",
  "danger-100",
  "danger-200",
  "danger-300",
  "danger-400",
  "danger-500",
  "danger-600",
  "danger-700",
  "danger-800",
  "danger-900",
  "danger-foreground",
  "danger",
  "blue-50",
  "blue-100",
  "blue-200",
  "blue-300",
  "blue-400",
  "blue-500",
  "blue-600",
  "blue-700",
  "blue-800",
  "blue-900",
  "blue",
  "green-50",
  "green-100",
  "green-200",
  "green-300",
  "green-400",
  "green-500",
  "green-600",
  "green-700",
  "green-800",
  "green-900",
  "green",
  "pink-50",
  "pink-100",
  "pink-200",
  "pink-300",
  "pink-400",
  "pink-500",
  "pink-600",
  "pink-700",
  "pink-800",
  "pink-900",
  "pink",
  "purple-50",
  "purple-100",
  "purple-200",
  "purple-300",
  "purple-400",
  "purple-500",
  "purple-600",
  "purple-700",
  "purple-800",
  "purple-900",
  "purple",
  "red-50",
  "red-100",
  "red-200",
  "red-300",
  "red-400",
  "red-500",
  "red-600",
  "red-700",
  "red-800",
  "red-900",
  "red",
  "yellow-50",
  "yellow-100",
  "yellow-200",
  "yellow-300",
  "yellow-400",
  "yellow-500",
  "yellow-600",
  "yellow-700",
  "yellow-800",
  "yellow-900",
  "yellow",
  "cyan-50",
  "cyan-100",
  "cyan-200",
  "cyan-300",
  "cyan-400",
  "cyan-500",
  "cyan-600",
  "cyan-700",
  "cyan-800",
  "cyan-900",
  "cyan",
  "zinc-50",
  "zinc-100",
  "zinc-200",
  "zinc-300",
  "zinc-400",
  "zinc-500",
  "zinc-600",
  "zinc-700",
  "zinc-800",
  "zinc-900",
  "zinc",
]

export const colorObject = colorTitleList
  .map((key) => {
    const value = `rgb(var(--color-${key}) / <alpha-value>)`
    return { key, value }
  })
  .reduce((m, { key, value }) => {
    m[key] = value
    return m
  }, {})

export const componentObject = colorTitleList.reduce((m, color) => {
  if (!color.match(/\-|\d/)) {
    const shadeMap = [
      50,
      ...Array(9)
        .fill(0)
        .map((i, n) => {
          return (n + 1) * 100
        }),
    ].reduce((shadeMap, shade) => {
      shadeMap[`--var-color-${shade}`] = `var(--var-color-${color}-${shade})`

      return shadeMap
    }, {})

    const transparentMap = Array(9)
      .fill(0)
      .map((i, n) => {
        return n + 1
      })
      .reduce((shadeMap, transparancy) => {
        shadeMap[`--var-color-${transparancy}`] =
          `var(--var-color-${color}-${transparancy})`
        return shadeMap
      }, {})

    const className = ".color-" + color
    const value = {
      "--var-color": `var(--var-color-${color})`,
      ...shadeMap,
      ...transparentMap,
    }

    m[className] = value

    const classNameMarker = ".marker-" + color
    const valueMarker = {
      "--tw-gradient-from": `rgb(var(--color-${color}-400) / 1) var(--tw-gradient-from-position)`,
      "--tw-gradient-stops": "var(--tw-gradient-from), var(--tw-gradient-to)",
      "--tw-gradient-to": `rgb(var(--color-${color}-500) / 1) var(--tw-gradient-to-position)`,
    }

    m[classNameMarker] = valueMarker
  }
  return m
}, {})
