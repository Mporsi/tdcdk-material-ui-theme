import palette from '../palette/tdc-erhverv';
import { lineHeight, rem } from '../utils/styling-tools';

export default {
    fontFamily: ['TDC', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightMedium: 400,
    fontWeightBold: 700,
    h1: {
        color: palette.text.primary,
        fontWeight: 700,
        fontSize: rem(40),
        lineHeight: lineHeight(50),
    },
    h2: {
        color: palette.text.primary,
        fontWeight: 700,
        fontSize: rem(32),
        lineHeight: lineHeight(42),
    },
    h3: {
        color: palette.text.primary,
        fontWeight: 400,
        fontSize: rem(24),
        lineHeight: lineHeight(34),
    },
    h4: {
        color: palette.text.primary,
        fontWeight: 700,
        fontSize: rem(18),
        lineHeight: lineHeight(24),
    },
    h5: {
        color: palette.text.primary,
        fontWeight: 700,
        fontSize: rem(14),
        lineHeight: lineHeight(24),
    },
    body1: {
        color: palette.text.primary,
        fontWeight: 300,
        fontSize: rem(14),
        lineHeight: lineHeight(20),
    },
    body2: {
        color: palette.text.primary,
        fontWeight: 300,
        fontSize: rem(12),
        lineHeight: lineHeight(16),
    },
    button: {
        color: palette.text.primary,
        fontWeight: 700,
        fontSize: rem(13),
    },
    caption: {
        color: palette.text.secondary,
        fontSize: rem(12),
        lineHeight: lineHeight(16),
    },
};
