- В файле axios.api.ts находится настройка axios для выполнения запросов к mockapi.io
- В файле CurrencyIcons.tsx находятся иконки, которые потребовалось создать для работы с компонентами Consta UI Kit
- В папке helpers находятся вспомогательные компоненты для работы приложения, это виды валют (currencies.ts), настройки для отображения графика (getChartOptions.ts) и функция для выбора из данных определенной валюты (getCurrencyFromData.ts)
- В папке models находятся модели данных, это тип валюты (Currency.ts) и интерфейс для данных с курсами валют (IRate.ts), которые мы получаем по api
- Файл App.styles.css содержит стили приложения
- В файле самого приложения (App.tsx) используется хук useState для отслеживания состояний данных, текущей выбранной валюты и загрузки данных. Для загрузки используется хук useEffect с пустым массивом зависимостей, чтобы данные подгружались сразу при монтировании компонента. Для вычисления среднего значения использую метод reduce в отдельной функции