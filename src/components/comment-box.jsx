import { Card, Button } from "react-bootstrap";
import { MdUpdate, MdDelete } from "react-icons/md";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { deleteComment, selectComments } from "../api";
import { useState } from "react";
import { UserContext } from "./User";
import { useContext } from "react";

export default function Commentbox({ comments, setComments, ArticleId }) {
  const [deleted, setDeleted] = useState(null);

  let { user } = useContext(UserContext);
  return comments.map((comment) => {
    const handleClick = (id) => {
      deleteComment(id)
        .then(() => {
          setDeleted(true);
          return selectComments(ArticleId);
        })
        .then((comments) => {
          setDeleted(null);
          setComments(() => {
            return comments;
          });
        });
    };

    return (
      <Card
        bg="dark"
        text="light"
        style={{ width: "100%", height: "100%" }}
        key={comment.comment_id}
        className={`${comment.comment_id}`}
      >
        <Card.Title>
          <p className="comment-author">
            {comment.author} <MdUpdate />
            {comment.created_at.slice(0, -14)}
            {comment.author === user ? (
              <Button
                disabled={deleted}
                className="delete-button"
                variant="dark"
                onClick={() => handleClick(comment.comment_id)}
              >
                {<MdDelete className="delete-icon" />}
                <span>Delete</span>
              </Button>
            ) : (
              ""
            )}
          </p>
        </Card.Title>
        <Card.Body>{comment.body}</Card.Body>
      </Card>
    );
  });
}
