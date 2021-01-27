import { Story, Meta } from '@storybook/react/types-6-0';
import Stepper, { StepperProps } from '@material-ui/core/Stepper';
import HorizontalLinearStepper from './Stepper';
import React from 'react';

export default {
    title: 'Navigation/Stepper',
    component: Stepper,
    argTypes: {
        activeStep: { control: { options: [0, 1, 2, 3], type: 'select' } },
        orientation: { control: { options: ['vertical', 'horizontal'], type: 'select' } },
    },
} as Meta;

const Template: Story<StepperProps> = (args) => <HorizontalLinearStepper {...args} />;

export const vertical = Template.bind({});
export const horizontal = Template.bind({});

vertical.args = {
    orientation: 'vertical',
};

horizontal.args = {
    orientation: 'horizontal',
};
