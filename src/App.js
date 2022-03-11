import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeArticle from "./components/Home";
import ArticlesList from "./components/Articles";
import Articel from "./components/Articel";
import ErrorPage from "./components/ErrorPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<HomeArticle />} />
          <Route path="/articles/:topic" element={<ArticlesList />} />
          <Route path="/articles/:topic/:id" element={<Articel />} />
          <Route path="/:id" element={<Articel />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
