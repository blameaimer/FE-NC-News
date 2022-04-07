import { Card, Button } from "react-bootstrap";
import { MdUpdate, MdDelete } from "react-icons/md";
import { deleteComment, selectComments, updateCommentVote } from "../api";
import { useState } from "react";
import { UserContext } from "./User";
import { useContext } from "react";
import {
  BsHandThumbsUpFill,
  BsHandThumbsUp,
  BsFillHandThumbsDownFill,
  BsHandThumbsDown,
} from "react-icons/bs";
import ErrorPage from "./ErrorPage";
export default function Commentbox({ comment, setComments, ArticleId }) {
  const [deleted, setDeleted] = useState(null);
  const [vote, setVote] = useState(comment.votes);
  const [upvote, setUpvote] = useState(null);
  const [downvote, setDownvote] = useState(null);
  const [err, setErr] = useState(null);
  let { user } = useContext(UserContext);

  const handleUpVote = (id) => {
    setUpvote(() => !upvote);

    if (downvote) {
      setVote((currVote) => currVote + 2);
      updateCommentVote(id, 2).catch((error) => {
        setErr("Something went wrong, please try again.");
      });
    } else {
      setVote((currVote) => currVote + 1);
      updateCommentVote(id, 1).catch((error) => {
        setErr("Something went wrong, please try again.");
      });
    }
    if (upvote) {
      setVote((currVote) => currVote - 2);
      updateCommentVote(id, -2).catch((error) => {
        setErr("Something went wrong, please try again.");
      });
    }
    setDownvote(null);
  };
  const handleDownVote = (id) => {
    setDownvote(() => !downvote);
    if (upvote) {
      setVote((currVote) => currVote - 2);
      updateCommentVote(id, -2).catch((error) => {
        setErr("Something went wrong, please try again.");
      });
    } else {
      setVote((currVote) => currVote - 1);
      updateCommentVote(id, -1).catch((error) => {
        setErr("Something went wrong, please try again.");
      });
    }
    if (downvote) {
      setVote((currVote) => currVote + 2);
      updateCommentVote(id, +2).catch((error) => {
        setErr("Something went wrong, please try again.");
      });
    }
    setUpvote(null);
  };

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
  if (err) return <ErrorPage />;
  return (
    <Card
      bg="dark"
      text="light"
      style={{ width: "100%", height: "100%" }}
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
      <Card.Footer className="comment-footer">
        <Button
          disabled={comment.author === user ? true : false}
          onClick={() => {
            handleUpVote(comment.comment_id);
          }}
          variant="dark"
        >
          {upvote ? (
            <BsHandThumbsUpFill className="commentupvote" />
          ) : (
            <BsHandThumbsUp className="commentupvote" />
          )}
        </Button>
        {vote}
        <Button
          disabled={comment.author === user ? true : false}
          onClick={() => handleDownVote(comment.comment_id)}
          variant="dark"
        >
          {downvote ? (
            <BsFillHandThumbsDownFill className="commentdownvote" />
          ) : (
            <BsHandThumbsDown className="commentdownvote" />
          )}
        </Button>
      </Card.Footer>
    </Card>
  );
}
