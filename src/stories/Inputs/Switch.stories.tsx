import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import Switch, { SwitchProps } from '@material-ui/core/Switch';
import { FormControl, FormControlLabel, FormLabel } from '@material-ui/core';

export default {
    title: 'Inputs/Switch',
    component: Switch,
} as Meta;

const switchTemplate: Story<SwitchProps> = (args) => <Switch {...args} />;
const labelledSwitchTemplate: Story<SwitchProps> = (args) => (
    <FormControlLabel control={<Switch {...args} />} label="Switch" />
);
const switchGroupTemplate: Story<SwitchProps> = (args) => (
    <FormControl>
        <FormLabel>Switch Group</FormLabel>
        <FormControlLabel control={<Switch {...args} />} label="Switch" />
        <FormControlLabel control={<Switch {...args} />} label="Switch" />
        <FormControlLabel control={<Switch {...args} />} label="Switch" />
    </FormControl>
);

export const singleSwitch = switchTemplate.bind({});
export const labelledSwitch = labelledSwitchTemplate.bind({});
export const switchGroup = switchGroupTemplate.bind({});

singleSwitch.args = {
    disabled: false,
};
labelledSwitch.args = {};
switchGroup.args = {};
