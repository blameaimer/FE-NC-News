  import {Card} from "react-bootstrap";
  import {FaRegCommentDots} from 'react-icons/fa'
  import {MdOutlineCreate,MdUpdate} from 'react-icons/md'
  import {BiUpvote,BiDownvote} from 'react-icons/bi'
  import { Link } from "react-router-dom";
export const ArticelCard =({articles})=>{

return(
<Card
    bg='dark'
    text='light'
    style={{ width: '100%'}}
    
    className={`${articles.article_id}`}
  >
    <Card.Header ><Link style={{ textDecoration: 'none' }} to={{
    pathname: `/articles/${articles.topic}/${articles.article_id}`
  }}><p className="title">{articles.title} </p></Link>
    <p className="date"><MdUpdate/>{articles.created_at.slice(0,-14)}</p></Card.Header>
    <Card.Body>
      <Card.Text>
        {articles.body}
      </Card.Text>
    </Card.Body>
    <Card.Footer
    >
     
       <p className="author-comments"><MdOutlineCreate/>{articles.author} <FaRegCommentDots className="comment-icon"/>  {articles.votes === 0 ? "" : articles.votes} <BiUpvote className="upvote"/> <BiDownvote className="downvote"/></p>  

    </Card.Footer>
  </Card>
)
}

export default ArticelCard