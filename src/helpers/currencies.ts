import { IconDollar, IconEuro, IconYuan } from "../components/CurrencyIcons";
import { Currency } from "../models/Currency";
  
export const currencies: Currency[] = [
    {
      name: 'Курс доллара',
      icon: IconDollar,
      stringIcon: '$',
    },
    {
      name: 'Курс евро',
      icon: IconEuro,
      stringIcon: '€',
    },
    {
      name: 'Курс юаня',
      icon: IconYuan,
      stringIcon: '¥',
    },
];