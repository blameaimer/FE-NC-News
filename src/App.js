import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeArticle from './components/Home';
import ArticlesList from './components/Articles'
import NavBar from "./components/NavBar";
function App() {
  return (
    <BrowserRouter>
       <nav>
        <NavBar/>
  
      </nav>
    <div className="App">
      <Routes>
    <Route path ="/" element={<HomeArticle/>}/>    
    <Route path={`/articles/:topic`} element={<ArticlesList />} />

      </Routes>
    </div>
      
   
    </BrowserRouter>
  );
}

export default App;
