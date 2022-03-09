import {Card} from "react-bootstrap";
import {FaRegCommentDots} from 'react-icons/fa'
import {MdOutlineCreate,MdUpdate} from 'react-icons/md'
import { Link } from "react-router-dom";
import {BiUpvote,BiDownvote} from 'react-icons/bi'
export default function Commentbox ({comments}){

    

return comments.map((comment)=>{

    return(
    
    <Card
        bg='dark'
        text='light'
        style={{ width: '100%'}}
        key={comment.comment_id}
        className={`${comment.comment_id}`}
      >
        
        <Card.Title ><p>{comment.author}</p>
          <p className="date-main"><MdUpdate/>{comment.created_at.slice(0,-14)}</p>
       </Card.Title>
      <Card.Body>{comment.body}</Card.Body>
        <Card.Footer>  
        <BiUpvote className="upvote"/> <BiDownvote className="downvote"/> {comment.votes === 0 ? "" : comment.votes } 
        </Card.Footer>
      </Card>
    )


})
}
