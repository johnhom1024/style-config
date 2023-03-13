/**
 * @description:
 * @param {Partial<{
 *    unit: string;
 * }>} params
 * @return {*}
 */
export declare function createPreset({ unit }?: {
    unit?: string | undefined;
}): {
    theme: {
        spacing: Record<number, string>;
    };
    width: {
        auto: string;
        full: string;
        screen: string;
        min: string;
        max: string;
        fit: string;
    };
    minWidth: {
        0: string;
        full: string;
        min: string;
        max: string;
        fit: string;
    };
    maxWidth: {
        none: string;
        0: string;
        full: string;
        min: string;
        max: string;
        fit: string;
    };
    height: {
        auto: string;
        full: string;
        screen: string;
        min: string;
        max: string;
        fit: string;
    };
    minHeight: {
        full: string;
        screen: string;
        min: string;
        max: string;
        fit: string;
    };
    maxHeight: {
        none: string;
        full: string;
        screen: string;
        min: string;
        max: string;
        fit: string;
    };
    padding: {
        auto: string;
    };
    margin: {
        auto: string;
    };
    borderRadius: {
        inherit: string;
        none: number;
        half: string;
        full: string;
    };
    opacity: Record<number, string>;
    fontSize: {
        0: string;
        inherit: string;
        none: string;
    };
    lineHeight: {
        none: number;
        tight: number;
        snug: number;
        normal: number;
        relaxed: number;
        loose: number;
    };
    zIndex: {
        none: number;
        top: string;
        auto: string;
    };
};
