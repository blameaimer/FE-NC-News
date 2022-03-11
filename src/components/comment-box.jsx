import {Card} from "react-bootstrap";
import {FaRegCommentDots} from 'react-icons/fa'
import {MdOutlineCreate,MdUpdate,MdDelete} from 'react-icons/md'
import {BiUpvote,BiDownvote} from 'react-icons/bi'
import { Button } from "react-bootstrap";
import {deleteComment,selectComments} from '../api'
import { useState } from "react";
export default function Commentbox ({comments,setComments,ArticleId}){

const [deleted,setDeleted]= useState(null)

return comments.map((comment)=>{

const handleClick = (id)=>{

deleteComment(id)
.then(()=>{
  setDeleted(true)
  return selectComments(ArticleId)
})
.then((comments)=>{
  setDeleted(null)
 setComments(()=>{return comments})
})

 }

    return(
    
    <Card
        bg='dark'
        text='light'
        style={{ width: '100%' , height:'100%'}}
        key={comment.comment_id}
        className={`${comment.comment_id}`}
      >
        
        <Card.Title ><p>{comment.author}</p>
          <p className="date-main"><MdUpdate/>{comment.created_at.slice(0,-14)} <Button disabled={deleted}className="delete-button" variant="dark" onClick={()=>handleClick(comment.comment_id)}>{<MdDelete/>}</Button></p>
       </Card.Title>
      <Card.Body>{comment.body}</Card.Body>
        <Card.Footer>  
        <BiUpvote className="upvote"/> <BiDownvote className="downvote"/> {comment.votes === 0 ? "" : comment.votes } 
        </Card.Footer>
      </Card>
    )


})
}
