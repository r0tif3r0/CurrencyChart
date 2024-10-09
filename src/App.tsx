import React, { useEffect, useState } from 'react';
import { ReactECharts } from './Echarts/ReactECharts.tsx';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { Loader } from '@consta/uikit/Loader';
import './App.styles.css'
import $api from './api/axios.api.ts';
import { IRate } from './models/IRate.ts';
import { currencies } from './helpers/currencies.ts';
import { Currency } from './models/Currency.ts';
import { getCurrencyFromData } from './helpers/getCurrencyFromData.ts';
import { getChartOptions } from './helpers/getChartOptions.ts';

function App() {

  const [data, setData] = useState<IRate[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(currencies[0]);
  const [loading, setLoading] = useState(true);

  const handleChoiceCurrency = (event: { e: React.ChangeEvent<HTMLInputElement>; value: Currency }) => {
    setSelectedCurrency(event.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      await $api.get('/data')
        .then(response => {
          setData(response.data)
          setLoading(false);
        })
        .catch(error => {
          console.error('Ошибка при получении данных:', error);
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  const average = (values: number[]) => {
    return (values.reduce((a, b) => (a + b)) / values.length).toFixed(1);
  }

  return (
    <Theme preset={presetGpnDefault}>
    <div>
      <div className='headLine'>
        <h1 className='currencyName'>{selectedCurrency.name}, {selectedCurrency.stringIcon}/₽</h1>
        <ChoiceGroup className='currencyChoice'
          value={selectedCurrency}
          onChange={handleChoiceCurrency}
          items={currencies}
          getItemLabel={(item) => item.name}
          getItemIcon={(item) => item.icon}
          multiple={false}
          onlyIcon
          name="ChoiceCurrency"
          size='s'
        />
      </div>
      <div className='chart__container'>
      {loading ? (
        <Loader/>
      ):(
        <>
        <ReactECharts option={getChartOptions(data, selectedCurrency)} />
        <div className='avg__container'>
          <span className='avgTitle'>Среднее за период</span>
          <div>
          <span className='avgValue'>{average(getCurrencyFromData(data, selectedCurrency.name).map(item => item.value))}</span>
          <span className='currency'> ₽</span>
          </div>
        </div>
        </>
      )
      }
      </div>
    </div>
    </Theme>
  );
}

export default App;
