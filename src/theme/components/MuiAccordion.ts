import { UnwrappedIcon as ExpandDownIcon } from '../../ExpandDownIcon';
import palette from '../palette/tdc-erhverv';
import typography from '../typography/tdc-erhverv-selfservice';
import { fade } from '@material-ui/core/styles/colorManipulator';

export const MuiAccordion = {
    root: {
        border: 'solid 1px',
        borderColor: palette.grey[300],
        boxShadow: 'none',
        '&:before': {
            backgroundColor: 'transparent',
        },
        '&:first-child': {
            '& $summary': {
                borderTopLeftRadius: '3px',
                borderTopRightRadius: '3px',
            },
        },
        '&:last-child': {
            '& $contentPanel': {
                borderBottomLeftRadius: '3px',
                borderBottomRightRadius: '3px',
            },
            '& $summary': {
                borderBottomLeftRadius: '3px',
                borderBottomRightRadius: '3px',
                '&$expanded': {
                    borderBottomLeftRadius: '0px',
                    borderBottomRightRadius: '0px',
                },
            },
        },
        '&$expanded': {
            borderColor: palette.grey[800],
            boxShadow: `0px 3px 6px 0px ${fade(palette.common.black, 0.05)}, 0px 2px 4px 0px ${fade(
                palette.common.black,
                0.05,
            )}`,
        },
    },
    expanded: {},
};
export const MuiAccordionDetails = {
    root: {
        color: palette.grey[600],
        fontFamily: typography.fontFamily,
        fontWeight: typography.fontWeightRegular,
        fontSize: 14,
        lineHeight: '16px',
        letterSpacing: 0.25,
    },
};
export const MuiAccordionSummary = {
    root: {
        '&$focused': {
            backgroundColor: palette.grey[100],
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
            borderBottom: 'none',
        },
    },
    content: {
        color: palette.grey[800],
        fontWeight: typography.fontWeightBold,
        fontSize: '14px',
        lineHeight: '18px',
        letterSpacing: '0.1px',
        fontFamily: typography.fontFamily,
    },
    expandIcon: {
        color: palette.grey[800],
        fill: palette.grey[800],
    },
    expanded: {
        // borderColor: palette.grey[800],
    },
};

export const MuiAccordionSummaryProps = {
    expandIcon: ExpandDownIcon,
};
