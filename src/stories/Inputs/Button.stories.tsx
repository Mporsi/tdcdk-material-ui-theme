import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import Settings from '@tdcerhverv/parrotfish/dist/icons/Icons/Settings.svg';
import { ProgressIndicatorCircular } from '@tdcerhverv/progress-indicator';

export default {
    title: 'Inputs/Button',
    component: Button,
    argTypes: {
        children: { control: 'text' },
        variant: { control: { options: ['contained', 'outlined', 'text'], type: 'inline-radio' } },
        color: { control: { options: ['default', 'primary', 'secondary'], type: 'inline-radio' } },
        disabled: { control: { options: [true, false], type: 'boolean' } },
    },
} as Meta;

const singleButton: Story<ButtonProps> = (args) => <Button {...args} />;
const manyButtons: Story<Array<ButtonProps>> = (args) => {
    const arr: Array<ButtonProps> = [];
    for (const arg in args) {
        arr.push(args[arg]);
    }

    return (
        <div>
            {arr.map((btn, i) => {
                return (
                    <React.Fragment key={i}>
                        <Typography variant="h3">{btn.children}</Typography>
                        <Button {...btn}>Button</Button>
                    </React.Fragment>
                );
            })}
        </div>
    );
};
const loadingButtonTemplate: Story<ButtonProps> = () => {
    const [loading, setLoading] = useState(false);
    const handleClick = () => setLoading(!loading);
    const startIcon = loading ? <ProgressIndicatorCircular color="inherit" size={16} /> : null;
    return (
        <>
            <p>A ProgressIndicatorCircular component can be added to make a loading button</p>
            <Button startIcon={startIcon} onClick={handleClick} disabled={loading}>
                {loading ? 'Loading' : 'Click Me'}
            </Button>
            {loading && (
                <Button variant="text" color="secondary" onClick={() => setLoading(false)}>
                    Stop Loading
                </Button>
            )}
        </>
    );
};
export const interactiveButton = singleButton.bind({});
export const exampleButtons = manyButtons.bind({});
export const loadingButton = loadingButtonTemplate.bind({});

interactiveButton.args = {
    children: 'Button',
    variant: 'contained',
    color: 'default',
    disabled: false,
};
exampleButtons.args = [
    {
        children: 'Default Button',
    },
    {
        startIcon: <Settings />,
        children: 'Default Button with Icon',
    },
    {
        disabled: true,
        children: 'Default Button - disabled',
    },
    {
        color: 'primary',
        children: 'Positive Button',
    },
    {
        color: 'secondary',
        children: 'Negative Button',
    },

    {
        variant: 'outlined',
        children: 'Outlined Button',
    },
    {
        variant: 'outlined',
        disabled: true,
        children: 'Outlined Button - disabled',
    },
    {
        children: 'Outlined Button with Icon',
        variant: 'outlined',
        startIcon: <Settings style={{ fill: 'grey' }} />,
    },
    {
        variant: 'text',
        children: 'Text Button',
    },
    {
        variant: 'text',
        disabled: true,
        children: 'Text Button - disabled',
    },
    {
        children: 'Text Button with Icon',
        variant: 'text',
        startIcon: <Settings style={{ fill: 'grey' }} />,
    },
];
loadingButton.args = {
    variant: 'contained',
    color: 'default',
    disabled: false,
};
