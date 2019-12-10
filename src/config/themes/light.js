import IOHKSymbol from '../../../resources/images/dark/iohk-symbol-inverted.png'
import StakeTrustLogo from '../../../resources/images/light/Atala-text-horizontal.svg'
import { createMuiTheme, colors } from '@material-ui/core'

export default {
  mui: createMuiTheme({
    palette: {
      primary: colors.blue,
      secondary: colors.cyan,
      type: 'light'
    },
    typography: {
      fontFamily: [
        'Montserrat',
        'Arial',
        'sans-serif'
      ].join(','),
      fontSize: 14,
      htmlFontSize: 10,
      h1: {
        fontSize: '6.5rem'
      }
    },
    spacing: factor => `${factor}rem`
  }),
  images: {
    IOHKSymbol,
    StakeTrustLogo
  }
}
