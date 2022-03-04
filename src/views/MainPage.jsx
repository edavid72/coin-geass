import { useEffect, useState } from 'react';
import Form from '../components/Form';
import ResultAPI from '../components/ResultAPI';
import Spinner from '../components/Spinner';
import cryptoPort from '../img/crypto_port.svg';

const MainPage = () => {
  const [dataForm, setDataForm] = useState({});
  const [dataAPI, setDataAPI] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(dataForm).length > 0) {
      setLoading(true);
      setDataAPI({});
      const consultAPI = async () => {
        const { coin, crypto } = dataForm;

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;

        const response = await fetch(url);
        const result = await response.json();

        setDataAPI(result.DISPLAY[crypto][coin]);

        setLoading(false);
      };

      consultAPI();
    }
  }, [dataForm]);

  return (
    <div className="mt-28 container mx-auto">
      <div className="grid tablet:grid-cols-2">
        <img src={cryptoPort} alt="port" className='w-72 mx-auto tablet:w-full'/>

        <div>
          <Form setDataForm={setDataForm} />

          <div>
            {loading && <Spinner />}

            {dataAPI.PRICE && <ResultAPI dataAPI={dataAPI} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
