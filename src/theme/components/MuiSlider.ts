import { palette } from '../themes/tdc-erhverv';

export const MuiSlider = {
    root: {},
    marked: {},
    mark: {
        color: palette.grey[400],
        opacity: 1,
        width: '2px',
        height: '8px',
        marginTop: '-3px',
    },
    markActive: {
        backgroundColor: palette.primary.light,
        opacity: 1,
    },
    rail: {
        color: palette.grey[400],
        opacity: 1,
        height: '4px',
        marginTop: '-1px',
    },
    track: {
        color: palette.primary.light,
        height: '4px',
        marginTop: '-1px',
    },
    thumb: {
        backgroundColor: palette.common.white,
        border: `3px solid ${palette.primary.light}`,
        marginTop: '-9px',
        height: '20px',
        width: '20px',
    },
    valueLabel: {
        // left: '0px',
        '& > *': {
            borderRadius: '3px',
            transform: 'none',
            '& > *': {
                transform: 'none',
            },
        },
    },
};
