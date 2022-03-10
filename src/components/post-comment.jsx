import { useState } from 'react';
import { Form ,Button,Card} from 'react-bootstrap';
import {insertComment} from '../api'
export const PostComment = ({id,setComments}) => {
    const [Comment, setNewComment] = useState("");
    const [err,setErr]=useState(false)
    const [posted , setPosted] = useState(null)
  
    const handleSubmit = (event) =>{

        var today = new Date().toString().slice(0,-17);
        
      event.preventDefault()

      console.log(Comment)
      
        setComments((currentComments)=>{
            const newComment={
                comment_id:currentComments.length+1,
                author: 'cooljmessy',
                body: Comment,
                created_at: today,
                votes: 0

            }
            return [newComment,...currentComments]
            
        })

        const commentForApi={
            username: 'cooljmessy',
            body: Comment
        }
        setPosted(true)
        insertComment(id,commentForApi).then(()=>{
            setPosted(null)
        }).catch((err)=>{
            setPosted(null)
            setErr(true)
        })
    }
    return (
        <Card bg='dark'
        text='light'
        style={{ width: '100%'}}>
      <Form className="form-comment" onSubmit={handleSubmit}>
    
      <Card.Body>
      <Card.Text>
        Write a comment
      </Card.Text>
            {err ? <Card.Text>Sorry something happened!</Card.Text>  : null}
          <input className="input-comment"value={Comment} 
          onChange={(e)=>setNewComment(e.target.value)} required/>
          
   
        <Button disabled={posted}variant="dark"type="submit">Post</Button>
    </Card.Body>
      </Form>
      </Card>
    );
  };