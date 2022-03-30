import { Card, Button } from "react-bootstrap";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlineCreate, MdUpdate } from "react-icons/md";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { updateVote } from "../api";
import ErrorPage from "./ErrorPage";
export const ArticelCard = ({ article }) => {
  const [vote, setVote] = useState(article.votes);
  const [upvote, setUpvote] = useState(null);
  const [downvote, setDownvote] = useState(null);
  const [err, setErr] = useState(null);
  const handleUpVote = (id) => {
    setUpvote(() => !upvote);

    if (downvote) {
      setVote((currVote) => currVote + 2);
      updateVote(id, 2).catch((error) => {
        setErr("Something went wrong, please try again.");
      });
    } else {
      setVote((currVote) => currVote + 1);
      updateVote(id, 1).catch((error) => {
        setErr("Something went wrong, please try again.");
      });
    }
    if (upvote) {
      setVote((currVote) => currVote - 2);
      updateVote(id, -2).catch((error) => {
        setErr("Something went wrong, please try again.");
      });
    }
    setDownvote(null);
  };
  const handleDownVote = (id) => {
    setDownvote(() => !downvote);
    if (upvote) {
      setVote((currVote) => currVote - 2);
      updateVote(id, -2).catch((error) => {
        setErr("Something went wrong, please try again.");
      });
    } else {
      setVote((currVote) => currVote - 1);
      updateVote(id, -1).catch((error) => {
        setErr("Something went wrong, please try again.");
      });
    }
    if (downvote) {
      setVote((currVote) => currVote + 2);
      updateVote(id, +2).catch((error) => {
        setErr("Something went wrong, please try again.");
      });
    }
    setUpvote(null);
  };
  if (err) return <ErrorPage />;
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
            pathname: `/articles/${article.article_id}/${article.topic}`,
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
        <Card.Text className="author-comments">
          <MdOutlineCreate />
          {article.author}
          <Button
            onClick={() => {
              handleUpVote(article.article_id);
            }}
            variant="dark"
          >
            {" "}
            <BiUpvote className="upvote" />
          </Button>
          {vote}
          <Button
            onClick={() => handleDownVote(article.article_id)}
            variant="dark"
          >
            <BiDownvote className="downvote" />
          </Button>

          <Link
            style={{ textDecoration: "none" }}
            to={{
              pathname: `/articles/${article.article_id}/${article.topic}`,
            }}
          >
            <FaRegCommentDots className="comment-icon" />
            {article.comment_count}
          </Link>
        </Card.Text>
      </Card.Footer>
    </Card>
  );
};

export default ArticelCard;
