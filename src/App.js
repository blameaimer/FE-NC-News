import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeArticle from './components/Home';
import ArticlesList from './components/Articles'

function App() {
  return (
    <BrowserRouter>
 
    <div className="App">
      <Routes>
    <Route path ="/" element={<HomeArticle/>}/>    
    <Route path="/articles" element={<ArticlesList/>}/>
    <Route path={`/articles/:topic`} element={<ArticlesList />} />

      </Routes>
    </div>
      
   
    </BrowserRouter>
  );
}

export default App;
