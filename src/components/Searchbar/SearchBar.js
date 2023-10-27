import { useState } from "react";

const SearchBar = ({ dataFromApi, setDataFromApi, setIsLoading }) => {
  const [userInput, setUserInput] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleOpenSearchBar = () => {
    setShowSearchBar((prev) => !prev);
  };

  const sendUserInput = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await fetch(
      "https://country-wiki-backend.onrender.com/country",
      {
        method: "POST",
        body: JSON.stringify({ userInput }),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.ok) {
      response.json().then((apiData) => setDataFromApi(apiData));
      setIsLoading(false);
    } else {
      console.log("Issue with sendUserInput");
    }
  };

  console.log("dataFromApi SearchBar------", dataFromApi);
  return (
    <section className={showSearchBar ? "searchbar" : "hide__searchbar"}>
      {showSearchBar ? (
        <>
          <form onSubmit={sendUserInput} className="searchbar__form">
            <h1 className="searchbar__input_hide" onClick={handleOpenSearchBar}>
              X
            </h1>
            <p className="searchbar__input-issue-message">
              {dataFromApi?.status === 404
                ? "Looks like we cant find this country, please check spelling"
                : ""}
            </p>
            <input
              className="searchbar__input"
              type="text"
              value={userInput}
              placeholder="🔍 Search for a country and press Enter....."
              onChange={(e) => setUserInput(e.target.value)}
            />
          </form>
        </>
      ) : (
        <h1
          className="searchbar__input_open-icon"
          onClick={handleOpenSearchBar}
        >
          🔍
        </h1>
      )}
    </section>
  );
};

export default SearchBar;
