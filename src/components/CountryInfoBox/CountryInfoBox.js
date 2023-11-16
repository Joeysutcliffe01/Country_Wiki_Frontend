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
        <section data-test="country-info-box" className="country__info-box">
          <h1
            data-test="country-info-box-close"
            className="country__info-box-close"
            onClick={handelCloseBox}
          >
            x
          </h1>
          <img
            data-test="country-info-box-coat-of-arms"
            className="country__info-box-coat-of-arms"
            src={coatOfArms.png}
            alt={name.official + "Coat of Arms"}
          />
          <div className="country__info-box-left">
            <img
              data-test="country-info-box-flag"
              className="country__info-box-flag"
              src={flags.png}
              alt={name.common + "Flag"}
            />
            <h3
              data-test="country-info-box-name"
              className="country__info-box-name"
            >
              {name.official}
            </h3>
          </div>
          <div className="country__info-box-right">
            <p
              data-test="country-info-box-right-flag-info"
              className="country__info-box-right-flag-info"
            >
              {flags.alt}
            </p>

            <div className="country__info-box-right-list-container">
              <p
                data-test="country-info-box-right-flag-info-common-name"
                className="country__info-box-right-language box-right-details"
              >
                Country: <span>{name.common}</span>
              </p>

              <p
                data-test="country-info-box-right-flag-info-common-language"
                className="country__info-box-right-language box-right-details"
              >
                Language:
                <span data-test="country-info-box-right-flag-info-common-language-first">
                  {" "}
                  {languages[Object.keys(languages)[0]]}
                </span>{" "}
                <span data-test="country-info-box-right-flag-info-common-language-second">
                  {languages[Object.keys(languages)[1]]}
                </span>
              </p>

              <p
                data-test="country-info-box-right-flag-info-population"
                className="country__info-box-right-language box-right-details"
              >
                Population: <span>{population}</span>
              </p>

              <p
                data-test="country-info-box-right-flag-info-capital"
                className="country__info-box-right-language box-right-details"
              >
                Capital: <span>{capital}</span>
              </p>

              <p
                data-test="country-info-box-right-flag-info-currencies"
                className="country__info-box-right-language box-right-details"
              >
                Currencies:{" "}
                <span data-test="country-info-box-right-flag-info-currencies-symbol">
                  {currencies[Object.keys(currencies)[0]].symbol}
                </span>{" "}
                <span data-test="country-info-box-right-flag-info-currencies-name">
                  {currencies[Object.keys(currencies)[0]].name}
                </span>
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CountryInfoBox;
