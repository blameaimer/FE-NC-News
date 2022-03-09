import { useEffect, useState } from "react";
import { selectArticles } from "../api";
import {ArticelCard} from './Articel-card'
import ArticelTitleCard from "./ArticeTitle-card";
import NavBar from "./NavBar";
export default function HomeArticle({ topic }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    selectArticles().then((articles) => {
        setArticles(articles);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) return <p>loading..</p>;
  return (
    <>
    <nav>
  <NavBar topic={"/"}/>


</nav>
    <section>
    
      <ArticelTitleCard article={articles[0]}/>
    
      <ArticelCard article={articles[10]} key='mainarticel'/>
        <ArticelCard article={articles[21]} key='mainarticel2'/>
        


      
    </section>
    </>
  );
}
