type RGB = { r: number; g: number; b: number }

function hexToRgb(hex: string): RGB {
  let r = parseInt(hex.slice(1, 3), 16)
  let g = parseInt(hex.slice(3, 5), 16)
  let b = parseInt(hex.slice(5, 7), 16)
  return { r, g, b }
}

function rgbToHex(rgb: RGB): string {
  return `#${((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1)}`
}

export function interpolateRGB(color1: string, color2: string, steps: number): string[] {
  const startRGB = hexToRgb(color1)
  const endRGB = hexToRgb(color2)
  const stepFactor = 1 / (steps - 1)
  let interpolatedColors: string[] = []

  for (let step = 0; step < steps; step++) {
    let interpolatedRGB: RGB = {
      r: Math.round(startRGB.r + (endRGB.r - startRGB.r) * step * stepFactor),
      g: Math.round(startRGB.g + (endRGB.g - startRGB.g) * step * stepFactor),
      b: Math.round(startRGB.b + (endRGB.b - startRGB.b) * step * stepFactor),
    }
    interpolatedColors.push(rgbToHex(interpolatedRGB))
  }

  return interpolatedColors
}
