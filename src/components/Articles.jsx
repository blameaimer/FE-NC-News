import { useEffect, useState } from "react";
import { selectArticles } from "../api";
import {ArticelCard} from './Articel-card'
import { useParams,useSearchParams } from "react-router-dom";
import NavBar from "./NavBar";
export default function ArticlesList() {
  let {topic} = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setNewSortBy] = useState();
  const [orderBy, setNewOrderBy] = useState();
  const [searchParams,setSearchParams] = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    selectArticles(topic).then((articles) => {
      
        setArticles(articles);
      setIsLoading(false);
    });
  }, [topic]);

const handleSort = ((event)=>{
  console.log(event.target.value)
setNewSortBy(event.target.value)
setSearchParams(`sortby${event.target.value}`)
selectArticles(topic,sortBy).then((articles)=>{
  setArticles(articles)
})

})
const handleOrder = ((event)=>{

  console.log(event.target.value)
  setNewOrderBy(event.target.value)
  setSearchParams(`orderby${event.target.value}`)
  selectArticles(topic,sortBy,orderBy).then((articles)=>{
    setArticles(articles)
  })
  })
 

  if (isLoading) return <p>loading..</p>;
  return (
    <>
          <nav>
        <NavBar topic={topic}/>
  
      </nav>
    <section>
     
    <select onChange={(event)=>{handleSort(event)}}>
    <option className="d-none" >
                        Sort by
                    </option>
  <option value="comment_count">Comments</option>
  <option value="created_at">Date</option>
  <option value="votes">Votes</option>
  
</select>


<select onChange={(event)=>{handleOrder(event)}}>
<option className="d-none" >
                        Asc/Desc
                    </option>
  <option value="asc">Ascending</option>
  <option value="desc">Descending</option></select>

     {articles.map((article,index)=>{

      return (

        <ArticelCard article={article} key={index}/>

      )

     })}
      
    </section>
    </>
  );
}
