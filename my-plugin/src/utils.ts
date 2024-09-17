export function rgba2rgb(color: string, background: string, alpha: number) {
  const backgroundRGB = colorString2numberString(background)
  return colorString2numberString(color)
    .map((i, n) => {
      return ((100 - alpha) * backgroundRGB[n] + alpha * i) / 100
    })
    .join(",")
}

export function colorString2numberString(color: string) {
  return color.split(" ").map((i) => parseInt(i))
}

export function list2map(m: { [key: string]: string }, [key, value]: string[]) {
  m[key] = value
  return m
}

export function objectMap(
  obj: { [key: string]: any },
  callback: (value?: any, key?: string) => any
) {
  return array2map(
    Object.entries(obj).map(([key, value]) => [key, callback(value, key)])
  )
}

export function objectKeyFilter(
  obj: { [key: string]: any },
  callback: (key?: string) => any
) {
  return array2map(Object.entries(obj).filter(([key, value]) => callback(key)))
}

export function array2map(arr: [key: string, value: any][]) {
  return arr.reduce(
    (obj, [key, value]) => {
      obj[key] = value
      return obj
    },
    {} as { [key: string]: any }
  )
}
