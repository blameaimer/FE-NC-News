  import {Card} from "react-bootstrap";
  import {FaRegCommentDots} from 'react-icons/fa'
  import {MdOutlineCreate,MdUpdate} from 'react-icons/md'

export const ArticelCard =({articles})=>{

return(
<Card
    bg='dark'
    text='light'
    style={{ width: '100%'}}
    
    className={`${articles.article_id}`}
  >
    <Card.Header ><p className="title">{articles.title} </p>
    <p className="date"><MdUpdate/>{articles.created_at.slice(0,-14)}</p></Card.Header>
    <Card.Body>
      <Card.Text>
        {articles.body}
      </Card.Text>
    </Card.Body>
    <Card.Footer
    >
     
       <p className="author-comments"><MdOutlineCreate/>{articles.author} <FaRegCommentDots/> {articles.comment_count}</p> {articles.votes === 0 ? "" : articles.votes}

    </Card.Footer>
  </Card>
)
}

export default ArticelCard