import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";

import { NewsList } from "./components/Index.js";
import {
  ErrorPage,
  AboutPage,
  HomePage,
  Footer,
  SingleNews,
} from "./pages/Index.js";
function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/news' element={<NewsList />} />
        <Route path='news/:url' element={<SingleNews />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
