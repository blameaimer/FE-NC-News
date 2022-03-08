import { useEffect, useState } from "react";
import { selectArticles } from "../api";
import {Button} from "react-bootstrap";
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
     {articles.map((articles,index)=>{

      return (

        <ArticelCard articles={articles} key={index}/>

      )

     })}
      
    </section>
    </>
  );
}
