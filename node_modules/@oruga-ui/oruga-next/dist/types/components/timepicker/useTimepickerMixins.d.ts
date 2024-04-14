import type { TimepickerProps } from "./types";
export declare function useTimepickerMixins(props: TimepickerProps): {
    defaultTimeFormatter: (time: Date) => string;
    defaultTimeParser: (time: string) => Date;
    pmString: import("vue").ComputedRef<string>;
    amString: import("vue").ComputedRef<string>;
    meridiens: import("vue").ComputedRef<string[]>;
    isHourFormat24: import("vue").ComputedRef<boolean>;
    hourLiteral: import("vue").ComputedRef<string>;
    minuteLiteral: import("vue").ComputedRef<string>;
    secondLiteral: import("vue").ComputedRef<string>;
};
