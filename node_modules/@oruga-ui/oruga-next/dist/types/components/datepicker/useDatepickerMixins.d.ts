import type { DatepickerProps } from "./types";
export declare function useDatepickerMixins(props: DatepickerProps): {
    isDateSelectable: (date: Date, month: number) => boolean;
    defaultDateParser: (date: string) => Date;
    defaultDateFormatter: (date: Date | Date[]) => string;
};
