import { useEffect, useState } from 'react';

const ResumePage = () => {
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

  const [coinResume, setCoinResume] = useState('USD');
  const [dataResume, setDataResume] = useState([]);

  const handleChange = (e) => {
    setCoinResume(e.target.value);
  };

  useEffect(() => {
    const consultAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=${coinResume}`;

      const response = await fetch(url);
      const result = await response.json();

      setDataResume(
        result.Data.map((result) => {
          return result.DISPLAY[coinResume];
        })
      );
    };

    consultAPI();
  }, [coinResume]);

  return (
    <div className="container mx-auto">
      <div className="mt-24">
        <label htmlFor="coins">
          <select
            onChange={handleChange}
            className="p-3 rounded-md bg-beich text-lg"
          >
            {coins.map((option) => {
              return (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              );
            })}
          </select>
        </label>
      </div>

      <section className="mt-6">
        <div>
          {dataResume.map((info) => {
            return (
              <div className="flex mb-2 bg-beich text-navy rounded-md p-3">
                <div className="w-1/12">
                  <img
                    src={`https://cryptocompare.com/${info.IMAGEURL}`}
                    alt="coin_image"
                    className="w-10"
                  />
                </div>
                <div className="flex w-11/12 justify-around text-center items-center">
                  <p className="w-10 text-sm tablet:text-md">
                    {info.FROMSYMBOL}
                  </p>
                  <p className="w-10 text-sm tablet:text-md">{info.TOSYMBOL}</p>
                  <p className="w-10 text-sm tablet:text-md">{info.OPENDAY}</p>
                  <p className="w-10 text-sm tablet:text-md">{info.HIGHDAY}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
