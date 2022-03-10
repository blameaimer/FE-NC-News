import { useEffect, useState } from "react";
import { selectArticel,selectComments } from "../api";
import {ArticelCard} from './Articel-card'
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Commentbox from './comment-box'
import { PostComment } from "./post-comment";
export default function Articel() {
  let {id,topic} = useParams();
  const [articel, setArticel] = useState([]);
  const [comments,setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    selectArticel(id).then((article) => { 
     
        setArticel(article);
      
      return selectComments(id)
    }).then((comments)=>{
      setComments(comments);
      setIsLoading(false);
    })
  }, [topic,id]);

  if (isLoading) return <p>loading..</p>;

  return (
    <>
          <nav>
        <NavBar topic={topic}/>
  
      </nav>
    <section> 
        <ArticelCard article={articel} />
        <PostComment id={articel.article_id}setComments={setComments}/>
        <Commentbox comments ={comments} />
    </section>
    </>
  );
}
