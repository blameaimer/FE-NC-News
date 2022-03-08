import {Card} from "react-bootstrap";


export default function ArticelTitleCard ({articles}){

return(
<Card
    bg='dark'
    text='light'
    style={{ width: '100%'}}
    
    className={`${articles.article_id}`}
  >
    <Card.Title >
      <p className="title-main">{articles.title}</p></Card.Title>
    <Card.Footer
    >  
       <p className="author-comments">{articles.author}  {articles.comment_count} {articles.created_at.slice(0,-14)}</p> {articles.votes === 0 ? "" : articles.votes } 
    </Card.Footer>
  </Card>
)
}
