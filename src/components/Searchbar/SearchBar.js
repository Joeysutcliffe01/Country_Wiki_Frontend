import { useState } from "react";

const SearchBar = ({
  dataFromApi,
  setDataFromApi,
  setIsLoading,
  setShowSearchBar,
  showSearchBar,
}) => {
  const [userInput, setUserInput] = useState("");

  const handleOpenSearchBar = () => {
    setShowSearchBar((prev) => !prev);
  };

  const sendUserInput = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowSearchBar(false);

    const response = await fetch(
      "https://country-wiki-backend.onrender.com/country",
      {
        method: "POST",
        body: JSON.stringify({ userInput }),
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await response.json();
    setDataFromApi(data);

    if (response.ok && !data.status) {
      setIsLoading(false);
      setShowSearchBar(false);
    } else {
      setIsLoading(false);
      setShowSearchBar(true);
      console.error("Issue with sendUserInput");
    }
  };

  return (
    <section className={showSearchBar ? "searchbar" : "hide__searchbar"}>
      {showSearchBar ? (
        <>
          <form
            data-test="searchbar__form"
            onSubmit={sendUserInput}
            className="searchbar__form"
          >
            <h1
              data-test="searchbar__form"
              className="searchbar__input_hide"
              onClick={handleOpenSearchBar}
            >
              X
            </h1>
            <p
              data-test="input-issue-message"
              className="searchbar__input-issue-message"
            >
              {dataFromApi?.status === 404
                ? "Looks like we cant find this country, please check spelling"
                : ""}
            </p>
            <input
              data-test="searchbar-input"
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
          data-test="searchbar-input-open-icon"
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
