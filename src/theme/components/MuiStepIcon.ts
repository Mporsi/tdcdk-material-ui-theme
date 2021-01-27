import palette from '../palette/tdc-erhverv';

export const MuiStepIcon = {
    root: {
        color: palette.grey[400],
        '&$active': {
            color: palette.primary.main,
        },
        '&$completed': {
            color: palette.success.main,
        },
        '&$error': {
            color: palette.error.main,
        },
    },
    text: {
        color: palette.grey[600],
    },
    active: {},
    completed: {},
    error: {},
};

export const MuiStepIconProps = {
    active: false,
};
