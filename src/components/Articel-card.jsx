  import {Card,Button} from "react-bootstrap";
  import {FaRegCommentDots} from 'react-icons/fa'
  import {MdOutlineCreate,MdUpdate} from 'react-icons/md'
  import {BiUpvote,BiDownvote} from 'react-icons/bi'
  import { Link } from "react-router-dom";
  import { useState,useEffect } from "react";
export const ArticelCard =({article})=>{
  const [votes,setVotes]=useState(0)
  // useEffect(() => {
  //   setIsLoading(true);
     
  //     setVotes(article.votes);
  //     setIsLoading(false);
    
  // }, [article.votes]);
  const handleUpVote = (id) => {

setVotes((currVote)=>currVote+1)
console.log(votes)
console.log(article.votes,id)
 };
  const handleDownVote = () => {
    setVotes((currVote)=>currVote-1)

  };

return(
<Card
    bg='dark'
    text='light'
    style={{ width: '100%'}}
    
    className={`${article.article_id}`}
  >
    <Card.Header ><Link style={{ textDecoration: 'none' }} to={{
    pathname: `${article.article_id}`
  }}><p className="title">{article.title} </p></Link>
    <p className="date"><MdUpdate/>{article.created_at.slice(0,-14)}</p></Card.Header>
    <Card.Body>
      <Card.Text>
        {article.body}
      </Card.Text>
    </Card.Body>
    <Card.Footer
    >
     
       <p className="author-comments"><MdOutlineCreate/>{article.author} <FaRegCommentDots className="comment-icon"/>  {article.votes+votes} <Button onClick={()=>handleUpVote(article.article_id)}variant="dark"> <BiUpvote className="upvote"/></Button> <Button onClick={()=>handleDownVote(article.article_id)} variant="dark"><BiDownvote className="downvote"/></Button></p>  

    </Card.Footer>
  </Card>
)
}

export default ArticelCard