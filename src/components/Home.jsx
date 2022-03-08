import { useEffect, useState } from "react";
import { selectArticles } from "../api";
import {ArticelCard} from './Articel-card'
import ArticelTitleCard from "./ArticeTitle-card";
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
    <section>
   
   

        <ArticelCard articles={articles[21]} key='mainarticel'/>
        <ArticelCard articles={articles[26]} key='mainarticel2'/>

      <ArticelTitleCard articles={articles[0]}/>
      <ArticelTitleCard articles={articles[1]}/>


      
    </section>
  );
}
