import Typography from 'typography'

const fonts = [
  'Gilroy',
  'Helvetica Neue',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
]

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.625,
  headerFontFamily: fonts,
  bodyFontFamily: fonts,
})

export default typography
