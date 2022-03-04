import { useEffect, useState } from 'react';
import ErrorMsg from './ErrorMsg';

const Form = ({ setDataForm }) => {
  const coins = [
    { id: 'USD', name: 'American Dollar' },
    { id: 'EUR', name: 'Euro' },
    { id: 'GBP', name: 'Pound Sterling' },
    { id: 'CHF', name: 'Swiss Franc' },
    { id: 'JPY', name: 'Japanese Yen' },
    { id: 'CAD', name: 'Canadian dollar' },
    { id: 'CNY', name: 'Chinese Yuan' },
    { id: 'MXN', name: 'Mexican Peso' },
    { id: 'HNL', name: 'Honduran Lempira' },
  ];

  const [dataCrypto, setDataCrypto] = useState([]);
  const [coin, setCoin] = useState('');
  const [crypto, setCrypto] = useState('');

  const [errorMsg, setErrorMsg] = useState(false);

  useEffect(() => {
    const consultAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD`;

      const response = await fetch(url);

      const result = await response.json();

      const arrayCryptos = result.Data.map((crypto) => {
        const object = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        };
        console.log(object);
        return object;
      });

      setDataCrypto(arrayCryptos);
    };

    consultAPI();
  }, []);

  const handleChangeCoin = (e) => {
    setCoin(e.target.value);
  };

  const handleChangeCrypto = (e) => {
    setCrypto(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([coin, crypto].includes('')) {
      setErrorMsg(true);
      return;
    }

    setErrorMsg(false);
    setDataForm({ coin, crypto });
  };

  return (
    <form onSubmit={handleSubmit} className="w-11/12 tablet:w-10/12 mx-auto">
      <h1 className="text-xl font-bold bg-teal text-center p-2 mt-8 mb-4 laptop:text-2xl text-white">
        Quote Cryptocurrencies Instantly
      </h1>

      <div className="block w-full">
        <label className="block text-lg font-semibold text-center p-2 text-grey uppercase">
          choose your coin
        </label>

        <select
          onChange={handleChangeCoin}
          className="text-xl bg-light_grey w-full p-2 rounded-md text-center"
        >
          <option value=""> --Select-- </option>
          {coins.map((coin) => {
            return (
              <option key={coin.id} value={coin.id}>
                {coin.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="block w-full">
        <label className="block text-lg font-semibold text-center p-2 text-grey uppercase">
          choose your cryptocurrencie
        </label>

        <select
          onChange={handleChangeCrypto}
          className="text-xl bg-light_grey w-full p-2 rounded-md text-center"
        >
          <option value=""> --Select-- </option>
          {dataCrypto.map((crypto) => {
            return (
              <option key={crypto.id} value={crypto.id}>
                {crypto.name}
              </option>
            );
          })}
        </select>
      </div>

      <button
        type="submit"
        className="bg-teal text-light_grey text-xl p-2 w-full mt-4 hover:bg-teal_2 hover:text-white rounded-md transition-all"
      >
        Calculate
      </button>

      {errorMsg && <ErrorMsg />}
    </form>
  );
};

export default Form;
