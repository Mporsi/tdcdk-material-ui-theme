import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

export default {
    title: 'DataDisplay/Tooltip',
    component: Tooltip,
} as Meta;

const TooltipTemplate: Story<TooltipProps> = (args) => (
    <Tooltip {...args}>
        <Button>Hover me</Button>
    </Tooltip>
);

export const tooltip = TooltipTemplate.bind({});

tooltip.args = { title: "I'm a tooltip" };
