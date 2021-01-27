import palette from '../palette/tdc-erhverv';

import ExpandDownIcon from '../../ExpandDownIcon';
export const MuiSelect = {
    select: {
        '&:focus': {
            backgroundColor: palette.common.white,
        },
    },
    iconOutlined: {
        right: '12px',
        width: '16px',
    },
    selectMenu: {},
};

export const MuiSelectProps = {
    variant: 'outlined' as 'filled' | 'outlined' | 'standard',
    IconComponent: ExpandDownIcon,
};
