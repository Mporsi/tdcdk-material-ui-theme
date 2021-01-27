import palette from '../../palette/tdc-erhverv';
import typography from '../../typography/tdc-erhverv-selfservice';
import { rem } from '../../utils/styling-tools';

export const MuiInputLabel = {
    root: {
        color: palette.grey[600],
        fontFamily: 'Roboto, sans-serif',
        fontSize: rem(16),
        fontWeight: typography.fontWeightRegular,
        '&$focused': {
            color: palette.primary.light,
        },
        '&$error': {
            color: palette.error.main,
        },
        '&$disabled': {
            color: palette.grey[400],
        },
    },
    shrink: {
        //Default styling changes font size to 75% scale, i.e. 12px
        letterSpacing: rem(0.4),
        lineHeight: rem(16),
    },
};
