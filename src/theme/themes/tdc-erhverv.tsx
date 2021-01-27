import palette from '../palette/tdc-erhverv';
import typography from '../typography/tdc-erhverv-selfservice';

import { createMuiTheme } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

import {
    MuiAccordion,
    MuiAccordionSummary,
    MuiAccordionDetails,
    MuiAccordionSummaryProps,
} from '../components/MuiAccordion';
import { MuiButton, MuiButtonProps, MuiIconButton } from '../components/MuiButton';
import { MuiCheckboxProps } from '../components/MuiCheckbox';
import { MuiMenu } from '../components/MuiMenu';
import { MuiOutlinedInput, MuiInputLabel, MuiFormHelperText } from '../components/MuiTextField';
import { MuiRadio, MuiRadioProps } from '../components/MuiRadioButton';
import { MuiSelect, MuiSelectProps } from '../components/MuiSelect';
import { MuiSlider } from '../components/MuiSlider';
import { MuiStepIcon, MuiStepIconProps } from '../components/MuiStepIcon';
import { MuiSwitch, MuiSwitchProps } from '../components/MuiSwitch';
import { MuiTooltip, MuiTooltipProps } from '../components/MuiTooltip';

const tdcLight: CSSProperties = {
    fontFamily: 'TDC',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 100,
    src: `url(//s.c.dk/fonts/TDC_lite.woff2) format('woff2')`,
};

const tdcRegular = {
    ...tdcLight,
    fontWeight: 400,
    src: `url(//s.c.dk/fonts/TDC_regular.woff2) format('woff2')`,
};

const tdcBold = {
    ...tdcLight,
    fontWeight: 700,
    src: `url(//s.c.dk/fonts/TDC_bold.woff2) format('woff2')`,
};

const props = {
    MuiAccordionSummary: MuiAccordionSummaryProps,
    MuiButtonBase: {
        disableRipple: true,
    },
    MuiCheckbox: MuiCheckboxProps,
    MuiStepIcon: MuiStepIconProps,
    MuiButton: MuiButtonProps,
    MuiFormControl: {
        variant: 'outlined' as 'filled' | 'outlined' | 'standard',
    },
    MuiInputLabel: {
        variant: 'outlined' as 'filled' | 'outlined' | 'standard',
    },
    MuiTextField: {
        variant: 'outlined' as 'filled' | 'outlined' | 'standard',
    },
    MuiRadio: MuiRadioProps,
    MuiSelect: MuiSelectProps,
    MuiSwitch: MuiSwitchProps,
    MuiTooltip: MuiTooltipProps,
};

export const theme = createMuiTheme({
    typography,
    overrides: {
        MuiAccordion,
        MuiAccordionSummary,
        MuiAccordionDetails,
        MuiButton,
        MuiCssBaseline: {
            '@global': {
                '@font-face': [tdcLight, tdcRegular, tdcBold],
            },
        },
        MuiFormLabel: {
            asterisk: {
                display: 'none', //don't show asterisks on required forms (required is the default)
            },
        },
        MuiFormHelperText,
        MuiIconButton,
        MuiInputLabel,
        MuiMenu,
        MuiOutlinedInput,
        MuiRadio,
        MuiSelect,
        MuiSlider,
        MuiStepIcon,
        MuiSwitch,
        MuiTooltip,
    },
    palette,
    props,
});

export { palette };
export default theme;
