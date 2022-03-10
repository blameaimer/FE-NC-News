import { useEffect, useState } from "react";
import { selectArticles } from "../api";
import {ArticelCard} from './Articel-card'
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import{Form,Card} from 'react-bootstrap'
export default function ArticlesList() {
  let {topic} = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setNewSortBy] = useState("");
  useEffect(() => {
    setIsLoading(true);
    selectArticles(topic).then((articles) => {
      
        setArticles(articles);
      setIsLoading(false);
    });
  }, [topic]);

  console.log(sortBy)
  if (isLoading) return <p>loading..</p>;
  return (
    <>
          <nav>
        <NavBar topic={topic}/>
  
      </nav>
    <section>
     
    <Form.Select onChange={(e)=>setNewSortBy(e.target.value)} aria-label="Default select example">
    <option className="d-none" value="">
                        Sort by
                    </option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>

     {articles.map((article,index)=>{

      return (

        <ArticelCard article={article} key={index}/>

      )

     })}
      
    </section>
    </>
  );
}
