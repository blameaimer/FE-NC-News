import {Card} from "react-bootstrap";
import {FaRegCommentDots} from 'react-icons/fa'
import {MdOutlineCreate,MdUpdate} from 'react-icons/md'
import { Link } from "react-router-dom";
export default function ArticelTitleCard ({articles}){

return(

<Card
    bg='dark'
    text='light'
    style={{ width: '100%'}}
    
    className={`${articles.article_id}`}
  >
    <Card.Header><h1 className="Welcome">Welcome to NC News</h1></Card.Header>
    <Card.Title >
    <Link style={{ textDecoration: 'none' }} to={{
    pathname: `/articles/${articles.topic}/${articles.article_id}`
  }}> <p className="title-main">{articles.title}</p>
  </Link></Card.Title>
  
      <p className="date-main"><MdUpdate/>{articles.created_at.slice(0,-14)}</p>
    <Card.Footer
    >  
       <p className="author-comments"><MdOutlineCreate/>{articles.author} <FaRegCommentDots/> {articles.comment_count} </p> {articles.votes === 0 ? "" : articles.votes } 
    </Card.Footer>
  </Card>
)
}
