import { Story, Meta } from '@storybook/react/types-6-0';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import React from 'react';
import SettingsIcon from '@tdcerhverv/parrotfish/dist/icons/Icons/Settings.svg';
import InfoIcon from '@tdcerhverv/parrotfish/dist/icons/Icons/Info.svg';
import EditIcon from '@tdcerhverv/parrotfish/dist/icons/Icons/Edit.svg';
import DownloadIcon from '@tdcerhverv/parrotfish/dist/icons/Icons/File_download.svg';

export default {
    title: 'Inputs/IconButton',
    component: IconButton,
    argTypes: {
        color: { control: { options: ['default', 'primary', 'secondary'], type: 'inline-radio' } },
        disabled: { control: { options: [true, false], type: 'boolean' } },
        size: { control: { options: ['small', 'medium'], type: 'inline-radio' } },
    },
} as Meta;

const Template: Story<IconButtonProps> = (args) => (
    <IconButton {...args}>
        <SvgIcon fontSize="inherit">{args.children}</SvgIcon>
    </IconButton>
);

export const settingsButton = Template.bind({});
export const editButton = Template.bind({});
export const downloadButton = Template.bind({});
export const infoButton = Template.bind({});

settingsButton.args = {
    size: 'medium',
    children: <SettingsIcon />,
    color: 'default',
    disabled: false,
};

editButton.args = {
    children: <EditIcon />,
    color: 'default',
    disabled: false,
    size: 'medium',
};

downloadButton.args = {
    children: <DownloadIcon />,
    color: 'default',
    disabled: false,
    size: 'medium',
};

infoButton.args = {
    children: <InfoIcon />,
    color: 'default',
    disabled: false,
    size: 'medium',
};
