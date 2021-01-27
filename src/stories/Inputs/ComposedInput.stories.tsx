import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import Select, { SelectProps } from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput, { OutlinedInputProps } from '@material-ui/core/OutlinedInput';
import InputLabel, { InputLabelProps } from '@material-ui/core/InputLabel';
import FormControl, { FormControlProps } from '@material-ui/core/FormControl';
import FormHelperText, { FormHelperTextProps } from '@material-ui/core/FormHelperText';

export default {
    title: 'Inputs/ComposedInput',
    argTypes: {},
} as Meta;

interface StoryProps {
    outlinedInputProps: OutlinedInputProps;
    inputLabelProps: InputLabelProps;
    formControlProps: FormControlProps;
    formHelperTextProps: FormHelperTextProps;
    selectProps: SelectProps;
}

const ComposedInputTemplate: Story<StoryProps> = (args) => (
    <FormControl {...args.formControlProps}>
        <InputLabel htmlFor="componsedInput" {...args.inputLabelProps}>
            Label
        </InputLabel>
        <OutlinedInput id="componsedInput" label="Label" {...args.outlinedInputProps}></OutlinedInput>
        <FormHelperText {...args.formHelperTextProps}>Helper Text Test</FormHelperText>
    </FormControl>
);

const ComposedSelectTemplate: Story<StoryProps> = (args) => (
    <FormControl {...args.formControlProps}>
        <InputLabel htmlFor="demo-simple-select" {...args.inputLabelProps}>
            Label
        </InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>{' '}
        <FormHelperText {...args.formHelperTextProps}>Helper Text Test</FormHelperText>
    </FormControl>
);

export const ComposedInput = ComposedInputTemplate.bind({});
export const ComposedSelect = ComposedSelectTemplate.bind({});

ComposedInput.args = {
    formControlProps: {},
    inputLabelProps: {},
    outlinedInputProps: {},
    formHelperTextProps: {},
};
