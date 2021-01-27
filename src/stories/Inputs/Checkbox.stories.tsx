import { Story, Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';

import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@material-ui/core';
import ErrorMessage from '../../ErrorMessage';

export default {
    title: 'Inputs/Checkbox',
    component: Checkbox,
    argTypes: {
        disabled: { control: { options: [true, false], type: 'boolean' } },
        required: { control: { options: [true, false], type: 'boolean' } },
    },
} as Meta;

interface CheckboxGroupProps {
    error: Node;
    formLabel: string;
    itemLabels: Array<string>;
    items: Array<CheckboxProps>;
}

const checkboxTemplate: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

const formTemplate: Story<CheckboxGroupProps> = () => {
    const [formState, setFormState] = useState({
        one: true,
        two: false,
        three: false,
    });
    const { one, two, three } = formState;
    const error = [one, two, three].filter((v) => v).length !== 2;

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.checked });
    };

    return (
        <FormControl required error={error} component="fieldset">
            <FormLabel component="legend">Select at least two:</FormLabel>
            <FormGroup>
                <FormControlLabel
                    checked={one}
                    name="one"
                    control={<Checkbox />}
                    onChange={handleChange}
                    label="First"
                />
                <FormControlLabel
                    checked={two}
                    name="two"
                    control={<Checkbox />}
                    onChange={handleChange}
                    label="Second"
                />
                <FormControlLabel
                    checked={three}
                    name="three"
                    control={<Checkbox />}
                    onChange={handleChange}
                    label="Third"
                />
            </FormGroup>
            {error && (
                <FormHelperText>
                    <ErrorMessage />
                </FormHelperText>
            )}
        </FormControl>
    );
};

export const checkbox = checkboxTemplate.bind({
    disabled: false,
    required: false,
});

export const checkboxGroup = formTemplate.bind({});
