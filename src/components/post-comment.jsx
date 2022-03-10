import { useState } from 'react';
import { Form ,Button,Card} from 'react-bootstrap';
import {insertComment} from '../api'
export const PostComment = ({id,setComments}) => {
    const [Comment, setNewComment] = useState("");
    const [err,setErr]=useState(false)
    const [posted , setPosted] = useState(null)
  
    const handleSubmit = (event) =>{
        
      event.preventDefault()
      

        const commentForApi={
            username: 'cooljmessy',
            body: Comment
        }
        setPosted(true)
        insertComment(id,commentForApi).then(({comment})=>{
          
          setComments((currComments)=> {return [comment,...currComments]})
            setPosted(null)
            setNewComment("")
        }).catch((err)=>{
            setPosted(null)
            setErr(true)
            setNewComment("")
            
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
            <Form.Label>
          <input className="input-comment"value={Comment} 
          onChange={(e)=>setNewComment(e.target.value)} required/>
          </Form.Label>
   
        <Button disabled={posted}variant="dark"type="submit">Post</Button>
    </Card.Body>
      </Form>
      </Card>
    );
  };