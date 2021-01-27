import palette from '../palette/tdc-erhverv';
import { rem } from '../utils/styling-tools';
export const MuiTooltip = {
    tooltip: {
        backgroundColor: palette.common.black,
        borderRadius: '3px',
        font: 'Roboto, sans-serif',
        paddingTop: rem(6),
        paddingBottom: rem(6),
        paddingLeft: rem(8),
        paddingRight: rem(8),
        fontSize: rem(14),
        fontWeight: 400,
        lineHeight: rem(20),
    },
    arrow: { color: palette.common.black },
};
export const MuiTooltipProps = { arrow: true };
