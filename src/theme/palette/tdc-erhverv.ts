import colors from '@tdcerhverv/parrotfish/dist/colors-design-token';
import { lighten } from '@material-ui/core/styles';
import { mix } from '../utils/color-tools';

const { black, white } = colors;

export default {
    common: {
        black,
        white,
    },
    primary: {
        contrastText: white,
        main: colors.primary,
        light: colors.primaryLight,
        dark: colors.primaryDark,
    },
    secondary: {
        contrastText: white,
        main: colors.secondary,
        light: lighten(colors.secondary, 0.2),
        dark: colors.secondaryDark,
    },
    error: {
        contrastText: white,
        main: colors.error,
        light: colors.errorMediumLight,
        dark: colors.errorDark,
    },
    warning: {
        contrastText: white,
        main: colors.warning,
        light: colors.warningMediumLight,
        dark: colors.warningDark,
    },
    info: {
        contrastText: white,
        main: colors.info,
        light: colors.infoMediumLight,
        dark: colors.infoDark,
    },
    success: {
        contrastText: white,
        main: colors.success,
        light: colors.successMediumLight,
        dark: colors.successDark,
    },
    grey: {
        50: mix(white, colors.greyLightest),
        100: colors.greyLightest, // #F1F1F2
        200: mix(colors.greyLightest, colors.greyLight),
        300: colors.greyLight, // #DADCDD
        400: colors.greyMediumLight, // #B5B8BA
        500: colors.greyMediumDark, // #919598
        600: colors.greyDark, // #6C7275
        700: mix(colors.greyDark, colors.greyDarkest),
        800: colors.greyDarkest, //#474E53
        900: mix(black, colors.greyDarkest),
    },
    text: {
        primary: black,
        secondary: colors.greyDark,
        disabled: colors.greyMediumLight,
        hint: colors.greyMediumLight,
    },
    divider: colors.greyLight,
    background: {
        default: white,
        paper: white,
    },
};
