import palette from '../palette/tdc-erhverv';
import { rem } from '../utils/styling-tools';

export const MuiButton = {
    root: {
        height: '2.5rem',
        fontWeight: 700,
        lineHeight: 'auto',
    },

    disabled: {},
    focusVisible: {},
    iconSizeMedium: {
        '& > svg': {
            height: '1rem',
            width: '1rem',
            fill: palette.common.white,
            color: palette.common.white,
        },
    },
    contained: {
        boxShadow: 'none',
        backgroundColor: palette.primary.main,
        color: palette.common.white,
        '&$focusVisible': {
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
        },
        '&$disabled': {
            backgroundColor: palette.grey[400],
            color: palette.common.white,
        },

        '&:hover': {
            boxShadow: 'none',
            backgroundColor: palette.primary.light,
            '@media (hover: none)': {
                backgroundColor: palette.primary.main,
            },
        },
    },
    containedPrimary: {
        backgroundColor: palette.success.main,
        '&:hover': {
            backgroundColor: palette.success.light,
            '@media (hover: none)': {
                backgroundColor: palette.success.main,
            },
        },
    },
    containedSecondary: {
        backgroundColor: palette.error.main,
        '&:hover': {
            backgroundColor: palette.error.light,
            '@media (hover: none)': {
                backgroundColor: palette.error.main,
            },
        },
    },

    outlined: {
        color: palette.grey[800],
        borderColor: palette.grey[800],
        '&$disabled': {},

        '&:hover': {
            borderColor: palette.grey[800],
            backgroundColor: palette.grey[100],
        },
    },
    outlinedPrimary: {
        color: palette.success.main,
        borderColor: palette.success.main,
        '&:hover': {
            borderColor: palette.success.main,
            backgroundColor: palette.grey[100],
        },
    },
    outlinedSecondary: {
        color: palette.error.main,
        borderColor: palette.error.main,
        '&:hover': {
            borderColor: palette.error.main,
            backgroundColor: palette.grey[100],
        },
    },
    text: {
        color: palette.grey[800],
        '&$disabled': {},

        '&:hover': {
            backgroundColor: palette.grey[100],
        },
    },
    textPrimary: {
        color: palette.success.main,
        '&$disabled': {},

        '&:hover': {
            backgroundColor: palette.grey[100],
        },
    },
    textSecondary: {
        color: palette.error.main,
        '&$disabled': {},

        '&:hover': {
            backgroundColor: palette.grey[100],
        },
    },
};
export const MuiIconButton = {
    root: {
        flex: '0 0 auto',
        fontSize: rem(20),
        padding: 11,
        borderRadius: '50%',
        overflow: 'visible', // Explicitly set the default value to solve a bug on IE 11.
        fill: palette.grey[800],
        color: palette.grey[800],

        '&:hover': {
            backgroundColor: palette.grey[200],
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
        '&:focus': {
            backgroundColor: palette.grey[400],
        },

        '&$disabled': {
            backgroundColor: 'transparent',
            fill: palette.grey[400],
            color: palette.grey[400],
        },
    },
    /* Styles applied to the root element if `edge="start"`. */
    edgeStart: {
        marginLeft: -12,
        '$sizeSmall&': {
            marginLeft: -3,
        },
    },
    /* Styles applied to the root element if `edge="end"`. */
    edgeEnd: {
        marginRight: -12,
        '$sizeSmall&': {
            marginRight: -3,
        },
    },
    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
        fill: 'inherit',
        color: 'inherit',
    },
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
        fill: palette.primary.main,
        color: palette.primary.main,
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
        fill: palette.secondary.main,
        color: palette.secondary.main,
    },
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
        padding: 8,
        fontSize: rem(16),
    },
    /* Styles applied to the children container element. */
    label: {
        width: '100%',
        display: 'flex',
        alignItems: 'inherit',
        justifyContent: 'inherit',
    },
};
export const MuiButtonProps = {
    variant: 'contained' as 'text' | 'outlined' | 'contained',
};
