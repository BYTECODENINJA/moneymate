import { DateRangeEnum, type DateRangePreset } from "../enums/date-range.enum.js";
export declare const getDateRange: (preset?: DateRangePreset, customFrom?: Date, customTo?: Date) => {
    from: Date;
    to: Date;
    value: DateRangeEnum;
    label: string;
} | {
    from: Date;
    to: Date;
    value: DateRangeEnum;
    label?: never;
} | {
    from: undefined;
    to: undefined;
    value: DateRangeEnum;
    label: string;
};
//# sourceMappingURL=date.d.ts.map