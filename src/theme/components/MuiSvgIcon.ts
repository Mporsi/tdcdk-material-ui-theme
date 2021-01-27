import palette from '../palette/tdc-erhverv';
import { rem } from '../utils/styling-tools';
export const MuiSvgIcon = {
    root: {
        width: 'inherit',
        height: 'inherit',
        fill: 'currentColor',
        fontSize: 'inherit',
    },
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
        color: palette.primary.main,
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
        color: palette.secondary.main,
    },
    /* Styles applied to the root element if `color="action"`. */
    colorAction: {
        color: palette.grey[800],
    },
    /* Styles applied to the root element if `color="error"`. */
    colorError: {
        color: palette.error.main,
    },
    /* Styles applied to the root element if `color="disabled"`. */
    colorDisabled: {
        color: palette.grey[400],
    },
    /* Styles applied to the root element if `fontSize="inherit"`. */
    fontSizeInherit: {
        fontSize: 'inherit',
    },
    /* Styles applied to the root element if `fontSize="small"`. */
    fontSizeSmall: {
        fontSize: rem(10),
    },
    /* Styles applied to the root element if `fontSize="large"`. */
    fontSizeLarge: {
        fontSize: rem(35),
    },
};
