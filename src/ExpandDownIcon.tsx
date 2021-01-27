import React, { ReactElement } from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import Expand_down from '@tdcerhverv/parrotfish/dist/icons/Icons/Expand_down.svg';

export function ExpandDownIcon(props: SvgIconProps): ReactElement {
    return (
        <SvgIcon {...props}>
            <Expand_down />,
        </SvgIcon>
    );
}

export const UnwrappedIcon = <Expand_down style={{ fill: 'grey', width: '12px' }} />;

export default ExpandDownIcon;
