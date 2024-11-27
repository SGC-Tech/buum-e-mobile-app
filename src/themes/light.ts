import borderRadius from './atoms/borderRadius';
import colors from './atoms/colors';
import fontSizes from './atoms/fontSizes';
import spacing from './atoms/spacing';

const lightTheme = {
  colors: {
    typography: {
      PRIMARY: {...colors.neutral},
    },
    border: {
      PRIMARY: {...colors.neutral},
    },
    black: colors.black,
    white: colors.white,
    primaryLighter: colors['blue-ribbon'][200],
    primary: colors['blue-ribbon'].DEFAULT,
    primaryDarker: colors['blue-ribbon'][900],
    success: colors.malachite.DEFAULT,
    dangerLighter: colors['burnt-sienna'][100],
    danger: colors['burnt-sienna'].DEFAULT,
    dangerDarker: colors['burnt-sienna'][900],
    warning: colors.sun.DEFAULT,
  },
  spacing: {...spacing},
  fontSizes: {...fontSizes},
  borderRadius: {...borderRadius},
  fontFamily: {
    PRIMARY: 'Inter-Regular',
    thin: 'Inter-Thin',
    extraLight: 'Inter-ExtraLight',
    light: 'Inter-Light',
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    semiBold: 'Inter-SemiBold',
    bold: 'Inter-Bold',
    extraBold: 'Inter-ExtraBold',
    black: 'Inter-Black',
  },
};

export default lightTheme;
