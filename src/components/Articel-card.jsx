import { Card, Button } from "react-bootstrap";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlineCreate, MdUpdate } from "react-icons/md";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { updateVote } from "../api";
export const ArticelCard = ({ article }) => {
  const [vote, setVote] = useState(article.votes);
  const [upvote, setUpvote] = useState(null);
  const [downvote, setDownvote] = useState(null);
  const [err, setErr] = useState(null);

  const handleUpVote = (id) => {
    if (downvote) {
      setVote((currVote) => currVote + 2);
      updateVote(id, 2).catch((err) => {
        setErr("Something went wrong, please try again.");
      });
    } else {
      setVote((currVote) => currVote + 1);
      updateVote(id, 1).catch((err) => {
        setErr("Something went wrong, please try again.");
      });
    }
    setUpvote(true);
    setDownvote(null);
  };
  const handleDownVote = (id) => {
    if (upvote) {
      setVote((currVote) => currVote - 2);
      updateVote(id, -2).catch((err) => {
        setErr("Something went wrong, please try again.");
      });
    } else {
      setVote((currVote) => currVote - 1);
      updateVote(id, -1).catch((err) => {
        setErr("Something went wrong, please try again.");
      });
    }
    setDownvote(true);
    setUpvote(null);
  };

  return (
    <Card
      bg="dark"
      text="light"
      style={{ width: "100%" }}
      className={`${article.article_id}`}
    >
      <Card.Header>
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: `${article.article_id}`,
          }}
        >
          <p className="title">{article.title} </p>
        </Link>
        <p className="date">
          <MdUpdate />
          {article.created_at.slice(0, -14)}
        </p>
      </Card.Header>

      <Card.Body>
        <Card.Text>{article.body}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <p className="author-comments">
          <MdOutlineCreate />
          {article.author}
          <FaRegCommentDots className="comment-icon" />
          {article.comment_count}
          <Button
            disabled={upvote}
            onClick={() => handleUpVote(article.article_id)}
            variant="dark"
          >
            <BiUpvote className="upvote" />
          </Button>
          {vote}
          <Button
            disabled={downvote}
            onClick={() => handleDownVote(article.article_id)}
            variant="dark"
          >
            <BiDownvote className="downvote" />
          </Button>
        </p>
      </Card.Footer>
    </Card>
  );
};
export default ArticelCard;
