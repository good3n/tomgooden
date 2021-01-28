import regular from './Gilroy-Regular.woff'
import regular2 from './Gilroy-Regular.woff2'
import medium from './Gilroy-Medium.woff'
import medium2 from './Gilroy-Medium.woff2'
import semibold from './Gilroy-SemiBold.woff'
import semibold2 from './Gilroy-SemiBold.woff2'
import bold from './Gilroy-Bold.woff'
import bold2 from './Gilroy-Bold.woff2'
import extrabold from './Gilroy-ExtraBold.woff'
import extrabold2 from './Gilroy-ExtraBold.woff2'
import black from './Gilroy-Black.woff'
import black2 from './Gilroy-Black.woff2'

export const Fonts = `
  @font-face {
    font-family: 'Gilroy';
    src: url(${regular2}) format('woff2'),
      url(${regular}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url(${medium2}) format('woff2'),
      url(${medium}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url(${semibold2}) format('woff2'),
      url(${semibold}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url(${bold}) format('woff2'),
      url(${bold2}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url(${extrabold}) format('woff2'),
      url(${extrabold2}) format('woff');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url(${black}) format('woff2'),
      url(${black2}) format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
`
