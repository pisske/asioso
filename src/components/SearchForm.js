// import React, { useState } from "react";
// import Wrapper from "../assets/wrappers/SearchForm.js";
// import { useAppContext } from "../context/appContext";

// const SearchForm = () => {
//   const { text, handleChange, news, getNews } = useAppContext();
//   const [searchText, setSearchText] = useState("");
//   const [filteredNews, setFilteredNews] = useState([]);

//   const handleSearchChange = (value) => {
//     setSearchText(value);
//   };

//   const sourceNames = ["Google News", "Business Insider", "BBC News"];

//   const filterBySource = (source) => {
//     // filter only the news that have not been filtered before
//     const filtered = news.filter(
//       (item) => !filteredNews.includes(item) && item.source === source
//     );
//     setFilteredNews((prevFiltered) => [...prevFiltered, ...filtered]);
//   };

//   const clearFilter = () => {
//     setFilteredNews([]);
//   };

//   return (
//     <Wrapper>
//       {" "}
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "center",
//           alignItems: "center",
//           margin: "0 auto",
//         }}
//       >
//         <form className='contact-form' onSubmit={(e) => e.preventDefault()}>
//           <input
//             type='text '
//             className='form-input'
//             name='text'
//             value={searchText}
//             placeholder='Search News'
//             onChange={(e) => handleSearchChange(e.target.value)}
//           />
//         </form>
//         <button onClick={() => getNews(searchText)}>Search</button>
//         {sourceNames.map((item) => {
//           return <button onClick={() => filterBySource(item)}>{item}</button>;
//         })}
//       </div>
//     </Wrapper>
//   );
// };
// export default SearchForm;
