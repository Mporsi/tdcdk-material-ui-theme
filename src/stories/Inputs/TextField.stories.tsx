import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';

import ErrorMessage from '../../ErrorMessage';

import InputAdornment from '@material-ui/core/InputAdornment';
import SvgIcon from '@material-ui/core/SvgIcon';

import Search from '@tdcerhverv/parrotfish/dist/icons/Icons/Search.svg';
import { ProgressIndicatorCircular } from '@tdcerhverv/progress-indicator';
import CharacterCount from '../../CharacterCount';

export default {
    title: 'Inputs/TextField',
    component: TextField,
    argTypes: { label: { control: 'text' }, error: { control: 'boolean' }, disabled: { control: 'boolean' } },
} as Meta;

const TextFieldTemplate: Story<TextFieldProps> = (args) => (
    <TextField
        {...args}
        onChange={(e) => {
            args.value = e.target.value;
        }}
        helperText={args.error && <ErrorMessage />}
    />
);
const SelectTemplate: Story<TextFieldProps> = (args) => (
    <>
        <TextField
            {...args}
            select
            label="Company"
            onChange={(e) => {
                args.value = e.target.value;
            }}
            helperText={args.error ? <ErrorMessage /> : 'Select Company'}
        >
            <MenuItem key={1} value={1}>
                Oscorp
            </MenuItem>
            <MenuItem key={2} value={2}>
                LexCorp
            </MenuItem>
            <MenuItem key={3} value={3}>
                Stark Industries
            </MenuItem>
        </TextField>
    </>
);

const CharacterCountTemplate: Story<TextFieldProps> = (args) => (
    <>
        <h3>Edit the value in the controls </h3>
        <TextField
            {...args}
            onChange={(e) => {
                args.value = e.target.value;
            }}
            helperText={
                <CharacterCount
                    count={String(args.value).length}
                    maximum={10}
                    setError={(value) => {
                        args.error = value;
                    }}
                />
            }
        />
    </>
);

export const basicTextField = TextFieldTemplate.bind({});
export const select = SelectTemplate.bind({});
export const searchInputLoading = TextFieldTemplate.bind({});
export const characterCount = CharacterCountTemplate.bind({});

basicTextField.args = {
    label: 'Label',
    error: false,
    disabled: false,
    multiline: false,
    rows: 4,
};

select.args = {
    disabled: false,
    error: false,
};

searchInputLoading.args = {
    label: 'Search',
    error: false,
    disabled: false,
    InputProps: {
        startAdornment: (
            <InputAdornment position="start">
                <SvgIcon fontSize="inherit">
                    <Search />
                </SvgIcon>
            </InputAdornment>
        ),
        endAdornment: (
            <InputAdornment position="end">
                <ProgressIndicatorCircular size={18} />
            </InputAdornment>
        ),
    },
};

characterCount.args = {
    label: 'Input with character count',
    error: false,
    disabled: false,
    value: '',
};
