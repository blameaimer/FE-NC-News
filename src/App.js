import './App.css';
import { Routes, Route } from "react-router-dom";
import HomeArticle from './components/Home';
import ArticlesList from './components/Articles'
import Articel from './components/Articel'
function App() {
  return (
    
 
    <div className="App">
      <Routes>
    <Route path ="/" element={<HomeArticle/>}/>    
    <Route path="/articles/:topic" element={<ArticlesList />} />
    <Route path="/articles/:topic/:id" element={<Articel/>}/>
    <Route path="/:id" element={<Articel/>}/>

      </Routes>
    </div>
      
   
    
  );
}

export default App;
