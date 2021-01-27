import { decomposeColor, recomposeColor, rgbToHex, hslToRgb } from '@material-ui/core/styles';

/* 
Copied from Material UI lib.

type ColorFormat = 'rgb' | 'rgba' | 'hsl' | 'hsla';
interface ColorObject {
  type: ColorFormat;
  values: [number, number, number] | [number, number, number, number];
  colorSpace?: 'srgb' | 'display-p3' | 'a98-rgb' | 'prophoto-rgb' | 'rec-2020';
}
*/

export function mix(color1: string, color2: string): string {
    const { values: values1, type: type1 } = decomposeColor(color1);
    const { values: values2, type: type2 } = decomposeColor(color2);

    if (type1 !== type2) {
        throw Error('Cannot mix different color types. Please provide same color type, hex, rgb etc.');
    }

    const isHex = /^\#/.test(color1);
    const isHsl = /hsl/.test(type1);

    const newValues = values1;
    for (let i = 0; i < values1.length; i++) {
        const newValue = (values1[i] + values2[i]) / 2;
        newValues[i] = i === 3 ? newValue : Math.round(newValue);
    }

    const mixColor = recomposeColor({
        type: type1,
        values: newValues,
    });

    return isHex ? rgbToHex(isHsl ? hslToRgb(mixColor) : mixColor) : mixColor;
}
