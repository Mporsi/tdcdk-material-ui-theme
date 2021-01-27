import palette from '../../palette/tdc-erhverv';
import typography from '../../typography/tdc-erhverv-selfservice';
import { rem } from '../../utils/styling-tools';

export const MuiOutlinedInput = {
    root: {
        minHeight: rem(48),
        minWidth: rem(32),
        fontFamily: 'Roboto, sans-serif',
        fontWeight: typography.fontWeightRegular,
        // position: 'relative',
        borderRadius: '3px',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
            '&:hover $notchedOutline': {
                borderColor: palette.grey[600],
            },
        },
        '&$focused $notchedOutline': {
            borderColor: palette.primary.light,
            borderWidth: 2,
        },
        '&$error $notchedOutline': {
            borderColor: palette.error.main,
            borderWidth: 2,
        },
        '&$disabled $notchedOutline': {
            borderColor: palette.grey[400],
        },
    },

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {
        paddingLeft: 14,
    },
    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {
        paddingRight: 14,
    },
    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},
    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},
    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
        padding: '18.5px 14px',
        '&$marginDense': {
            paddingTop: 10.5,
            paddingBottom: 10.5,
        },
    },
    /* Styles applied to the `NotchedOutline` element. */
    notchedOutline: {
        borderColor: palette.grey[600],
        borderRadius: '3px',
        '& legend': {
            fontSize: rem(12),
            letterSpacing: rem(0.4),
        },
    },
    /* Styles applied to the `input` element. */
    input: {
        padding: '18.5px 14px',
        '&:-webkit-autofill': {
            borderRadius: 'inherit',
        },
    },
    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
        paddingTop: 10.5,
        paddingBottom: 10.5,
    },
    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
        padding: 0,
    },
    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {
        paddingLeft: 0,
    },
    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {
        paddingRight: 0,
    },
};
