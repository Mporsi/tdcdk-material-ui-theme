import { Story, Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import { FormControl, FormControlLabel, FormLabel, RadioGroup } from '@material-ui/core';

export default {
    title: 'Inputs/Radio',
    component: Radio,
} as Meta;

const RadioButtonTemplate: Story<RadioProps> = () => {
    const [value, setValue] = useState('option1');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Options</FormLabel>
            <RadioGroup aria-label="Options" name="option1" value={value} onChange={handleChange}>
                <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
                <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
                <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
            </RadioGroup>
        </FormControl>
    );
};

export const radioButton = RadioButtonTemplate.bind({});
