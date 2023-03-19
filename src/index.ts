/**
 * @description: 
 * @param {Partial<{
 *    unit: string;
 * }>} params
 * @return {*}
 */
export function createPreset({ unit = 'px' } = {}) {
  /**
   * @description: 
   * @param {{
   *  min: number;
   *  max: number;
   *  step?: number;
   * 
   * }}
   */
  const range = ({ min, max, step = 1, iterator = (num: number) => [num, num] }: {
    min: number,
    max: number,
    step?: number,
    iterator?: Function,
  }) => {
    const result: Record<number, string> = {};
    for (let num = min; num < max; num += step) {
      const [key, value] = iterator(num);
      result[key] = value;
    }

    return result;
  }

  const getPxValue = (num: number) => `${num}${unit}`;

  /**
   * @description: 生成一段unit单位
   * @param {number} min
   * @param {number} max
   * @param {number} step
   * @return {*}
   */
  const getPxRange = (min: number, max: number, step: number = 1) => range({
    min,
    max,
    step,
    iterator: (num: number) => [num, getPxValue(num)]
  })

  const preset = {
    theme: {
      spacing: getPxRange(0, 100, 0.5),
      width: {
        ...getPxRange(0, 800),
        auto: 'auto',
        full: '100%',
        screen: '100vw',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content',
      },
      minWidth: {
        ...getPxRange(0, 800),
        full: '100%',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content',
      },
      maxWidth: {
        ...getPxRange(0, 800),
        none: 'none',
        full: '100%',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content',
      },
      height: {
        ...getPxRange(0, 800),
        auto: 'auto',
        full: '100%',
        screen: '100vh',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content',
      },
      minHeight: {
        ...getPxRange(0, 800),
        full: '100%',
        screen: '100vh',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content',
      },
      maxHeight: {
        ...getPxRange(0, 800),
        none: 'none',
        full: '100%',
        screen: '100vh',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content',
      },
      padding: {
        ...getPxRange(0, 200, 0.5),
        auto: 'auto',
      },
      margin: {
        ...getPxRange(-200, 200, 0.5),
        auto: 'auto',
      },
      borderRadius: {
        ...getPxRange(1, 100, 0.5),
        inherit: 'inherit',
        none: 0,
        half: '50%',
        full: '9999px',
      },
      opacity: range({
        min: 0,
        max: 100,
        iterator: (num: number) => [num, num / 100],
      }),
      fontSize: {
        ...range({
          min: 1,
          max: 200,
          step: 0.5,
          iterator: (num: number) => [num, [getPxValue(num), {
            lineHeight: 1,
          }]],
        }),
        0: '0px',
        inherit: 'inherit',
        none: '0px',
      },
      lineHeight: {
        ...getPxRange(1, 200, 0.5),
        none: 1,
        tight: 1.25,
        snug: 1.375,
        normal: 1.5,
        relaxed: 1.625,
        loose: 2,
      },
      zIndex: {
        // -20 ~ 50 用于基础使用
        ...range({ min: -20, max: 50 }),
        // 2000 ~ 2100 用于弹窗
        ...range({ min: 2000, max: 2100 }),
        none: 0,
        // 用于 loading 等层级超高的情况
        top: '99999',
        auto: 'auto',
      },
    },
  }


  return preset
}