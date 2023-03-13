"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPreset = void 0;
/**
 * @description:
 * @param {Partial<{
 *    unit: string;
 * }>} params
 * @return {*}
 */
function createPreset({ unit = 'px' } = {}) {
    /**
     * @description:
     * @param {{
     *  min: number;
     *  max: number;
     *  step?: number;
     *
     * }}
     */
    const range = ({ min, max, step = 1, iterator = (num) => [num, num] }) => {
        const result = {};
        for (let num = min; num < max; num += step) {
            const [key, value] = iterator(num);
            result[key] = value;
        }
        return result;
    };
    const getPxValue = (num) => `${num}${unit}`;
    /**
     * @description: 生成一段unit单位
     * @param {number} min
     * @param {number} max
     * @param {number} step
     * @return {*}
     */
    const getPxRange = (min, max, step = 1) => range({
        min,
        max,
        step,
        iterator: (num) => [num, getPxValue(num)]
    });
    const preset = {
        theme: {
            spacing: getPxRange(0, 100, 0.5),
        },
        width: Object.assign(Object.assign({}, getPxRange(0, 800)), { auto: 'auto', full: '100%', screen: '100vw', min: 'min-content', max: 'max-content', fit: 'fit-content' }),
        minWidth: {
            0: '0px',
            full: '100%',
            min: 'min-content',
            max: 'max-content',
            fit: 'fit-content',
        },
        maxWidth: {
            none: 'none',
            0: '0px',
            full: '100%',
            min: 'min-content',
            max: 'max-content',
            fit: 'fit-content',
        },
        height: Object.assign(Object.assign({}, getPxRange(0, 800)), { auto: 'auto', full: '100%', screen: '100vh', min: 'min-content', max: 'max-content', fit: 'fit-content' }),
        minHeight: Object.assign(Object.assign({}, getPxRange(0, 800)), { full: '100%', screen: '100vh', min: 'min-content', max: 'max-content', fit: 'fit-content' }),
        maxHeight: Object.assign(Object.assign({}, getPxRange(0, 800)), { none: 'none', full: '100%', screen: '100vh', min: 'min-content', max: 'max-content', fit: 'fit-content' }),
        padding: Object.assign(Object.assign({}, getPxRange(0, 200, 0.5)), { auto: 'auto' }),
        margin: Object.assign(Object.assign({}, getPxRange(-200, 200, 0.5)), { auto: 'auto' }),
        borderRadius: Object.assign(Object.assign({}, getPxRange(1, 100, 0.5)), { inherit: 'inherit', none: 0, half: '50%', full: '9999px' }),
        opacity: range({
            min: 0,
            max: 100,
            iterator: (num) => [num, num / 100],
        }),
        fontSize: Object.assign(Object.assign({}, range({
            min: 1,
            max: 200,
            step: 0.5,
            iterator: (num) => [num, [getPxValue(num), {
                        lineHeight: 1,
                    }]],
        })), { 0: '0px', inherit: 'inherit', none: '0px' }),
        lineHeight: Object.assign(Object.assign({}, getPxRange(1, 200, 0.5)), { none: 1, tight: 1.25, snug: 1.375, normal: 1.5, relaxed: 1.625, loose: 2 }),
        zIndex: Object.assign(Object.assign(Object.assign({}, range({ min: -20, max: 50 })), range({ min: 2000, max: 2100 })), { none: 0, 
            // 用于 loading 等层级超高的情况
            top: '99999', auto: 'auto' }),
    };
    return preset;
}
exports.createPreset = createPreset;
