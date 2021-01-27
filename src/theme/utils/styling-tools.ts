/**
 * Convert a px value to rem.
 *
 * @param number The px value to convert to rem.
 * @param base the base size, defaults to 16px;
 */
export function rem(number: number | string, base = 16): string {
    if (typeof number === 'string') {
        number = parseInt(number, 10);
    }

    return `${number / base}rem`;
}

/**
 * Convert a px value to number
 *
 * @param {(number | string)} number
 * @param {number} [base=16]
 * @returns {number}
 */
export function lineHeight(number: number | string, base = 16): number {
    if (typeof number === 'string') {
        number = parseInt(number, 10);
    }

    return number / base;
}
