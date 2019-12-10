import IOHKSymbol from '../../../resources/images/dark/iohk-symbol-inverted.png'
import StakeTrustLogo from '../../../resources/images/dark/atala-text-horizontal-white.svg'
import { createMuiTheme } from '@material-ui/core'

export default {
  mui: createMuiTheme({
    palette: {
      primary: {
        main: '#eb2256'
      },
      secondary: {
        main: '#f69ab2'
      },
      background: {
        default: '#121326',
        alternative: '#1E1F31'
      },
      type: 'dark'
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
      },
      h2: {
        fontSize: '4rem'
      },
      h3: {
        fontSize: '2.4rem'
      },
      h4: {
        fontSize: '2rem'
      },
      h5: {
        fontSize: '1.8rem'
      },
      h6: {
        fontSize: '1.6rem'
      }
    },
    spacing: factor => `${factor}rem`
  }),
  images: {
    logo: StakeTrustLogo,
    IOHKSymbol,
    StakeTrustLogo
  }
}
