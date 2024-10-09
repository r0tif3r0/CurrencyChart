import { IRate } from "../models/IRate";

export const getCurrencyFromData = (data: IRate[], currency: string) => {
    return data.filter(item => item.indicator === currency);
};
