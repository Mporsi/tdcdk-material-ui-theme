import palette from '../palette/tdc-erhverv';

export const MuiSwitch = {
    root: {
        margin: '8px',
        width: 36,
        height: 20,
        padding: 0,
        borderRadius: 53,
        '&:hover': { color: palette.error.main },
    },
    colorPrimary: {
        '&$checked': {
            color: palette.success.light,
            '&:hover': {
                // backgroundColor: fade(palette.primary.main, palette.action.hoverOpacity),
                '@media (hover: none)': {
                    backgroundColor: 'transparent',
                },
            },
        },
        '&$disabled': {
            color: palette.grey[400],
        },
        '&$checked + $track': {
            backgroundColor: palette.primary.main,
        },
        '&$disabled + $track': {
            backgroundColor: palette.common.black,
        },
    },
    switchBase: {
        padding: 2,
        '&$checked': {
            transform: 'translateX(16px)',
            color: palette.common.white,
            '& + $track': {
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#52d869',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 16,
        height: 16,
        // color: palette.error.main,
        color: palette.common.white,
    },
    // track: {
    //     borderRadius: 26 / 2,
    //     border: `1px solid ${palette.grey[400]}`,
    //     backgroundColor: palette.grey[50],
    //     opacity: 1,
    //     // transition: transitions.create(['background-color', 'border']),
    // },
    checked: {},
    focusVisible: {},
    // root: {
    //     // width: '36px',
    //     // height: '20px',
    //     // borderRadius: '53px',
    // },
    // thumb: {
    //     color: palette.success.main,
    //     width: 16,
    //     height: 16,
    // },
    // track: {},
};

export const MuiSwitchProps = {
    color: 'primary' as 'default' | 'primary' | 'secondary',
};
