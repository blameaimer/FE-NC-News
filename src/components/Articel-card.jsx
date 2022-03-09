  import {Card,Button} from "react-bootstrap";
  import {FaRegCommentDots} from 'react-icons/fa'
  import {MdOutlineCreate,MdUpdate} from 'react-icons/md'
  import {BiUpvote,BiDownvote} from 'react-icons/bi'
  import { Link } from "react-router-dom";
  import { useState,useEffect } from "react";
export const ArticelCard =({articles})=>{
  const [votes,setVotes]=useState(0)
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
     
      setVotes(articles.votes);
      setIsLoading(false);
    
  }, [articles.votes]);
  const handleUpVote = (id) => {

setVotes((currVote)=>currVote+1)
console.log(votes)
console.log(articles.votes,id)
 };
  // const handleDownVote = () => {
   

  // };
  if (isLoading) return <p>loading..</p>;
return(
<Card
    bg='dark'
    text='light'
    style={{ width: '100%'}}
    
    className={`${articles.article_id}`}
  >
    <Card.Header ><Link style={{ textDecoration: 'none' }} to={{
    pathname: `${articles.article_id}`
  }}><p className="title">{articles.title} </p></Link>
    <p className="date"><MdUpdate/>{articles.created_at.slice(0,-14)}</p></Card.Header>
    <Card.Body>
      <Card.Text>
        {articles.body}
      </Card.Text>
    </Card.Body>
    <Card.Footer
    >
     
       <p className="author-comments"><MdOutlineCreate/>{articles.author} <FaRegCommentDots className="comment-icon"/>  {articles.votes} <Button onClick={()=>handleUpVote(articles.article_id)}variant="dark"> <BiUpvote className="upvote"/></Button> <Button variant="dark"><BiDownvote className="downvote"/></Button></p>  

    </Card.Footer>
  </Card>
)
}

export default ArticelCard