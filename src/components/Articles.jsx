import { useEffect, useState } from "react";
import { selectArticles } from "../api";
import {ArticelCard} from './Articel-card'
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
export default function ArticlesList() {
  let {topic} = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    selectArticles(topic).then((articles) => {
      console.log(articles)
        setArticles(articles);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) return <p>loading..</p>;
  return (
    <>
          <nav>
        <NavBar topic={topic}/>
  
      </nav>
    <section>
     {articles.map((article,index)=>{

      return (

        <ArticelCard article={article} key={index}/>

      )

     })}
      
    </section>
    </>
  );
}
