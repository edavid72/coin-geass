const ResultAPI = ({ dataAPI }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    dataAPI;
  return (
    <div className="mt-4 flex w-11/12 mx-auto tablet:block">
      <div className="w-2/12 flex justify-center items-center tablet:w-full">
        <img
          src={`https://cryptocompare.com/${IMAGEURL}`}
          alt="image crypto"
          className="w-24 tablet:w-48"
        />
      </div>
      <div className="w-10/12 p-2 text-lg table:w-full tablet:mx-auto laptop:text-2xl">
        <p className="tablet:p-2">
          The price is: <span className="font-light">{PRICE}</span>
        </p>
        <p className="tablet:p-2">
          Highest price of the day:
          <span className="font-light">{HIGHDAY}</span>
        </p>
        <p className="tablet:p-2">
          Lowest price of the day: <span className="font-light">{LOWDAY}</span>
        </p>
        <p className="tablet:p-2">
          Variation last 24 hours:
          <span className="font-light">{CHANGEPCT24HOUR}</span>
        </p>
        <p className="tablet:p-2">
          Last update: <span className="font-light">{LASTUPDATE}</span>
        </p>
      </div>
    </div>
  );
};

export default ResultAPI;
