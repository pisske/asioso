import { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import News from "./News";
import Wrapper from "../assets/wrappers/NewsList";

const NewsList = () => {
  const {
    news,
    isLoading,

    deleteAllNews,

    getNews,
  } = useAppContext();
  const [searchText, setSearchText] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);
  const [activeSource, setActiveSource] = useState("");

  useEffect(() => {
    if (news !== undefined) {
      setFilteredNews(news);
    }
  }, [news]);

  const handleSearchChange = (value) => {
    setSearchText(value);
  };

  const sourceNames = ["Google News", "Business Insider", "BBC News"];

  const filterBySource = (source) => {
    const filtered = filteredNews.filter((item) => item.source.name === source);
    setFilteredNews(filtered);
    console.log(filteredNews);
    setActiveSource(source);
  };

  if (isLoading) {
    return <Loading />;
  }

  const handleFilter = (text) => {
    getNews(text);

    console.log(filteredNews);
  };

  const removeFilters = () => {
    setFilteredNews(news);
    setActiveSource("");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <form className='contact-form' onSubmit={(e) => e.preventDefault()}>
          <input
            type='text '
            className='form-input'
            name='text'
            value={searchText}
            placeholder='Search News'
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </form>
        <button className='btn' onClick={() => handleFilter(searchText)}>
          Search
        </button>
        {sourceNames.map((source) => {
          const isDisabled = activeSource !== "" && activeSource !== source;
          return (
            <button
              className='btn'
              key={source}
              onClick={() => filterBySource(source)}
              disabled={isDisabled}
            >
              {source}
            </button>
          );
        })}
        <button className='btn' onClick={() => removeFilters()}>
          Clear filters
        </button>
      </div>
      <Wrapper className='section section'>
        {" "}
        <div className='title'>
          <h2>Our Popular News</h2>

          <div className='underline'></div>
          {/* <SearchForm /> */}
        </div>
        {filteredNews.length !== 0 ? (
          <div className='section-center featured'>
            {filteredNews.slice(0, 8).map((item, index) => {
              return <News currentObject={item} key={index} {...item} />;
            })}
          </div>
        ) : (
          <p className='error-message'>No news found.Please try again</p>
        )}
        <div className='delete'>
          <button onClick={deleteAllNews} className='btn'>
            Delete all news
          </button>
        </div>
      </Wrapper>
    </div>
  );
};
export default NewsList;
