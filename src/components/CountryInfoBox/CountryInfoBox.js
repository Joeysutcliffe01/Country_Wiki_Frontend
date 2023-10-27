const CountryInfoBox = ({ dataFromApi, setDataFromApi }) => {
  if (dataFromApi?.status === 404) return;

  const {
    name,
    flags,
    coatOfArms,
    currencies,
    capital,
    languages,
    population,
  } = dataFromApi ? dataFromApi[0] : "";

  const handelCloseBox = () => {
    setDataFromApi(null);
  };
  return (
    <>
      {dataFromApi && (
        <section className="country__info-box">
          <h1 className="country__info-box-close" onClick={handelCloseBox}>
            x
          </h1>
          <img
            className="country__info-box-coat-of-arms"
            src={coatOfArms.png}
            alt={name.official + "Coat of Arms"}
          />
          <div className="country__info-box-left">
            <img
              className="country__info-box-img"
              src={flags.png}
              alt={name.common + "Flag"}
            />
            <h3 className="country__info-box-name">{name.official}</h3>
          </div>
          <div className="country__info-box-right">
            <p className="country__info-box-right-flag-info">{flags.alt}</p>

            <p className="country__info-box-right-language box-right-details">
              Country: <span>{name.common}</span>
            </p>

            <p className="country__info-box-right-language box-right-details">
              Language:
              <span> {languages[Object.keys(languages)[0]]}</span>{" "}
              <span>{languages[Object.keys(languages)[1]]}</span>
            </p>

            <p className="country__info-box-right-language box-right-details">
              Population: <span>{population}</span>
            </p>

            <p className="country__info-box-right-language box-right-details">
              Capital: <span>{capital}</span>
            </p>

            <p className="country__info-box-right-language box-right-details">
              Currencies:{" "}
              <span>{currencies[Object.keys(currencies)[0]].symbol}</span>{" "}
              <span>{currencies[Object.keys(currencies)[0]].name}</span>
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default CountryInfoBox;
