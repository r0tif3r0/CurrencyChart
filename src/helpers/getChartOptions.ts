import { Currency } from "../models/Currency";
import { IRate } from "../models/IRate";
import { getCurrencyFromData } from "./getCurrencyFromData";

export const getChartOptions = (data: IRate[], selectedCurrency: Currency) => {
  return {
    tooltip: {
      trigger: 'axis',
      formatter: (params: any) => {
        const { name, value, color } = params[0];
        return `<div>
                  <div style="font-weight: bold;">${name}</div>
                  <span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${color};"></span>
                  ${selectedCurrency.name} <span style="font-weight: bold;">${value} ₽</span>
                </div>`;
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      data: getCurrencyFromData(data, selectedCurrency.name).map(item => item.month),
    },
    yAxis: {
      type: 'value',
      min: 'dataMin',
      splitNumber: 4,
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
    },
    series: [
      {
        name: selectedCurrency.name,
        type: 'line',
        data: getCurrencyFromData(data, selectedCurrency.name).map(item => item.value),
        color: '#F38B00',
        symbol: 'none',
        
      },
    ],
  };
};