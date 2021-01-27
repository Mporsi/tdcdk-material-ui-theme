import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Slider, { SliderProps } from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';

export default {
    title: 'Inputs/Slider',
    component: Slider,
} as Meta;

const SliderTemplate: Story<SliderProps> = (args) => (
    <div style={{ padding: '15px', margin: '15px' }}>
        <Slider {...args} />
    </div>
);
const InputSliderTemplate: Story<SliderProps> = (args) => {
    const [value, setValue] = useState<number | string | Array<number | string>>(30);

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>, newValue: number | number[]): void => {
        setValue(newValue);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };
    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item xs>
                <Slider
                    value={typeof value === 'number' ? value : 0}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                    {...args}
                />
            </Grid>
            <Grid item>
                <OutlinedInput
                    value={value}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                        step: 10,
                        min: 0,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
            </Grid>
        </Grid>
    );
};
const InputRangeSliderTemplate: Story<SliderProps> = (args) => {
    const [value, setValue] = useState<number | string | Array<number | string>>([30, 70]);

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>, newValue: number | number[]): void => {
        setValue(newValue);
    };

    const handleLeftInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue([event.target.value === '' ? '' : Number(event.target.value), value[1]]);
    };
    const handleRightInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue([value[0], event.target.value === '' ? '' : Number(event.target.value)]);
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };
    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item>
                <OutlinedInput
                    value={value[0]}
                    onChange={handleLeftInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                        step: 10,
                        min: 0,
                        max: value[1],
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
            </Grid>{' '}
            <Grid item xs>
                <Slider value={value} onChange={handleSliderChange} {...args} />
            </Grid>
            <Grid item>
                <OutlinedInput
                    value={value[1]}
                    onChange={handleRightInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                        step: 10,
                        min: value[0],
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
            </Grid>
        </Grid>
    );
};

export const slider = SliderTemplate.bind({});
export const discreteSlider = SliderTemplate.bind({});
export const rangeSlider = SliderTemplate.bind({});
export const inputSlider = InputSliderTemplate.bind({});
export const inputRangeSlider = InputRangeSliderTemplate.bind({});

slider.args = {
    defaultValue: 50,
    valueLabelDisplay: 'auto',
};
discreteSlider.args = {
    defaultValue: 50,
    valueLabelDisplay: 'auto',
    marks: true,
    max: 100,
    min: 0,
    step: 5,
};

rangeSlider.args = {
    max: 10,
    min: 0,
    value: [3, 7],
};
